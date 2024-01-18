import s from './ProfileInfo.module.css';
import facebook from '../../../assets/images/facebook.png'
import twitter from '../../../assets/images/twitter.png'
import instagram from '../../../assets/images/instagram.png'
import vkontakte from '../../../assets/images/vk.png'
import github from '../../../assets/images/github.png'
import youtube from '../../../assets/images/youtube.png'
import smile from '../../../assets/images/smile.png'
import frown from '../../../assets/images/frown.png'
import avatar from './../../../assets/images/user.png'
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    let contacts = [
            {name: facebook, url: props.profile.contacts.facebook},
            {name: twitter, url: props.profile.contacts.twitter},
            {name: instagram, url: props.profile.contacts.instagram},
            {name: vkontakte, url: props.profile.contacts.vk},
            {name: github, url: props.profile.contacts.github},
            {name: youtube, url: props.profile.contacts.youtube}
        ]
    
    let contactsElements = contacts.map( c => c.url && <a href={c.url} target='_blank'><img src={c.name} className={s.contact} /></a>)
        
    return (
        <div className={s.profileInfo}>
            <div className={s.userBlock}>
                <div className={s.avatar} >{props.profile.photos.small? <img src={props.profile.photos.small} /> : <img src={avatar} />}</div>
                <div className={s.userDescription}>
                    <p>{props.profile.fullName}</p>
                    <div className={s.profileStatus}>
                     <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
                    </div>
                    <div className={s.contacts}>
                        {contactsElements}
                    </div>
                </div>
            </div>
            <div className={s.aboutMeBlock}>
                <h1>Info</h1>
                <div className={s.aboutMe}>
                <h2>Name</h2>
                <p>{props.profile.fullName}</p>    
                </div>
                <div className={s.aboutMe}>
                <h2>About Me:</h2>
                <p>{props.profile.aboutMe}</p>    
                </div>
                <div className={`${s.aboutMe} + ${s.lookingJob}`}>
                <h2>Looking job:</h2>
                <p>{props.profile.aboutMe ? <img src={smile} className={s.lookingJobSmile}/> : <img src={frown} className={s.lookingJobSmile}/>}</p>    
                </div>
                <div className={s.aboutMe}>
                <h2>Description Looking Job:</h2>
                <p>{props.profile.lookingForAJobDescription}</p>    
                </div>        
            </div>
        </div>
    );

}
export default ProfileInfo;