import React, {useState, useEffect} from 'react'
import "./Chatbox.css"
import {AccountCircle, Search, AttachFile, MoreVert, InsertEmoticon, KeyboardVoice} from "@material-ui/icons"
import Message from './Message'
import {useParams} from "react-router-dom"
import db from "../firebase"

export default function Chatbox(props) {
    const [message, setMessage] = useState("");
    const [roomName, setRoomName] = useState("")
    const sendMessage = (e) => {
        e.preventDefault()
        setMessage("")
    }
    const { id } = useParams();
    useEffect(() => {
        db.collection("rooms").doc(id).onSnapshot(snapshot => (setRoomName(snapshot.data().name)))
    }, [id])
    return (
        <div className="chatbox">
            <div className="chatbox__header">
                <AccountCircle />
                <div className="chatbox__headerInfo">
                    <h2>{roomName}</h2>
                    <p>Members numbers or names, ther is really really long info</p>
                </div>
                <div className="chatbox__headerActions"> 
                    <Search />
                    <MoreVert /> 
                </div>
            </div>
            <div className="chatbox__body">
                <Message />
                <Message />
            </div>
            <form className="chatbox__footer">
                <InsertEmoticon />
                <AttachFile />
                <input value={message} onChange={(e) => setMessage(e.target.value)} type="text" placeholder="Type a message"/>
                <KeyboardVoice />
                <button onClick={sendMessage} style={{display: "none"}} type="submit"></button>
            </form>
        </div>
    )
}
