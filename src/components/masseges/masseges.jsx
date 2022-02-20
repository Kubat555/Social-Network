import React from 'react';
import s from './masseges.module.css';
import { NavLink } from 'react-router-dom';


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
    let dialogsElements = props.dialogs.map((data)=>{
        return <DialogItem name={data.name} id={data.id} />
    })// Массив готового тега с данными
    let messagesElements = props.messages.map((data)=>{
        return <Message message={data.message} user={data.user} />
    })// Массив готового тега с данными

    let newMessage = React.createRef(); 
    //Рефы дают возможность получить доступ к DOM-узлам или React-элементам, созданным в рендер-методе.

    let addMessage = ()=>{
        let text = newMessage.current.value;
        alert(text);
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
                    <input ref={newMessage} type="text" /> 
                    <button onClick={addMessage} >Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;