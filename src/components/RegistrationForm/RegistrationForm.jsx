import { useDispatch } from "react-redux";
import { toast } from 'react-toastify';
import { signUpUser } from "redux/auth/authOperations";
import { useFormik } from "formik";
import css from './RegistrationForm.module.css';


export const RegistrationForm =() => {

  const dispatch = useDispatch();

  const handleSubmit =(items, { resetForm }) => {
    dispatch(
        signUpUser({
          name: items.name,
          email: items.email,
          password: items.password,
        })
    )
    .unwrap()
    .then(() => {
        toast.success('You are successfully logged in');
        resetForm();
    })
    .catch(() => {
        toast.error('Sorry, problem arised while signing, please try again');
        resetForm();
    });
   resetForm();
  }

const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: handleSubmit,
});

return (
    <> 
    <div className={css.wrapper}>
        <p className={css.title}>Sign in</p>
        <form className={css.form} onSubmit={formik.handleSubmit}>
          <label className={css.label} htmlFor="name"> Name
            <input className={css.input}
                type='text'
                name='name'
                id='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && formik.errors.name}
                required
            />
          </label>
          <label className={css.label} htmlFor="email">E-mail
            <input className={css.input}
                type='email'
                autoComplete='email'
                name='email'
                id='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && formik.errors.email}
                required
            />
          </label>
          <label className={css.label} htmlFor="password">Password
            <input className={css.input}
                type='password'
                name='password'
                id='password'
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                required
            />
          </label>
            <button type="submit" className={css.button}> Sign Up </button>
        </form>
    </div>
    </>
)

}