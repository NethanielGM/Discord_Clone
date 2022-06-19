import styles from '../styles/dmCard.module.css'

const DmCard = ({ name, status, avatar, id }) => {

  const changeUrl = () => {
  }

  return (
    <div className={styles.dmCard} onClick={changeUrl}>
      <div className={styles.dmAvatarContainer}>
        <img
          src={avatar}
          className={styles.dmAvatar}
          height={48}
          width={48}
          alt={name}
        />
        <div className={styles.dmCardStatus} id={status} />
      </div>
      <p className={styles.dmCardName}>{name}</p>
    </div>
  )
}

export default DmCard
