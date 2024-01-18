import React from "react";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import s from './Login.module.css'
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.formLogin}>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div><Field placeholder={'Email'} name={"email"} component={Input} validate={[required]} className={s.formLoginInput}  /></div>
            <div><Field placeholder={'Password'} name={"password"} component={Input} validate={[required]} type="password" className={s.formLoginInput} /></div>
            <button className={s.loginButton}>Login</button>
            <div><Field component={'input'} name={"rememberMe"} type={'checkbox'} className={s.LoginCheckBox}/><span className={s.CheckBoxText}>Remember me</span></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Navigate to='/profile'  />
    }
    
    return (
        <div className={s.login}>
            <h1 className={s.loginTitle}>Sign Up</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect (mapStateToProps, {login} ) (Login);