const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");
const { defineSecret } = require('firebase-functions/params'); // Ավելացնել սա

admin.initializeApp();

// Սահմանել գաղտնիքները
const gmailEmail = defineSecret('GMAIL_EMAIL');
const gmailPassword = defineSecret('GMAIL_PASSWORD');

exports.sendInquiryEmail = functions
    .runWith({
        secrets: [gmailEmail, gmailPassword] // Նշել, որ այս ֆունկցիան օգտագործում է գաղտնիքներ
    })
    .firestore
    .document('inquiries/{docId}')
    .onCreate(async (snap, context) => {
        const inquiry = snap.data();

        // Ստեղծել Nodemailer transporter-ը ֆունկցիայի ներսում, որպեսզի secrets-ները հասանելի լինեն
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: gmailEmail.value(), // Օգտագործել .value()՝ գաղտնիքի արժեքը ստանալու համար
                pass: gmailPassword.value()
            }
        });

        const mailOptions = {
            from: gmailEmail.value(), // Ումից է գալիս նամակը
            to: 'your-personal-email@example.com', // Ձեր անձնական էլփոստը, ուր ցանկանում եք ստանալ նամակները
            subject: `Նոր հարցում կայքից՝ ${inquiry.name}`,
            html: `
                <p>Դուք ստացել եք նոր հարցում կայքի միջոցով:</p>
                <p><strong>Անուն:</strong> ${inquiry.name}</p>
                <p><strong>Էլ. հասցե:</strong> ${inquiry.email}</p>
                <p><strong>Հեռախոսահամար:</strong> ${inquiry.phone}</p>
                <p><strong>Հաղորդագրություն:</strong> ${inquiry.message}</p>
                <p><strong>Ուղարկման ամսաթիվ:</strong> ${new Date(inquiry.timestamp.seconds * 1000).toLocaleString()}</p>
            `
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Էլփոստն հաջողությամբ ուղարկվեց:', inquiry.email);
            return null;
        } catch (error) {
            console.error('Սխալ էլփոստն ուղարկելիս:', error);
            return null;
        }
    });