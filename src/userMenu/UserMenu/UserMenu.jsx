import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { logOutUser } from 'redux/auth/authOperations';
import { toast } from 'react-toastify';
import css from './UserMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const handleSignOut = () => dispatch(logOutUser())
    .unwrap()
    .then(() => toast.success('You have successfully logout'))
    .catch(() => toast.error('Something went wrong, please try again'));

    return (
        <nav className={css.nav}>
            <NavLink
              to="/contacts"
              className={css.link}
              activeclassname={css.activeLink}
            >
                Contacts
            </NavLink>
            <p className={css.title}>{ user.email }</p>
            <button
              type="buton"
              className={css.button}
              onClick={handleSignOut}
            >
                Logout
            </button>
        </nav>

    )
}