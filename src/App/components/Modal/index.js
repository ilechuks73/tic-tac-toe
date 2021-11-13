import React from 'react'
import styles from "./styles.module.css"
import { Grid as MuiGrid } from '@material-ui/core'
import { useGameState } from '../../hooks'

export default function Modal() {
  const { gameState, setGameState, closeModal, openModal } = useGameState()
  return (
    <MuiGrid id={styles.Modal}>
      {
        gameState.modal.open
          ?
          <MuiGrid className={styles.overlay} container={true} justify={"center"} alignContent={"center"}>
            <MuiGrid className={styles.window} item={true} xs={6}>
              <MuiGrid className={styles.titleBar}>
                {
                  gameState.modal.title
                }
              </MuiGrid>
              {
                gameState.modal.message
              }
              <MuiGrid>
                <button onClick={()=>{eval(gameState.modal.buttonAction[0])}}>test button</button>
              </MuiGrid>
            </MuiGrid>
            <MuiGrid>

            </MuiGrid>
          </MuiGrid>
          :
          ""
      }
    </MuiGrid>


  )
}
