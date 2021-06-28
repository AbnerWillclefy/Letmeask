import Logo from '../../assets/images/logo.svg'
import deleteImg from '../../assets/images/delete.svg'
import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'
import { Content, Page, Title, QuestionsList, DeleteButton, CheckButton, AnswerButton } from './styles'

import Button from '../../components/Button'
import RoomCode from '../../components/RoomCode'
import Questions from '../../components/Question'

import { useParams } from 'react-router-dom'
// import { useContext, useState } from 'react'
// import { AuthContext } from '../../contexts/AuthContext'
// import { database } from '../../services/firebase'
import { useRoom } from '../../hooks/useRoom'
import { database } from '../../services/firebase'
import history from '../../services/history'

export default function AdminRoom() {
  // const { user } = useContext(AuthContext);
  const { id } = useParams();
  const roomId = id;
  
  const { title, question } = useRoom(roomId);

  async function handleDeleteQuestion(questionId) {
    if(window.confirm('Tem certeza que deseja remover essa pergunta?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  async function handleCheckQuestionAsAnswered(questionId) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  async function handleHighlightQuestion(questionId) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: true,
    })
  }

  async function handleEndRoom(roomId) {
    if(window.confirm('Tem certeza que deseja encerrar essa sala?')) {
      await database.ref(`rooms/${roomId}`).update({
        endedAt: new Date(),
      })

      history.push('/');
    }
  }
  
  return(
    <Page>
      <header>
        <Content>
          <img src={Logo} alt='Logo do site'/>
          <div>
            <RoomCode code={roomId}/>
            <Button 
              isOutlined 
              onClick={() => handleEndRoom(roomId)}
            >
              Encerrar Sala
            </Button>
          </div>
        </Content>
      </header>

      <main>
        <Title>
          <h1>Sala {title}</h1>
          { question.length > 0 && <span>{question.length} pergunta(s)</span> }
        </Title>
  
        <QuestionsList>
          {question.map(question => {
            return (
              <Questions
                key={question.id} 
                content={question.content}
                name={question.author.name}
                avatar={question.author.avatar}
                isAnswered={question.isAnswered}
                isHighlighted={question.isHighlighted}
              >
                {!question.isAnswered && (
                  <>
                    <AnswerButton
                    type='button'
                    onClick={() => handleCheckQuestionAsAnswered(question.id)}>
                    <img src={checkImg} alt='Marcar pergunta como respondida'/>
                  </AnswerButton>
                  
                  <CheckButton
                    type='button'
                    onClick={() => handleHighlightQuestion(question.id)}>
                    <img src={answerImg} alt='Dar destaque a pergunta'/>
                  </CheckButton>
                </>
                )}

                <DeleteButton
                  type='button'
                  onClick={() => handleDeleteQuestion(question.id)}>
                  <img src={deleteImg} alt='Apagar pergunta'/>
                </DeleteButton>
              </Questions>
            )
          })}
        </QuestionsList>
      </main>

    </Page>
  )
}