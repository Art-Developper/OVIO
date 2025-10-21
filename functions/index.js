const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { defineSecret } = require('firebase-functions/params');

admin.initializeApp();

// Սահմանել գաղտնիքները (պետք է լինեն նույն Firebase նախագծի համար)
const gmailEmail = defineSecret('GMAIL_EMAIL');
const gmailPassword = defineSecret('GMAIL_PASSWORD');
const adminEmail = defineSecret('ADMIN_EMAIL'); // Սա նոր գաղտնիք է՝ Ձեր անձնական էլ. հասցեի համար

// =========================================================================
// Առաջին ֆունկցիա: Ուղարկում է էլ. փոստ ԱԴՄԻՆԻՍՏՐԱՏՈՐԻՆ, երբ նոր հարցում է ստացվում
// =========================================================================
exports.sendInquiryEmail = functions
    .runWith({
        secrets: [gmailEmail, gmailPassword, adminEmail] // Ֆունկցիայի համար անհրաժեշտ բոլոր գաղտնիքները
    })
    .firestore
    .document('inquiries/{docId}')
    .onCreate(async (snap, context) => {
        const inquiry = snap.data();

        // Ստեղծել Nodemailer transporter-ը ֆունկցիայի ներսում
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmailEmail.value(), // Ուղարկողի էլ. հասցեն (ձեր կողմից սահմանված Gmail)
                pass: gmailPassword.value()
            }
        });

        const mailOptions = {
            from: gmailEmail.value(),
            to: adminEmail.value(), // Ձեր անձնական էլ. հասցեն, որտեղ կստանաք ծանուցումները
            subject: `Նոր հարցում կայքից՝ ${inquiry.name}`,
            html: `
                <p>Դուք ստացել եք նոր հարցում կայքի միջոցով:</p>
                <p><strong>Անուն:</strong> ${inquiry.name}</p>
                <p><strong>Էլ. հասցե:</strong> ${inquiry.email}</p>
                <p><strong>Հեռախոսահամար:</strong> ${inquiry.phone || 'Նշված չէ'}</p>
                <p><strong>Հաղորդագրություն:</strong> ${inquiry.message}</p>
                <p><strong>Ուղարկման ամսաթիվ:</strong> ${new Date(inquiry.timestamp.seconds * 1000).toLocaleString()}</p>
            `
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Ադմինին ծանուցող էլ. փոստն հաջողությամբ ուղարկվեց:', adminEmail.value());
            return null;
        } catch (error) {
            console.error('Սխալ ադմինին ծանուցող էլ. փոստն ուղարկելիս:', error);
            // Կարևոր է, որ ֆունկցիան չի ձախողի Firestore-ի գործողությունը։
            return null;
        }
    });

// =========================================================================
// Երկրորդ ֆունկցիա: Ուղարկում է պատասխան էլ. փոստ ՀԱՃԱԽՈՐԴԻՆ (կանչվում է frontend-ից)
// =========================================================================
exports.sendReplyEmail = functions
    .runWith({
        secrets: [gmailEmail, gmailPassword] // Ֆունկցիայի համար անհրաժեշտ գաղտնիքները
    })
    .https
    .onCall(async (data, context) => {
        // Ստուգում ենք, արդյոք օգտատերը աուտենտիֆիկացված է (եթե ցանկանում եք սահմանափակել մուտքը)
        // Եթե այս ֆունկցիան պետք է կանչվի միայն ադմինի կողմից, ապա կարող եք ավելացնել այս ստուգումը
        // եթե (!context.auth) {
        //     throw new functions.https.HttpsError(
        //         'unauthenticated',
        //         'Միայն աուտենտիֆիկացված օգտատերերը կարող են ուղարկել նամակներ։'
        //     );
        // }
        // Կարող եք նաև ստուգել user.uid-ը, որ համոզվեք, որ այն ադմին է

        const { to, subject, text } = data;

        if (!to || !subject || !text) {
            throw new new functions.https.HttpsError(
                'invalid-argument',
                'Անհրաժեշտ են to, subject և text դաշտերը։'
            );
        }

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
            html: `<p>${text.replace(/\n/g, '<br>')}</p>`, // Պատասխանի բովանդակությունը
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