import styles from '../styles/conversationList.module.css'
import { useState } from 'react'
import friends from '../assets/icons/friends.svg'
import nitro from '../assets/icons/nitro.svg'
import DmCard from './DmCard'

const ConversationList = () => {
  const [dms, setDms] = useState([])

  return (
    <div className={styles.conversations}>
      <div className={styles.conversationListTop}>
        <input className={styles.conversationInput} type='search' placeholder='Find or start a conversation' />
      </div>
      <div className={styles.conversationsContainer}>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <img
              height={25}
              width={25}
              src={friends}
              className={styles.svg}
              alt='friends'
            />
          </div>
          <p>Fiends</p>
        </div>
        <div className={styles.elementsContainer}>
          <div className={styles.svgContainer}>
            <img
              height={25}
              width={25}
              src={nitro}
              className={styles.svg}
              alt='nitro'
            />
          </div>
          <p>Nitro</p>
        </div>
        <div className={styles.dmTitle}>DIRECT MESSAGES</div>
        {dms.map((dm, index) => (
          <DmCard
            key={index}
            name={dm.name}
            id={dm.id}
            avatar={
              dm.avatar ||
              'https://encrypted-tbn0.gstatic.com/imgs?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
            }
            status='online'
          />
        ))}
      </div>
    </div>
  )
}

export default ConversationList
