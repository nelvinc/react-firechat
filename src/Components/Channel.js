

import { useEffect, useState } from "react";
import { db } from "../config/firebae";

const Channel = ({ user = null }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const query = db.collection("messages")
            .orderBy("createdAt")
            .limit(100)

        const unsubscribe = query.onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            }));
            setMessages(data);
        });
        return unsubscribe;

    }, [])
    
    return <ul></ul>;
};

export default Channel;