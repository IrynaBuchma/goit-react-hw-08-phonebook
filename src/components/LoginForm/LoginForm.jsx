import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/authOperations';
import { Link } from 'react-router-dom';
import css from './LoginForm.module.css'
import { toast } from 'react-toastify';
import { useFormik } from 'formik';

export const LoginForm = () => {
const dispatch = useDispatch();

const handleSubmit = (values, {resetForm}) => {
    // e.preventDefault();
    dispatch(
        logInUser({
            email: values.email,
            password: values.password,
        })
    )
      .unwrap()
      .then(() => {
        toast.success('You are successfully registered in the phonebook');
        resetForm();
      })
      .catch(() => {
        toast.error('Incorrect email or password. Please try again');
        resetForm();
      });
};
const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    onSubmit: handleSubmit,
});

return (
    <>
      <div className={css.wrapper}>
        <p className={css.title}>Log in</p>
        <form className={css.form} onSubmit={formik.handleSubmit}>
          <label className={css.label} htmlFor="email">Email
            <input className={css.input}
                required
                id='email'
                name='email'
                type="email"
                autoComplete='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)} 
            />
        </label >
        <label className={css.label} htmlFor="password">Password
            <input className={css.input}
                required
                id='password'
                name='password'
                type='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
            />
        </label>
        <button type="submit" className={css.button}>Log In</button>
      </form>
      <Link className={css.info} to={'/register'}>
            Don't have an account yet? Sign up
      </Link>
      </div>
    </>
)

}