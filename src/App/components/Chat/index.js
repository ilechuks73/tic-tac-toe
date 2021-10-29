import { useState } from 'react'
import styles from './styles.module.css'

import { ChatBubble, ChatScreen } from './components'
export default function Chat() {
  const [openChat, setOpenChat] = useState(false)
  return (
    <div id={styles.Chat}>
      {
        openChat ? <ChatScreen setOpenChat={setOpenChat}/> : <ChatBubble setOpenChat={setOpenChat}/>
      }
      
      
    </div>
  )
}
