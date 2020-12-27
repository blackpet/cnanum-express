// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import admin from "firebase-admin";
import path from 'path';
const __dirname = path.resolve();


admin.initializeApp({
    credential: admin.credential.cert(__dirname + '/service/cnanum-d3a32-ea82fb38dbca.json')
});

export const db = admin.firestore();