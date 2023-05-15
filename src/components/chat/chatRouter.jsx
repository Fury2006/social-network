import { Route, Routes } from "react-router-dom";
import Chat from "./chat";
import ChooseChat from "./chooseChat";


const ChatRouter = (props) => {

    return (
        <Routes>
            <Route path='' element={<ChooseChat />} />


            {props.users[0] && props.users.map(user => {
                return (
                    <Route key={user.id} path={'/' + user.id + '/*'} element={<Chat
                        user={user}
                        updateMessageText={props.updateMessageText}
                        sendMessage={props.sendMessage}
                        setCurrentPage={props.setCurrentPage}
                        currentPage={props.currentPage}
                        pageLength={props.pageLength}
                        totalAmount={props.totalAmount}
                        onPageChanged={props.onPageChanged}
                        isFetching={props.isFetching}
                        messages={props.messages}
                        newMessageText={props.newMessageText}
                    />}
                    />)
            })}
        </Routes>
    );
}

export default ChatRouter;