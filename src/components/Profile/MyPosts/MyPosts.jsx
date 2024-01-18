import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { maxLenghtCreator, required } from '../../../utils/validators/validators';

const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText)
    }
    return (
        <div className={s.content}>
            <p className={s.myPostTitle}>My posts</p>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
});

const maxlenght15 = maxLenghtCreator(15)

const AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.newpost}>
            <Field component={Textarea} name={'newPostText'} rows={'5'} cols={'33'} placeholder={'Enter your post'} validate={[required, maxlenght15]}></Field>
            <div><button className={s.postButton}>Add post</button></div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: 'profileAddNewPostForm'})(AddNewPostForm)
export default MyPosts;