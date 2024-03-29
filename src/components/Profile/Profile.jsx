import Preloader from '../common/Preloader/Preloader';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.profile}>
            <ProfileInfo profile = {props.profile} status ={props.status} updateStatus = {props.updateStatus}  />
            <div className={s.myposts}>
            <MyPostsContainer />
            </div>
        </div>
    );
}

export default Profile;