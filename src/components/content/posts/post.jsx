import s from './post.module.css';

const Post = (props)=>{
    return(
        <div className = {s.post}>
            <div className={s.userInfo}>
                <img src="https://www.fivesquid.com/pics/t2/1589106238-140595-3-1.jpg" alt="profile-img" className={s.profileImg} />
                <p className = {s.name}>Name</p>
            </div>
            
            <p className={s.text}>
                {props.text}
            </p>
        </div>
    )
}

export default Post;