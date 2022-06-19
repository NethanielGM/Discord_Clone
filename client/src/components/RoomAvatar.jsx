import styles from '../styles/roomAvatar.module.css'

const RoomAvatar = ({ id, avatar, name }) => {

  return (
    <div className={styles.wrapper} >
      <div className={styles.roomAvatar}>
        <img
          src={avatar}
          className={styles.roomAvatarimg}
          height={48}
          width={48}
          alt={name}
        />
      </div>
    </div>
  )
}

export default RoomAvatar
