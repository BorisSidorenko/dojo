import { useState, useEffect } from "react";
import { projectAuth, projectStorage } from '../firebase/config';
import { useAuthContext } from '../hooks/useAuthContext';

export const useSignup = () => {
    const [isCancelled, setIsCancelled] = useState(false);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const { dispatch } = useAuthContext();

    const signup = async (email, password, displayName, thumbnail) => {
        setError(null);
        setIsPending(true);

        try {
            const res = await projectAuth.createUserWithEmailAndPassword(email, password);            

            if (!res) {
                throw new Error('Could not complete signup');
            }

            const uploadPath = `thumbnails/${res.user.uid}/${thumbnail.name}`;
            const img = await projectStorage.ref(uploadPath).put(thumbnail);
            const photoURL = await img.ref.getDownloadURL();

            await res.user.updateProfile({ displayName, photoURL });

            dispatch({ type: 'LOGIN', payload: res.user });

            if (!isCancelled) {
                setIsPending(false);
                setError(null);
            }   
        } catch (err) {
            if (!isCancelled) {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            }
        }
    }
    
    useEffect(() => {
        return () => setIsCancelled(true);
    }, [])

    return { error, isPending, signup };
}