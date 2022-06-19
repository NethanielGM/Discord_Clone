import React from 'react'
import styles from '../src/styles/Home.module.css'
import Sidebar from './components/Sidebar'
import ConversationList from '../src/components/ConversationList'
import ChatView from '../src/components/ChatView'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <div className={styles.main}>
                <ConversationList />
                <ChatView />
            </div>
        </div>
    )
}
export default App
