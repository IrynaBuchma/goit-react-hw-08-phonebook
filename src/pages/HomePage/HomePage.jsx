import { useAuth } from "hooks";
import { NavLink } from "react-router-dom";
import css from './HomePage.module.css';

export default function Home() {
    const { isLoggedIn } = useAuth();
    const { user } = useAuth();

  return (
    <>
      <div className={css.wrapper}>
        {!isLoggedIn ? (
          <div>
            <h1 className={css.title}>Wellcome to phonebook</h1>
            <NavLink
              to={'/register'} 
              className={css.link}
              activeclassname={css.activeLink}
            >
              Sign Up
            </NavLink>
            
            <NavLink
              to={'/login'} 
              className={css.link}
              activeclassname={css.activeLink}
            >
              Login
            </NavLink>
          </div>
        )
           : 
            (<h1 className={css.title}>Wellcome, { user.name } </h1>
        )}
      </div>
    </>
  )
}