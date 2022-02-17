import React from 'react';
import s from './content.module.css';
// используем модульность стилей
import Post from './posts/post';



const Content = (props) => {
    let postElements = props.posts.map((s)=>{
        return <Post text={s.message} />
      })// Массив готового тега с данными

    let newPostElement = React.createRef();

    let addPost = ()=>{
        let text = newPostElement.current.value;
        alert(text);
    }

    return(
        <div >
            <div className={s.profile + " " + s.img}>
                <img src="https://www.fivesquid.com/pics/t2/1589106238-140595-3-1.jpg" alt="profile-img" className={s.profileImg} />
                <div className={s.info}>
                    <h1 className="profile__name">User Name</h1>
                    <div className="profile__user">
                        <p className="user__date">birthday: <span>12.02.2000</span></p>
                        <p className="user__sity">sity: <span>London</span></p>
                        <p className="user__number">number: <span>+222333444</span></p>
                    </div>
                </div>
            </div>
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <div className={s.addPosts}>
                    <input ref={newPostElement} type="text" />
                    <button onClick={addPost} >Запостить</button>
                </div>
                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
           
        </div>
    )
}

export default Content;