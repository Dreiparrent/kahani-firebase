// import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
// import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
const addUser = async (uid: string, isAdmin = false) => {
    try {
        const refSet = await admin.firestore().collection('users').doc('users').collection('refs').doc(uid).set({ admin: isAdmin });
        return refSet;
        // const client = await admin.firestore()
        // .collection('refs').doc(user.uid).set({ adm })
    } catch (error) {
        console.log('Error adding user', uid, isAdmin);
        return false;
    }
}

export const authGuard = async (user: admin.auth.UserRecord) => {
    const users = await admin.firestore().collection('users').doc('users').get();
    if (user.email) {
        if ((users.get('admin') as string[]).indexOf(user.email) !== -1) {
            return addUser(user.uid, true);
        } else if ((users.get('client') as string[]).indexOf(user.email) !== -1) {
            return addUser(user.uid);
        } else {
            try {
                const blocker = await admin.auth().updateUser(user.uid, { disabled: true });
                console.log('User Auto Blocked', blocker.toJSON());
                return blocker;
            } catch (error) {
                console.error('Error blocking user: ' + user.uid, error);
                return;
            }
        }
    };
    return;
}