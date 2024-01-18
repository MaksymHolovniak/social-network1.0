import React from "react"
import s from './FormControls.module.css'

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return  (
        <div className={`${s.formControlTextArea} ${hasError? s.error :  ''}`} >
            <textarea {...input} {...props} />
        {hasError && <div className={s.errorTextTextArea}>{meta.error}</div>}
        </div>
        )
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return  (
        <div className={`${s.formControlInput} ${hasError? s.error :  ''}`} >
            <input {...input} {...props} />
        {hasError && <div className={s.errorTextInput}>{meta.error}</div>}
        </div>
        )
}