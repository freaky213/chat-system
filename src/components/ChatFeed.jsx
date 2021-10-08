import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
const ChatFeed =(props)=>{
    console.log(props);
    const {chats,activeChat,userName,messages}=props;
    const chat=chats && chats[activeChat];
    const renderMessage=()=>{
        const keys=object.keys(messages);
        const keys.map((key,index)=>{
        const message =message[key];
        const  lastmessageKey =index==0?null:keys[index-1];
        const isMyMessage=userName ==message.sender.username;
        return (
            <div key={'msg_${index}'} style ={{width:'100%'}}>
                <div className="message-block">
                    {
                        isMyMessage
                        ?<MyMessage/>
                        :<TheirMessage/>
                    }
                </div>
                <div className ="read-receipts" style={{marginRight:isMyMessage ?'18px':'0px',marginLeft:isMyMessage?'0px':'68px'}}>
readrecipt

                </div>
            </div>
        );
    })
}
    return (
        <div className ='chat-feed'>
        <div className ="chat-title-container">
            <div className="chat-title">{chat.title}</div>
            <div className ='chat-subtitle'>{chat.people.map((person)=>' ${person.person.username}'</div>
        </div>
            
        </div>
    );
}
export default ChatFeed;