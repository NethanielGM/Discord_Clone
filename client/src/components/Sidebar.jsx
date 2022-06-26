import styles from '../styles/sidebar.module.css'
import { useState } from 'react'
import RoomAvatar from './RoomAvatar'
import avatar1 from '../assets/avatar-3.webp';
const Sidebar = () => {
  const [channels, setChannels] = useState([{
    roomId: 1,
    avatar: avatar1
  }])
  return (
    <div className={styles.wrapper}>
      {channels.map((channel, index) => (
        <RoomAvatar
          key={index}
          id={channel.roomId}
          avatar={channel.avatar}
        />
      ))}
    </div>
  )
}
export default Sidebar
