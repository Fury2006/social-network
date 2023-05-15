import DefaultAvatar from "../common/avatar/avatar";
import s from "./chat.module.css";

const Message = (props) => {

    const messageOwner = props.message.sender === 'you' ? s.yourMessage : s.companionMessage

    return (
        <div className={s.message}>
            <div className={s.messageArea + ' ' + messageOwner}>
                <div className={s.messageText}>
                    {props.message.text}
                </div>
                <div className={s.messageTime}>
                    {props.message.time}
                </div>
            </div>
        </div>

    );
}

export default Message;