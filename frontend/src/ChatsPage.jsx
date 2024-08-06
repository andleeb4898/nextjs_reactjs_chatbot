import { PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage = (props) =>{
    
      
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow
        projectId='fa7b681c-8b9f-4674-8e55-6a237cde293c'
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100vh'}}
         />
        
    </div>
    );
}
export default ChatsPage