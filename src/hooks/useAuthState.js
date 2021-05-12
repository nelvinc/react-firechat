import { useEffect } from "react";


function useAuthState(auth) {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(() => auth.currentUser);

    useEffect (() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setUser(user);
            } else {
                setUser(false);
            }
            if (initializing) {
                setInitializing(false);
            }
        });

        return unsubscribe;
    }, [auth, initializing]);

    return { user, initializing };
}


export default useAuthState;