import s from "./chat.module.css";


const ChooseChat = () => {
    return ( 
        <div className={s.chooseChat}>
            <div className={s.chooseChatText}>
                Select a chat to start messaging
            </div>
        </div>
     );
} 

export default ChooseChat;