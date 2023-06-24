import { Backdrop, Box, Modal, Fade } from '@mui/material';
import { UpdateContactForm } from 'components/UpdateContactForm/UpdateContactForm';
import PropTypes from 'prop-types';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 1000,
    borderRadius: '15px',
  };

export const UpdateContactModal = ({
    isOpenModal,
    onClose,
    id,
    name,
    number,
}) => (
    <Modal
      open={isOpenModal}
      onClose={onClose}
      closeAfterTransition
      backdrop={Backdrop}
      props={{
        timeout: 500,
      }}
      aria-labelledby="spring-modal-name"
      aria-describedby="spring-modal-number"
    >
      <Fade in={isOpenModal}>
        <Box sx={style}>
          <UpdateContactForm
            onClose={onClose}
            id={id}
            name={name}
            number={number}
          />
        </Box>
      </Fade>
    </Modal>
);

UpdateContactModal.propTypes = {
    isOpenModal: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  };