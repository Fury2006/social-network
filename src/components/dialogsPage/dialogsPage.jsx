import Dialog from "./dialog";
import s from "./dialogs.module.css";
import image from "../../assets/images/triple_dash.png";
import Preloader from "../common/preloader/preloader";

const DialogsPage = (props) => {

    return (
        <div className={s.dialogsBody}>
            <div className={s.preloader}>
                        {
                            props.isFetching
                                ? <Preloader />
                                : null
                        }
                    </div>
            <div className={s.dialogsHead}>
                <div className={s.tripleDash}>
                    <img src={image} />
                </div>
                <div className={s.searchContainer}>
                    <input
                        className={s.search}
                        type="text"
                        placeholder="Search"
                        autoCorrect="off" />
                </div>
            </div>
            <div className={s.dialogs}>
                {props.dialogs.map(dialog => <Dialog key={dialog.id} dialog={dialog} />)}
            </div>
        </div>
    );
}

export default DialogsPage;