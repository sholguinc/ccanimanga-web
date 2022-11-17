const { google } = require('googleapis');

// env variables
const CLIENT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;


// Scope
const scopes = [
    'https://www.googleapis.com/auth/drive.readonly'
];

const auth = new google.auth.JWT(
    CLIENT_EMAIL, null,
    PRIVATE_KEY, scopes
);

const drive = google.drive({ version: "v3", auth });

async function driveFolders() {
    const response = await drive.files.list({
        q: `mimeType = 'application/vnd.google-apps.folder'`
    });
    const folders = response.data.files
    if (folders.length) {
        return folders
    } else {
        console.log('No folders found');
    }
}

async function getDriveFolderID(folderName) {
    const foldersArray = await driveFolders();
    const folderInfo = foldersArray.find(folderObject => folderObject.name === folderName)
    if (folderInfo) {
        return folderInfo.id
    } else {
        console.log('No folder found');
    }
}

async function driveImages(folderName) {
    const folderID = await getDriveFolderID(folderName);
    if (folderID) {
        const response = await drive.files.list({
            q: `'${folderID}' in parents`,
        });
        const files = response.data.files
        if (files.length) {
            // noinspection UnnecessaryLocalVariableJS
            const images = files.filter(file => file.mimeType.includes("image")) // filter images files
            return images
        } else {
            console.log('No files found');
        }
    }
}

export default driveImages;
