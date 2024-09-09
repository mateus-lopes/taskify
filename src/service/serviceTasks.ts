import { getDocs, collection, addDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { ITask, IListTask } from '@/types/typesTasks';

const db = getFirestore();

export const serviceGetTasks = async () => {
    try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));
        const tasks: Array<any> = [];
        querySnapshot.forEach((doc) => {
            const taskData = doc.data();
            tasks.push(taskData);
        });
        console.log('service: Documents:', tasks);
        return tasks;
    } catch (error) {
        console.error('Erro ao obter os documentos:', error);
        throw error;
    }
}

export const serviceAddTask = async (task: ITask | IListTask) => {
    try {
        const docRef = await addDoc(collection(db, 'tasks'), task);
        console.log('service: Document written with ID:', docRef.id);
        return docRef.id;
    } catch (error) {
        console.error('service: Error adding document:', error);
        throw error;
    }
}

export const serviceRemoveTask = async (task: ITask | IListTask) => {
    console.log('Removing task:', task);
}

export const serviceUpdateTask = async (task: ITask | IListTask) => {
    console.log('Updating task:', task);
}