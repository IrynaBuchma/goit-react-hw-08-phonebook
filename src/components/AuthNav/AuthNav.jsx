import { NavLink } from "react-router-dom";
import css from './AuthNav.module.css';

export default function Navigation() {
    return (
        <nav className={css.nav}>
            <NavLink
              to="/"
              className={css.link}
              activeclassname={css.activeLink}
            >
                Home
            </NavLink>

            <NavLink
              to="/register"
              className={css.link}
              activeclassname={css.activeLink}
            >
                Sign In
            </NavLink>

            <NavLink
              to="/login"
              className={css.link}
              activeclassname={css.activeLink}
            >
                Log In
            </NavLink>
        </nav>
    )
}