import { useEffect, useState, useRef } from "react";
import { db, firebase } from "../config/firebase";
import  Message from "./Message";

const Channel = ({ user = null }) => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {

        const query = db.collection('messages')
            .orderBy('createdAt')
            .limit(100);

        const unsubscribe = query.onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
            })); 
            setMessages(data);

        });
        return unsubscribe;

    }, [])

    const { uid, displayName, photoURL } = user;
    const [newMessage, setNewMessage] = useState('');

    const handleMessageOnChange = (e) => {
        e.preventDefault();
        setNewMessage(e.target.value);
    }

    const messagesRef = db.collection('messages');


    const handleOnSubmit = e => {
        e.preventDefault();

        const trimmedMessage = newMessage.trim();
        if (trimmedMessage) {
            messagesRef.add({
                text: trimmedMessage,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                uid,
                displayName,
                photoURL,
            });
            setNewMessage('');
        }
    };
    const inputRef = useRef();
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [inputRef]);
    
    return (
        <>
            <ul>
                {messages.map(message => (
                    <li key={message.id}>
                        <Message {...message} />
                    </li>
                ))}
            </ul>

            <form
                onSubmit={handleOnSubmit}>
                <input
                    ref={inputRef}
                    type="text"
                    value={newMessage}
                    onChange={handleMessageOnChange}
                    placeholder="Escribe tu mensaje aqui..."
                />

                <button
                    class=" enviar"
                    type="submit"
                    disabled={!newMessage}
                >
                    Enviar
        </button>
            </form>
        </>
    );
};

export default Channel;