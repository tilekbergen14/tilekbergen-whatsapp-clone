import React from 'react'
import {AccountCircle} from '@material-ui/icons'
import {Link} from "react-router-dom"

export default function SidebarChat(props) {
    const {name} = props.data
    return (
        <div>
            <Link to={`/${props.id}`}>
            <div className="sidebar__chatEach">
            <AccountCircle />
            <div className="sidebar__chatEachTextBox">
                <div>
                    <h2>{name}</h2>
                    <p>3:39PM</p>
                </div>
                <p>Last message</p>
            </div>
        </div>
        </Link>
        </div>
    )
}
