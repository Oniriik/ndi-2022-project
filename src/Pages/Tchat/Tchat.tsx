/* eslint-disable max-len */
import './Tchat.scss';

import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { sendMessage, socket } from 'Socket';

export const Tchat = ()=>{
    const [username,saveUsername]= useState(localStorage.getItem('username')|| '');
    const [usernameInput,setUsername]= useState('');
    const [message ,setMessage]= useState('');
    const [messages, setMessages] = useState([]);
    socket.on('connect', () => {
        console.log('connected');
    });
    
    socket.on('receive-message',(message) => {
        setMessages([...messages,message]);
        
    });

    const onSubmitMessage = async () => {
        sendMessage({ username, message });
    };

    return (
        <div className="tchat">
            {
                username ? 
                    <>
                        <div className='messages-wrapper'>
                            {
                                messages.map((message) => (
                                    <div className='message' key={message.id}>
                                        <span>{message.username}</span>
                                        <span>{message.message}</span>
                                        <span>{message.sendAt}</span>
                                    </div>
                                ))}
                   
                        </div>
                        <TextField
                            fullWidth
                            id="message"
                            name="message"
                            label="message"
                            type="text"
                            value={message}
                            onChange={(event)=>setMessage(event.target.value)}
                        />
                        <Button color="primary" variant="contained" fullWidth onClick={onSubmitMessage}>
                                 Submit
                        </Button>
                    </>
                    :
                    <div className='username-select'>
                        <div className='upper'>
                            <h1>
                            Chatroom anonyme
                            </h1>
                            <p>
                        Ici, vous pouvez discuter de manière anonyme avec d’autres utilisateurs de vos expériences ou problèmes dans les sujets gravitant autour de l’éducation sexuelle, de la contraception, des IST. 
Nous encourageons les discussions ouvertes mais veillez à rester respectueux et ouverts d’esprit.
                            </p>
                        </div>
                        <div className='lower'>
                            <h2>
                            Comment voulez-vous qu’on s’adresse à vous?
                            </h2>
                            <form>
                                <TextField
                                    fullWidth
                                    id="username"
                                    name="username"
                                    label="username"
                                    type="text"
                                    onChange={(event)=>setUsername(event.target.value)}
                                />
                                <Button color="primary" variant="contained" fullWidth type='submit' onClick={() => saveUsername(usernameInput)}>
                                Submit
                                </Button>
                            </form>
                        </div>
                    </div>
            }
            ≈
        </div>
    );
};