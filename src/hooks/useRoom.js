import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../contexts/AuthContext'
import { database } from "../services/firebase";

export function useRoom(roomId) {
  const [question, setQuestion] = useState([]);
  const [title, setTitle] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    roomRef.once('value', room => {
      const databaseRoom = room.val()
      const firebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestion = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
          likeCount: Object.values(value.likes ?? {}).length,
          likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
        }
      })

      setTitle(databaseRoom.title)
      setQuestion(parsedQuestion)
    })

    return () => {
      roomRef.off('value');
    }
  }, [roomId, question, user?.id])

  return { title, question }
}