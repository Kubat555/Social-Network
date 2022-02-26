import React from 'react';
import s from './masseges.module.css';
import { NavLink } from 'react-router-dom';
import { updateNewMessageAction } from '../../redux/state';
import { sendMessageAction } from './../../redux/state';


const DialogItem = (props)=>{
    return(
        <div className={s.friend}>
            <NavLink className={(navData) => navData.isActive ? s.active : ""} to={"/messages/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props)=>{
    if(props.user === "user"){
        return(
            <div className= {s.messageBlock}>
                <div className={s.message + " " + s.user}>{props.message}</div>
            </div>
        )
    }
    else{
        return(
            <div >
                <div className={s.message}>{props.message}</div>
            </div>
        )
    }
}



const Messages = (props)=>{
    // Используем map чтобы создать новый массив преоброзовав старый
    let dialogsElements = props.dialogs.contacts.map((data)=>{
        return <DialogItem name={data.name} id={data.id} />
    })// Массив готового тега с данными
    let messagesElements = props.dialogs.messages.map((data)=>{
        return <Message message={data.message} user={data.user} />
    })// Массив готового тега с данными

    // let newMessage = React.createRef(); 
    //Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в рендер-методе.

    
    let NewMessageBody = props.dialogs.newMessageText.message;

    let _updateText = (e)=>{
        props.dispatch(updateNewMessageAction(e.target.value));
    }

    let sendMessage = ()=>{
        // props.dispatch(updateNewMessageAction(newMessage.current.value));
        props.dispatch(sendMessageAction());
    }

    return(
        <div className={s.content}>
            <div className={s.friends}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.dialogs}>
                    {messagesElements}
                </div>
                <div className={s.form}>
                    <input value={NewMessageBody} placeholder='Enter your message' onChange={_updateText} type="text" /> 
                    <button onClick={sendMessage} >Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;