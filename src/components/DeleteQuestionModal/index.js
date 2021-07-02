import { useState } from 'react';
import Modal from 'react-modal'
import { ModalContainer } from './styles'
import { database } from '../../services/firebase'

Modal.setAppElement('#root');

export default function DeleteQuestionModal({roomId, questionId}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function toggleModalIsOpen() {
    setIsOpenModal(!isOpenModal)
  }

  async function handleDeleteQuestion() {
    await database
      .ref(`rooms/${roomId}/questions/${questionId}`)
      .remove();

    toggleModalIsOpen();
  }

  return (
    <>
      <button onClick={toggleModalIsOpen}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5.99988H5H21" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
      </button>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={toggleModalIsOpen}
        style = {{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          },
          content: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            width: '45rem',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            background: `${props => props.theme.background}`,
            borderRadius: '8px',
            outline: 'none',
            padding: '0'
          }
        }}

        contentLabel="Modal"
        ariaHideApp={false}>
   
          <ModalContainer>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5.99988H5H21" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 5.99988V3.99988C8 3.46944 8.21071 2.96074 8.58579 2.58566C8.96086 2.21059 9.46957 1.99988 10 1.99988H14C14.5304 1.99988 15.0391 2.21059 15.4142 2.58566C15.7893 2.96074 16 3.46944 16 3.99988V5.99988M19 5.99988V19.9999C19 20.5303 18.7893 21.039 18.4142 21.4141C18.0391 21.7892 17.5304 21.9999 17 21.9999H7C6.46957 21.9999 5.96086 21.7892 5.58579 21.4141C5.21071 21.039 5 20.5303 5 19.9999V5.99988H19Z" stroke="#737380" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <h2>Excluir pergunta</h2>
            <p>Tem certeza que você deseja excluir esta pergunta?</p>
            <div>
              <button onClick={() => setIsOpenModal(false)}>Cancelar</button>
              <button 
                className='red' 
                onClick={handleDeleteQuestion}>Sim, excluir</button>
            </div>
          </ModalContainer>
      </Modal>
    </>
  );
}