/* eslint-disable max-len */
import './Tchat.scss';
import axios from 'axios';
import { useState } from 'react';
import { sendMessage, socket } from 'Socket';
import { timestampToTime } from 'Utils';
import { Switch } from 'antd';

export const Tchat = ()=>{
    const [username,saveUsername]= useState(localStorage.getItem('username')|| '');
    const [usernameInput,setUsername]= useState('');
    const [message ,setMessage]= useState('');
    const [messages, setMessages] = useState([]);
    const [aiToggle,setAi]= useState(false);
    socket.on('receive-message',(message) => {
        setMessages([...messages,message]);
        setMessage('');
        
    });

    const onSubmitMessage = async () => {
        if(!aiToggle){
            sendMessage({ username, message });
        }else{
            axios.post(`${process.env.REACT_APP_API_URL}/questions/openai`, {
                prompt: message, 
            })
                .then(({ data })=> {
                    setMessages([...messages,{ username, message,sendAt: new Date().getTime() },{ message : data.data.answer, username: 'AI',sendAt: new Date().getTime() }]);
                })
                .catch((error) =>{
                    console.log(error);
                });
        }
        const objDiv = document.getElementById('messages');
        window.scrollTo(0, objDiv.scrollHeight);

        setMessage('');
        
    };

    const isUsernameValid = ()=>{
        return usernameInput.trim().length < 5;
    };

    const isSender = (sender)=>{
        return sender == username;
    };
    return (
        <div className="tchat">
            <div className='infos-card'>
                <h1>Chatroom anonyme</h1>
                <p>Ici, vous pouvez discuter de manière anonyme avec d’autres utilisateurs de vos expériences ou problèmes dans les sujets gravitant autour de l’éducation sexuelle, de la contraception, des IST. 
Nous encourageons les discussions ouvertes mais veillez à rester respectueux et ouverts d’esprit.</p>
            </div>
            {
                username ?
                    <div className='messages-card'>
                        <div className='messages-wrapper' id='messages'>
                            {aiToggle&& <span>L'IA n'est pas destinée a remplacer l'avis d'un profesionnel </span>}
                            {
                                messages.map(({ username,message,sendAt,id }) => (
                                    <div className={`message ${isSender(username) ? 'sent': 'received'}`} key={id}>
                                        <div className={`message-body ${isSender(username) ? 'lavender': 'neon'}`}>
                                            <p>{message}</p>
                                        </div>
                                        <div className='message-infos'>
                                            <span>{username} - </span>
                                            <span>{timestampToTime(sendAt)}</span>
                                        </div>
                                        
                                    </div>
                                ))}
                   
                        </div>
                        <form>
                            <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}/>
                            <button
                                disabled={!message} className={message ? 'active':'disabled'}
                                onClick={(e)=>{e.preventDefault();onSubmitMessage();}}
                            >&#128233;</button>
                            <div className='ai-switch'>
                                <span>Humain</span>
                                <Switch size="small" onChange={setAi} />
                                <span>IA</span>
                            </div>
                            
                        </form>
                    </div>
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
                                <input type="text" onChange={(e)=>setUsername(e.target.value)} placeholder="Entre ton super pseudo"/>
                                <button disabled={isUsernameValid()} className={isUsernameValid() ? 'disabled':'active'} onClick={()=>{localStorage.setItem('username', usernameInput);saveUsername(usernameInput);}}>&#10003;</button>
                            </form>
                        </div>
                    </div>
            }
        </div>
    );
};