const { google } = require('googleapis');


const credentials = require('../../../../credentials');

const scopes = [
    'https://www.googleapis.com/auth/drive'
];

const auth = new google.auth.JWT(
    credentials.client_email, null,
    credentials.private_key, scopes
);

const drive = google.drive({ version: "v3", auth });

async function driveImages() {
    await drive.files.list({}, (err, res) => {
        if (err) throw err;
        const files = res.data.files;
        if (files.length) {
            return files
        } else {
            console.log('No files found');
        }
    });
}

export default driveImages;
