import { useState, useEffect } from 'react'
import styles from './styles.module.css'
import { TextField as MuiTextField, Button as MuiButton, } from '@material-ui/core'

import { CancelOutlined as MuiCancelIcon, MessageTwoTone } from '@material-ui/icons'
import { SendSharp } from '@material-ui/icons'
import { useGameState } from '../../../../hooks'
export default function ChatScreen(props) {
  const [message, setMessage] = useState("")
  const { gameState, sendMessage } = useGameState()
  useEffect(() => {
    console.log(gameState.online.messages)
  })
  return (
    <div id={styles.ChatScreen}>
      <div className={styles.header}>
        <span>Chat</span>
        <MuiCancelIcon onClick={() => { props.setOpenChat(false) }} />
      </div>
      <div id={styles.MessageInput}>
        <MuiTextField value={message} onChange={(e) => setMessage(e.target.value)} />
        <MuiButton onClick={() => {
          if (message.length === 0) {
            return false
          }
          else {
            sendMessage(message)
            setMessage("")
          }

        }}><SendSharp /></MuiButton>
      </div>
      <div id={styles.MessageThread}>
        {
          gameState.online.messages.thread.map((item, index) => {
            return (
              <div key={index} id={styles.Message}>
                <div className={styles.senderTag}>{item.sender}</div>
                <div className={styles.messageBody}>{item.message}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
