import { useDispatch } from "react-redux";
import { updateContact } from "redux/contacts/operations";
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import css from './UpdateContactForm.module.css';

export const UpdateContactForm = ({ onClose, id, name, number }) => {

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        dispatch(updateContact({ id, values }))
        .unwrap()
        .then(() => {
            onClose();
        })
        .catch(() => toast.error('Something went wrong. Please try again'));
    
        resetForm();
    };

    const formik = useFormik({
        id,
        initialValues: {
            name,
            number,
        },
        onSubmit: handleSubmit,
    });

    return (
      <>
        <form className={css.form} onSubmit={formik.handleSubmit}>
                <label className={css.label} id="name" htmlFor="name">Name
                  <input className={css.input}
                    type="text"
                    name="name"
                    value={formik.values.name}
                    id="name"
                    onChange={formik.handleChange}
                    error={formik.touched.name && formik.errors.name}
                  />
                </label>
                <label className={css.label} id="number" htmlFor="number">Phone
                    <input className={css.input}
                        type="tel"
                        name="number"
                        value={formik.values.number}
                        id="number"
                        onChange={formik.handleChange}
                        error={formik.touched.name && formik.errors.name}
                    />
                </label>
              <button type="submit" >Update contact</button>
            </form>
      </>
    )
}