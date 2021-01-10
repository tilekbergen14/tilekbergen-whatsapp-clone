import React, {useState, useEffect} from 'react'
import {AccountCircle, ControlPoint, DonutLarge, Message, MoreVert} from '@material-ui/icons';
import "./Sidebar.css"
import { IconButton } from '@material-ui/core';
import SidebarChat from "./SidebarChat"
import db from "../firebase"

function Sidebar() {
    const [chat, setChat] = useState("")
    const [data, setData] = useState([])

    const addNewChat = (e) => {
        e.preventDefault()
        setChat("")
    }
    useEffect(() => {
        db.collection("rooms").onSnapshot(snapshot => (setData(
            snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))
        )))
    }, []);
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <AccountCircle />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge style={{fontSize: 20}}/>
                    </IconButton>
                    <IconButton>
                    <Message style={{fontSize: 20}}/>
                        </IconButton>
                    <IconButton>
                        <MoreVert style={{fontSize: 20}}/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar__search">
                <form className="sidebar__searchBox">
                    <ControlPoint />
                    <input value={chat} onChange={(e) => setChat(e.target.value)} placeholder="Search or start a new chat" type="text"/>
                    <button onClick={addNewChat} style={{display: "none"}} type="submit"></button>
                </form>
            </div>
            <div className="sidebar__chat">
                {data.map(data => <SidebarChat key={data.id} data={data.data} id={data.id}></SidebarChat>)}
            </div>
        </div>
    )
}

export default Sidebar;