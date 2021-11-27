import { useState, useEffect } from "react";
import { projectFirestore } from '../firebase/config';

export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const ref = projectFirestore.collection(collection).doc(id);
        const usubscribe = ref.onSnapshot((snapshot) => {
            if (snapshot.data()) {
                setDocument({ ...snapshot.data(), id: snapshot.id })
                setError(null);
            } else {
                setError("No such document exists");
            }
            
        }, (error) => {
            console.log(error.message)
            setError("Failed to get document");
        });

        return () => usubscribe();
    }, [collection, id])

    return { document, error };
}