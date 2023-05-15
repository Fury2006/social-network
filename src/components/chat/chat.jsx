import Profile from "../user-profile/profile";
import s from "./chat.module.css";
import Message from "./message";
import { Link, Route, Routes } from "react-router-dom";

const Chat = (props) => {

    const totalAmount = props.totalAmount > 10
        ? 1000
        : this.props.totalAmount

    const pagesCount = Math.ceil(totalAmount / props.pageLength)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const onPageChanged = (pageNumber) => {
        props.onPageChanged(pageNumber)
    }

    const onEnterClick = (key) => {
        if (key.code === 'Enter') {
            props.sendMessage()
        }
    };

    const updateMessageText = (e) => {
        const text = e.target.value
        props.updateMessageText(text)
    };

    return (
        <div className={s.main}>
            <Routes>
                <Route path={'/profile'} element={<Profile user={props.user} />} />
            </Routes>
            <div className={s.chat}>
                <Link to={'/' + props.user.id + '/profile'} className={s.chatHead}>
                    <div className={s.chatName}>
                        {props.user.name}
                    </div>
                </Link>
                <div className={s.messages}>
                    {props.messages[0] && props.messages.map(message => <Message message={message} user={props.user} />)}
                </div>
                <div className={s.sendMessage}>
                    <div className={s.inputWrapper}>
                        <input
                            className={s.input}
                            type="text"
                            placeholder='Write a message...'
                            value={props.newMessageText}
                            onChange={updateMessageText}
                            onKeyUp={onEnterClick} />
                    </div>
                </div>
            </div>
            <div className={s.pages}>
                {pages.map(page => <Link to='/'
                    key={page}
                    className={s.page}
                    onClick={() => onPageChanged(page)}
                >{page}</Link>)}
            </div>
        </div>
    );
}

export default Chat;