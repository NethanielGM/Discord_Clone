import styles from '../styles/conversationList.module.css'
import friends from '../assets/icons/friends.svg'
import nitro from '../assets/icons/nitro.svg'
const ConversationList = () => {
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
      </div>
    </div>
  )
}
export default ConversationList
