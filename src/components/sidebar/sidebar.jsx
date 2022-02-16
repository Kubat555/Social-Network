import { NavLink } from 'react-router-dom';
import s from './sidebar.module.css';

const Sidebar = () => {
    return (
        <div className= {s.sidebar}>
            <ul className="list">
                {/* Навлинки позволяют изменять url адресс на то что нам нужно не перезагружая страницу */}
                <li className={s.element}><NavLink className={(navData) => navData.isActive ? s.active : ""} to="/profile">Profile</NavLink></li>
                <li className={s.element}><NavLink className={(navData) => navData.isActive ? s.active : ""} to="/messages">Messages</NavLink></li>
                <li className={s.element}><a href="#">Friends</a></li>
                <li className={s.element}><a href="#">Sittings</a></li>
                <li className={s.element}><a href="#">Music</a></li>
            </ul>
        </div>
    )
}

export default Sidebar;