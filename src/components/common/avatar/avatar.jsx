import avatar from '../../../assets/images/default-avatar.png'
 
const Avatar = (props) => {
    return ( 
        <img src={props.avatar || avatar} />
     );
} 

export default Avatar; 