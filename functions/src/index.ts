import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
admin.initializeApp();
import { authGuard } from './auth';
import { update } from './database';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
exports.db = {
    campaignQuestion: functions.firestore.document('campaigns/{campaign}').onUpdate(update)
}
exports.a = {
    userGuard: functions.auth.user().onCreate(authGuard)
}
// const test = {
//     admin: authGuard({ email: 'dreiparrent@gmail.com' } as any),
// }