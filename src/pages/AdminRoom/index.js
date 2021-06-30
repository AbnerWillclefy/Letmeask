import checkImg from '../../assets/images/check.svg'
import answerImg from '../../assets/images/answer.svg'
import Ilustraçao from '../../assets/images/Ilustração.svg'

import { 
  Content,
  Page,
  Title,
  QuestionsList,
  CheckButton,
  AnswerButton,
  Illustration } from './styles'

import Button from '../../components/Button'
import RoomCode from '../../components/RoomCode'
import Questions from '../../components/Question'
import Logo from '../../components/Logo'
import DeleteQuestionModal from '../../components/DeleteQuestionModal'

import { useParams } from 'react-router-dom'
// import { useContext, useState } from 'react'
// import { AuthContext } from '../../contexts/AuthContext'
// import { database } from '../../services/firebase'
import { useRoom } from '../../hooks/useRoom'
import { database } from '../../services/firebase'
import history from '../../services/history'
import { useState } from 'react'
import DeleteRoomModal from '../../components/DeleteRoomModal'

export default function AdminRoom() {
  const [highlight, setHighlight] = useState(false);
  const { id } = useParams();
  const roomId = id;
  
  const { title, question } = useRoom(roomId);

  async function handleCheckQuestionAsAnswered(questionId) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true,
    })
  }

  async function handleHighlightQuestion(questionId) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighlighted: highlight,
    })

    setHighlight(!highlight)
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
        <Logo />
          <div>
            <RoomCode code={roomId}/>
            <DeleteRoomModal roomId={roomId}/>
          </div>
        </Content>
      </header>

      <main>
        <Title>
          <h1>{`Sala: ${title}`}</h1>
          { question.length > 0 && <span>{`${question.length} pergunta(s)`}</span>}
        </Title>

        { question.length === 0 && 
        <Illustration>
          <img src={Ilustraçao} alt='Nenhuma pergunta feita'/>
          <h2>Nenhuma pergunta por aqui...</h2>
          <p>Seja a primeira pessoa a fazer uma pergunta!</p>
        </Illustration>}
  
        <QuestionsList>
          {question
          .sort((b, a) => a.isHighlighted - b.isHighlighted)
          .sort((b, a) => a.likeCount - b.likeCount)
          .sort((a, b) => a.isAnswered - b.isAnswered)
          .map(question => {
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

                <DeleteQuestionModal 
                  roomId={roomId} 
                  questionId={question.id}/>
              </Questions>
            )
          })}
        </QuestionsList>
      </main>

    </Page>
  )
}