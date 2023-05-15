import { Link } from "react-router-dom";
import s from "./dialogs.module.css";
import Avatar from "../common/avatar/avatar";



const Dialog = (props) => {

    const photo = props.dialog.photos.small 

    return (
        <Link className={s.dialog} to={'/' + props.dialog.id}>
            <div className={s.dialogAvatar}>
                {
                    photo
                        ? <Avatar avatar={photo} />
                        : <Avatar />
                }
            </div>
            <div className={s.dialogName}>
                {props.dialog.name}
            </div>
            <div className={s.dialogLastMessage}>

            </div>
            <div className={s.lastActivityTime}>

            </div>
        </Link>
    );
}

export default Dialog;