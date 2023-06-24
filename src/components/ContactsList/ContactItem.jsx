import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { useState } from 'react';
import { UpdateContactModal } from 'components/UpdateContactModal/UpdateContactModal';
import propTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactItem = ({ id, name, number }) => {

    const dispatch = useDispatch();

    console.log(id);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const onDeleteBtn = (id) => dispatch(deleteContact(id));

    return (
        <>
            <button type="button" onClick={handleOpenModal} className={css.updatebtn}>Update</button>
            <UpdateContactModal
                isOpenModal={isModalOpen}
                onClose={handleCloseModal}
                id={id}
                name={name}
                number={number}
            />
            <p className={css.name}>{name}</p>
            <p className={css.number}>{number}</p>
            <button type="button" onClick={() => onDeleteBtn(id)}>Delete</button>
        </>
    )
}

ContactItem.propTypes = {
    id: propTypes.string,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
  };