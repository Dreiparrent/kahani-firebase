import { Change, EventContext } from 'firebase-functions';
import { DocumentSnapshot } from 'firebase-functions/lib/providers/firestore';
// import { firestore } from 'firebase-admin';

// interface IQuestion {
//     length: number,
//     order: number,
//     text: string,
//     ref?: any
// }

export const update = async (change: Change<DocumentSnapshot>, context: EventContext) => {
    // if (change.before && change.after && change.before.data && change.after.data) {
    //     const afterQuestions = change.after.data()!['questions'] as IQuestion[];
    //     const beforeQuestions = change.before.data()!['questions'] as IQuestion[];
    //     if (afterQuestions !== beforeQuestions) {
    //         const questionsRef = change.after.ref.collection('questions');
    //         const newQuestions = afterQuestions.map(async (question) => {
    //             const questionData = question;
    //             const questionUpdate = { question: question.text };
    //             let qRef: firestore.DocumentReference;
    //             if (!question.ref || typeof question.ref === 'string') {
    //                 const newRef = await questionsRef.add(questionUpdate);
    //                 qRef = newRef;
    //             } else {
    //                 await questionsRef.doc(question.ref).set(questionUpdate, { merge: true });
    //                 qRef = question.ref;
    //             }
    //             questionData.ref = qRef;
    //             return questionData;
    //         });
    //         const addedRefs = await change.after.ref.set({ questions: newQuestions }, { merge: true });
    //         return addedRefs;
    //     } else {
    //         return false;
    //     }
    // } else return;
    return;
}