import { NavLink } from 'react-router-dom';
import s from './Header.module.css'

const Header = (props) => {
    return (
        <header className={s.header}>
            <div className={s.img}>
            <NavLink to='/profile'><img src='https://media.wired.co.uk/photos/606d9a3ba876dd2203a639aa/16:9/w_2990,h_1682,c_limit/wired-uk-google-watching.jpg' /></NavLink>
            </div>
            {props.isAuth? <div  className={s.logout}><div className={s.headerUserName}><p>{props.login}</p></div> <button className={s.loginBlock} onClick={props.logout}>Logout</button> </div> :
            <div className={s.loginBlock}>
                <NavLink to={'/login'}>Login</NavLink>
            </div>}
        </header>
    );
};

export default Header;