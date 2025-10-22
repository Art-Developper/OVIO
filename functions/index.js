// functions/index.js
// Այս ֆայլը պետք է տեղադրվի Ձեր Firebase նախագծի functions/ թղթապանակում։

const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { defineSecret } = require('firebase-functions/params'); // Պարտադիր է Firebase Functions v3.x+ համար

admin.initializeApp(); // Սա ի սկզբանե սկսում է Firebase Admin SDK-ն

// =========================================================================
// Գաղտնիքների սահմանում Firebase Secret Manager-ի միջոցով:
// Այս գաղտնիքները պետք է սահմանված լինեն Firebase CLI-ի միջոցով (տես ներքևում).
// e.g., firebase functions:secrets:set GMAIL_EMAIL "your_sending_email@gmail.com"
// =========================================================================
const gmailEmail = defineSecret('GMAIL_EMAIL');
const gmailPassword = defineSecret('GMAIL_PASSWORD');
const adminEmail = defineSecret('ADMIN_EMAIL'); // Ձեր անձնական էլ. հասցեն՝ ծանուցումների համար

// =========================================================================
// Առաջին ֆունկցիա: Ուղարկում է էլ. փոստ ԱԴՄԻՆԻՍՏՐԱՏՈՐԻՆ, երբ նոր հարցում է ստացվում Firestore-ում
// (սա ակտիվանում է ավտոմատ կերպով, երբ inquiries հավաքածուում նոր փաստաթուղթ է ստեղծվում)
// =========================================================================
exports.sendInquiryEmail = functions
    .runWith({
        secrets: [gmailEmail, gmailPassword, adminEmail] // Ֆունկցիայի համար անհրաժեշտ բոլոր գաղտնիքները
    })
    .firestore
    .document('inquiries/{docId}') // Սա նշանակում է, որ ֆունկցիան կաշխատի, երբ inquiries հավաքածուում նոր փաստաթուղթ ստեղծվի
    .onCreate(async (snap, context) => {
        const inquiry = snap.data(); // Ստանում ենք նոր հարցման տվյալները

        // Ստեղծել Nodemailer transporter-ը ֆունկցիայի ներսում
        // Սա օգտագործում է Gmail-ի հավատարմագրերը, որոնք պահվում են Secret Manager-ում
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmailEmail.value(), // Ուղարկողի էլ. հասցեն
                pass: gmailPassword.value() // Ուղարկողի էլ. հասցեի գաղտնաբառը (կամ App Password)
            }
        });

        const mailOptions = {
            from: gmailEmail.value(), // Ուղարկողի էլ. հասցեն
            to: adminEmail.value(), // Ստացողի էլ. հասցեն (ադմինի)
            subject: `Նոր հարցում կայքից՝ ${inquiry.name}`, // Նամակի վերնագիրը
            html: `
                <p>Դուք ստացել եք նոր հարցում կայքի միջոոցով:</p>
                <p><strong>Անուն:</strong> ${inquiry.name}</p>
                <p><strong>Էլ. հասցե:</strong> ${inquiry.email}</p>
                <p><strong>Հեռախոսահամար:</strong> ${inquiry.phone || 'Նշված չէ'}</p>
                <p><strong>Հաղորդագրություն:</strong> ${inquiry.message}</p>
                <p><strong>Ուղարկման ամսաթիվ:</strong> ${new Date(inquiry.timestamp.seconds * 1000).toLocaleString()}</p>
            ` // Նամակի HTML բովանդակությունը
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Ադմինին ծանուցող էլ. փոստն հաջողությամբ ուղարկվեց:', adminEmail.value());
            return null; // Ֆունկցիայի հաջող ավարտ
        } catch (error) {
            console.error('Սխալ ադմինին ծանուցող էլ. փոստն ուղարկելիս:', error);
            // Կարևոր է, որ ֆունկցիան չի ձախողի Firestore-ի գործողությունը, եթե էլ. փոստը չի ուղարկվել։
            return null; // Ֆունկցիայի ավարտ սխալով, բայց առանց Firestore-ի գործողությունը խաթարելու
        }
    });

