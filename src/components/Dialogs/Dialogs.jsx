import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLenghtCreator, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormsControls/FormsControls';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElememts = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElememts}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
};

const maxLenght50 = maxLenghtCreator(50);

const AddMessageForm = (props) => {
 return (
    <form onSubmit={props.handleSubmit} className={s.submitMessage}>
    <Field component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'} rows={'2'} cols={'60'} wrap={'hard'} validate={ [required, maxLenght50] }></Field>
    <button>Submit</button>
</form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(AddMessageForm)


export default Dialogs;