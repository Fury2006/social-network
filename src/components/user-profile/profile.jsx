import { Link } from "react-router-dom";
import s from "./profile.module.css";
import Avatar from "../common/avatar/avatar";
import bio_symbol from "../../assets/images/bio_symbol.png";


const Profile = (props) => {

    const photo = props.user.photos.small

    return (
        <div className={s.profile}>
            <div className={s.header}>
                <div className={s.headerText}>User Info</div>
            </div>
            <div className={s.userHead}>
                <div className={s.userAvatar}>
                    {
                        photo
                            ? <Avatar avatar={photo} />
                            : <Avatar />
                    }
                </div>
                <div className={s.user}>
                    <div className={s.username}>
                        {props.user.name}
                    </div>
                    <div className={s.activity}>
                        last seen recently
                    </div>
                </div>
            </div>
            <div className={s.userInfo}>
                <div className={s.bio}>
                    <div className={s.symbolBio}>
                        ⓘ
                    </div>
                    <div className={s.bioTextArea}>
                        <div className={s.bioText}>
                            My curiosity is endless. Someday, it'll kill me.. Or did it already?
                        </div>
                        <div className={s.alt}>
                            Bio
                        </div>
                        <div className={s.uniqueName}>
                            {'@' + props.user.name}
                        </div>
                        <div className={s.alt}>
                            Username
                        </div>
                    </div>
                </div>
                <div className={s.notifications}>
                    <div className={s.notificationsSymbol}>
                        ☏
                    </div>
                    <div className={s.notificationsText}>
                        Notifications
                    </div>
                </div>
                <Link
                    to={'/' + props.user.id}
                    className={s.sendMessage}>
                    send message
                </Link>
            </div>
        </div>
    );
}

export default Profile;