// =========================================================================
// Երկրորդ ֆունկցիա: Ուղարկում է պատասխան էլ. փոստ ՀԱՃԱԽՈՐԴԻՆ (կանչվում է frontend-ից՝ `httpsCallable`-ի միջոցով)
// =========================================================================
exports.sendReplyEmail = functions
    .runWith({
        secrets: [gmailEmail, gmailPassword] // Այս ֆունկցիայի համար անհրաժեշտ գաղտնիքները
    })
    .https
    .onCall(async (data, context) => {
        // =====================================================================
        // !!! ԿԱՐԵՎՈՐ Է: CORS կարգավորումը տեղադրված է այստեղ (սերվերային կողմից) !!!
        // Սա թույլ է տալիս, որ Ձեր React հավելվածը (որը այլ դոմենից է, օրինակ՝ localhost)
        // կարողանա դիմել այս Cloud Function-ին։
        // Իրական միջավայրի համար (production) խորհուրդ է տրվում '*'-ը փոխարինել Ձեր իրական դոմենով։
        // Օրինակ: context.rawRequest.res.set('Access-Control-Allow-Origin', 'https://your-production-domain.com');
        // =====================================================================
        if (context.rawRequest && context.rawRequest.res) {
            context.rawRequest.res.set('Access-Control-Allow-Origin', '*');
            context.rawRequest.res.set('Access-Control-Allow-Headers', 'Content-Type');
            // Այլ CORS headers կարող են անհրաժեշտ լինել կախված Ձեր պահանջներից (e.g., Access-Control-Allow-Methods)
        }

        // Ստուգում ենք, արդյոք օգտատերը աուտենտիֆիկացված է (եթե ցանկանում եք սահմանափակել մուտքը)
        // Եթե այս ֆունկցիան պետք է կանչվի միայն ադմինի կողմից, ապա կարող եք ավելացնել այս ստուգումը
        // if (!context.auth) {
        //     throw new functions.https.HttpsError(
        //         'unauthenticated',
        //         'Միայն աուտենտիֆիկացված օգտատերերը կարող են ուղարկել նամակներ։'
        //     );
        // }
        // Կարող եք նաև ստուգել user.uid-ը, որ համոզվեք, որ այն ադմին է

        const { to, subject, text } = data; // Ստանում ենք տվյալները frontend-ից

        // Ստուգում ենք պարտադիր դաշտերը
        if (!to || !subject || !text) {
            throw new functions.https.HttpsError( // Ուղղված է "new new" սխալը
                'invalid-argument',
                'Անհրաժեշտ են to, subject և text դաշտերը։'
            );
        }

        // Ստեղծում ենք Nodemailer transporter-ը ֆունկցիայի ներսում
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmailEmail.value(),
                pass: gmailPassword.value()
            }
        });

        const mailOptions = {
            from: gmailEmail.value(), // Ձեր էլ. հասցեն, որից կգնա պատասխանը
            to: to,                   // Ստացողի էլ. հասցեն (հարցում ուղարկողը)
            subject: subject,         // Պատասխան նամակի վերնագիրը
            html: `<p>${text.replace(/\n/g, '<br>')}</p>`, // Պատասխանի բովանդակությունը (տողադարձերով)
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Պատասխան էլ. նամակն հաջողությամբ ուղարկվեց:', to);
            return { success: true, message: 'Նամակն հաջողությամբ ուղարկվեց։' };
        } catch (error) {
            console.error('Պատասխան էլ. նամակն ուղարկելիս սխալ առաջացավ։', error);
            throw new functions.https.HttpsError(
                'internal',
                'Նամակն ուղարկելիս սխալ առաջացավ։',
                error.message
            );
        }
    });