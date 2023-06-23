import AuthNav from '../AuthNav/AuthNav.jsx';
import { UserMenu } from 'userMenu/UserMenu/UserMenu.jsx';
import { useAuth } from 'hooks/useAuth.js';
import css from './Header.module.css';

export default function Header() {
    const { isLoggedIn } = useAuth();
    return (
        <header className={css.header}>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </header>
    )
}