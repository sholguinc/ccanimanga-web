const { google } = require('googleapis');
const credentials = require('../../credentials.json');


// export async function getServerSideProps() {
//     const response = await getDriveImages(clientEmail, privateKey);
// }

const CLIENT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT;
const PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;
// console.log(CLIENT_EMAIL)
// console.log(PRIVATE_KEY)
// console.log(credentials.client_email)
// console.log(credentials.private_key)

const scopes = [
    'https://www.googleapis.com/auth/drive.readonly'
];

const auth = new google.auth.JWT(
    credentials.client_email, null,
    credentials.private_key, scopes
);

// const auth = new google.auth.JWT(
//     CLIENT_EMAIL, null,
//     PRIVATE_KEY, scopes
// );

const drive = google.drive({ version: "v3", auth });

const papercraft = '1G2i1u4Gt8qmQjR6NaKMQ1pQpfENIZo9e';
const shogi = '1isGm04LGPcXo5UwtdkWquGFQ8bkG7w7V';
const origami = '1ffGB73gD_hw8D7PBLhO88BXicCsoKcC2'
const  manga = '10892vvfiIHCb_Try7K8BAQ1UZpGeDbji'


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

driveImages('manga').then(value => console.log(value))
