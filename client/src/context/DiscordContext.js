import { createContext, useState, useEffect, useReducer } from 'react'

export const DiscordContext = createContext()


const initialState = { messages: [] }

const reducer = (state, action) => {
    try {
        if (action.type == 'clear') return { messages: [] }
        if (action.type == 'add')
            return { messages: [...state.messages, action.data] }
    } catch (error) {
        console.error(error)
    }
}

export const DiscordProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [currentAccount, setCurrentAccount] = useState('')
    const [roomName, setRoomName] = useState('')
    const [placeholder, setPlaceholder] = useState('Message...')
    const [messageText, setMessageText] = useState('')
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        checkIfWalletIsConnected()
    }, [])

    useEffect(async () => {
        if (!currentAccount) return

        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/getCurrentUserData?account=${currentAccount}`,
            )

            const data = await response.json()
            setCurrentUser(data)
        } catch (error) {
            console.error(error)
        }
    }, [currentAccount])


    const getMessages = () => {
    }

    const createUserAccount = async (userAddress = currentAccount) => {
        if (!window.ethereum) return

        try {
            const data = {
                userAddress: userAddress,
            }

            try {
                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createuser`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
            } catch (error) {
                console.error(error)
            }

            try {
                await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createdm`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
            } catch (error) {
                console.error(error)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            })
            if (addressArray.length > 0) {
                setCurrentAccount(addressArray[0])
                createUserAccount(addressArray[0])
            } else {
            }
        } catch (error) {
            console.error(error)
        }
    }

    const connectWallet = async () => {
        if (!window.ethereum) return
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts',
            })

            if (addressArray.length > 0) {
                setCurrentAccount(addressArray[0])
                createUserAccount(addressArray[0])
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <DiscordContext.Provider
            value={{
                currentAccount,
                roomName,
                setRoomName,
                placeholder,
                messageText,
                setMessageText,
                state,
                connectWallet,
                currentUser,
            }}
        >
            {children}
        </DiscordContext.Provider>
    )
}