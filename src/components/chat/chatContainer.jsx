import { connect } from "react-redux";
import { sendMessage, setCurrentPage, setTotalAmount, setUsers, toggleIsFetching, updateMessageText } from "../../features/chat/chatSlice";
import ChatAPI from "./chatAPI";

const mapStateToProps = (state) => {
    return {
        users: state.chat.users,
        messages: state.chat.messages,
        newMessageText: state.chat.newMessageText,
        currentPage: state.chat.currentPage,
        pageLength: state.chat.pageLength,
        totalAmount: state.chat.totalAmount,
        isFetching: state.chat.isFetching
    }
};

const mapDispatchToProps = {
    updateMessageText,
    sendMessage,
    setUsers,
    setCurrentPage,
    setTotalAmount,
    toggleIsFetching 
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(ChatAPI)

export default ChatContainer;