// functions/index.js
// Այս ֆայլը պետք է տեղադրվի Ձեր Firebase նախագծի functions/ թղթապանակում։

const functions = require("firebase-functions");
const admin = require("firebase-admin");
// Nodemailer-ը այլևս անհրաժեշտ չէ, եթե էլ. փոստ չենք ուղարկում
// const nodemailer = require("nodemailer");
// defineSecret-ը այլևս անհրաժեշտ չէ, եթե Secret Manager չենք օգտագործում
// const { defineSecret } = require('firebase-functions/params');

admin.initializeApp();

// =========================================================================
// Առաջին ֆունկցիա: Ադմինիստրատորին ծանուցող էլ. փոստի ֆունկցիան հեռացված է,
// քանի որ այն պահանջում է Blaze պլան։
// =========================================================================
/*
exports.sendInquiryNotificationEmail = functions
    .runWith({
        secrets: [gmailEmail, gmailPassword, adminEmail] // Սա արդեն Blaze պահանջող կլիներ
    })
    .firestore
    .document('inquiries/{docId}')
    .onCreate(async (snap, context) => {
        // ... կոդը էլ. փոստ ուղարկելու համար ...
    });
*/

// =========================================================================
// Երկրորդ ֆունկցիա: Միայն պահպանում է պատասխանը Firestore-ում (առանց էլ. փոստի)
// =կանչվում է frontend-ից՝ `httpsCallable`-ի միջոցով)
// =========================================================================
exports.saveInquiryReplyToFirestore = functions // Անունը փոխել ենք ավելի հստակ լինելու համար
    // runWith-ը այլևս անհրաժեշտ չէ, քանի որ գաղտնիքներ չենք օգտագործում այս ֆունկցիայում
    // .runWith({})
    .https
    .onCall(async (data, context) => {
        // Ստուգում ենք, արդյոք օգտատերը աուտենտիֆիկացված է (միշտ լավ է անվտանգության համար)
        if (!context.auth) {
            throw new functions.https.HttpsError(
                'unauthenticated',
                'Միայն մուտք գործած օգտատերերը կարող են պահպանել պատասխաններ։'
            );
        }

        // Կարող եք ավելացնել նաև ադմինիստրատորի ստուգումը, եթե ցանկանում եք
        // if (!context.auth.token.admin) { ... }
        
        const { recipientEmail, recipientName, originalMessage, replyContent, inquiryId } = data;

        // Ստուգում ենք պարտադիր դաշտերը
        if (!replyContent || !inquiryId) {
            throw new functions.https.HttpsError(
                'invalid-argument',
                'Անհրաժեշտ են replyContent և inquiryId դաշտերը։'
            );
        }

        try {
            // Պահպանել պատասխանը Firestore-ում
            const db = admin.firestore();
            await db.collection('inquiries').doc(inquiryId).collection('replies').add({
                replyContent: replyContent,
                repliedBy: context.auth.uid, // Ով է պատասխանել
                repliedAt: admin.firestore.FieldValue.serverTimestamp(),
                recipientEmail: recipientEmail || null, // Պահպանում ենք տեղեկության համար
                recipientName: recipientName || null,
                originalInquiryMessage: originalMessage || null,
            });
            console.log(`Պատասխանը պահվեց Firestore-ում Inquiry ID: ${inquiryId}-ի համար։`);

            return { success: true, message: 'Պատասխանն հաջողությամբ պահպանվեց տվյալների բազայում։' };
        } catch (error) {
            console.error('Սխալ պատասխանը պահպանելիս։', error);
            throw new functions.https.HttpsError(
                'internal',
                'Պատասխանը պահպանելիս սխալ առաջացավ։',
                error.message
            );
        }
    });
