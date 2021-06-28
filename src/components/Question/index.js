import { Questions, UserInfo } from './styles'

export default function Question({
  content,
  name,
  avatar,
  children,
  isAnswered = false,
  isHighlighted = false}) {
  return (
    <Questions isAnswered={isAnswered} isHighlighted={isHighlighted && !isAnswered}>
      <p>
        {content}
      </p>
      <footer>
        <UserInfo isAnswered={isAnswered} isHighlighted={isHighlighted && !isAnswered}>
          <img src={avatar} alt='User'/>
          <span>
            {name}
          </span>
        </UserInfo>
        <div>
          {children}
        </div>
      </footer>
    </Questions>
  )
}