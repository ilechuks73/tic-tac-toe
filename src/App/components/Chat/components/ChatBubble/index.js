import React from 'react'
import styles from './styles.module.css'
import { Chat as MuiChatIcon } from '@material-ui/icons'
import { useGameState } from '../../../../hooks'
export default function ChatBubble(props) {
  const {gameState} = useGameState()
  return (
    <button onClick={()=>props.setOpenChat(true)} id={styles.ChatBubble}>
      <div>
        {
          gameState.online.messages.unread && <span id={styles.badge}></span>
        }
        <MuiChatIcon />
      </div>
      
      </button>
  )
}
