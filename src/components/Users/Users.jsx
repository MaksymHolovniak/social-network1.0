import React from 'react';
import s from './Users.module.css'
import userPhoto from './../../assets/images/user.png'
import { NavLink } from 'react-router-dom';


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = Math.max(curP - 5, 0);
    let curPL = Math.min(curP + 5, pages.length);
    const remainingPages = Math.min(10 - (curPL - curPF), pages.length - curPL);
    curPL = curPL + remainingPages;
    let slicedPages = pages.slice(curPF, curPL);

    return <div className={s.users}>
        <div className={s.title}><h1 className={s.titleText}>All Members</h1></div>
        {
            props.users.map(u => <div key={u.id} className={s.user}>
            <NavLink to={'/profile/' + u.id}><div className={s.avatar}><img src={u.photos.small != null ? u.photos.small : userPhoto}></img></div></NavLink>
                <div className={s.content}>
                    <div className={s.userInfo}>
                        <p className={s.name}>{u.name}</p>
                        <p className={s.location}></p>
                    </div>
                    <p className={s.status}>{u.status}</p>
                </div>
                <div className={s.button}>
                    {u.followed ? 
                    <button disabled={props.followingInProgress.some(id => id === u.id)} className={`${s.button} ${s.unfollow}`} onClick={() => { props.unfollow(u.id) }}>Unfollow</button> : 
                    <button disabled={props.followingInProgress.some(id => id === u.id)} className={s.button} onClick={() => { props.follow(u.id) }}>Follow</button>}
                </div>
            </div>
            )
        }
        <div className={s.pagination}>
            <div>
                {props.currentPage > 1 && <button className={s.backNextPage} onClick={() => { slicedPages.map(p => { props.currentPage === p && props.onBottomPage(p) }) }}>Назад</button>}
            </div>
            <div className={s.numbersPages}>
                {slicedPages.map(p => {
                    return <div key={p.id}> <a className={props.currentPage === p ? s.selectedPage : s.unselectedPage} onClick={() => { props.onPageChanged(p) }}>{p}</a> </div>
                })}
            </div>
            <div>
                <button className={s.backNextPage} onClick={() => { slicedPages.map(p => {props.currentPage === p && props.onNextPage(p) }) }}>Вперед</button>
            </div>
        </div>
    </div>
}

export default Users;