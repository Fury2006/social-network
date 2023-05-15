import { connect } from "react-redux";
import DialogsPage from "./dialogsPage";


const mapStateToProps = (state) => {
    return {
        dialogs: state.chat.users,
        isFetching: state.chat.isFetching
    }
};

const DialogsPageContainer = connect(mapStateToProps)(DialogsPage)

export default DialogsPageContainer;