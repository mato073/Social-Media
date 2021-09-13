import React, { useEffect, useState } from 'react'
import Topbar from '../../components/topbar/Topbar'
import './messenger.css'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { Search } from '@material-ui/icons'

//Import Components
import Conversation from '../../components/conversiations/Conversation'
import Messages from '../../components/messages/Messages'
import ChatOnline from '../../components/chatOnline/ChatOnline'
import { send_conversation_request } from '../../redux/Actions/Actions'
import { get_conversation_state, get_user_state } from '../../redux/Saga/selectors/selector'
import axios from 'axios'

const Messenger = () => {
    const disptach = useDispatch();
    const [messages, setMessages] = useState([]);
    const [curentConversation, setCurentConversation] = useState("")
    const {
        conversations,
        curentUser
    } = useSelector(
        state => ({
            conversations: get_conversation_state(state),
            curentUser: get_user_state(state)
        }),
        shallowEqual
    );

    useEffect(() => {
        disptach(send_conversation_request());
        return (() => { send_conversation_request() })
    }, []);

    useEffect(() => {
        const getConversation = async () => {
            if (curentConversation != null && curentConversation !== "") {
                const data = await axios.get(`http://localhost:8080/message/${curentConversation}`)
                if (data != null) setMessages(data.data);
            }
        }
        getConversation();
    }, [curentConversation])

    console.log('conversation =', messages);
    return (
        <>
            <Topbar />
            <div className="messengerContainer">
                <div className="chatMenu">
                    <div className="chatMenuWraper">
                        <div className="conversationSearchbar">
                            <Search className="searchIcon" />
                            <input placeholder="Chat with your followers" className="searchInput" />
                        </div>
                        {
                            conversations?.data != null && conversations.data.map((item, key) => {
                                return <Conversation conversation={item} key={key} curentUser={curentUser.user.user} setConversation={() => setCurentConversation(item._id)} />
                            })
                        }

                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWraper">
                        <div className="chatBoxTop">
                            {
                                messages.map((item, key) => {
                                    return < Messages message={item} user={curentUser.user.user} key={key} />
                                })
                            }
                        </div>
                        <div className="chatBoxBottom">
                            <textarea
                                className="chatMessageInput"
                                placeholder="write something..."
                            ></textarea>
                            <button className="chatSubmitButton">
                                Send
                            </button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWraper">
                        < ChatOnline />
                        < ChatOnline />
                        < ChatOnline />
                        < ChatOnline />
                        < ChatOnline />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messenger
