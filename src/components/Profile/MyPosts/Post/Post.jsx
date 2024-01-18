import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.post}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9JqkBrfwaFEIRaVhyYtwjifjGJJwjT-lOx8QgN6XRe9T1UmUWXe17Tc5ZVLMRwmJeRE&usqp=CAU' />
                {props.message}
            </div>
            <div>
                <span>like</span>{props.likesCount}
            </div>
        </div>
    );
}

export default Post;