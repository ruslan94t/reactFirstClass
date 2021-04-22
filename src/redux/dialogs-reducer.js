


const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    dialogs : [
        {id:1, name:'Olya'},
        {id:2, name:'Mahsa'},
        {id:3, name:'Shasa'},
        {id:4, name:'Juliya'},
    ],
    messages : [
        {id:1, message:'You You Yuu'},
        {id:2, message:'Hello html'},
        {id:4, message:'Hi Juliya'},
        {id:3, message:'Hello flex'},
    ],
    newMessageBody:'',
};

const dialogsReducer = (state=initialState, action)=>{


    let stateCopy ={...state,
    messages:[...state.messages]
    };



switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
        stateCopy.newMessageBody= action.body;
        return stateCopy;
    case SEND_MESSAGE:
        let body = state.newMessageBody;
        stateCopy.newMessageBody=''
        stateCopy.messages.push({id:4, message:body});


        return stateCopy;
    default :
        return state;
}




    return state;
}
export  const  sendMessageCreator = ()=> ({type:SEND_MESSAGE})
export  const updateNewMessageBody = (text)=>({
    type:UPDATE_NEW_MESSAGE_BODY, body:text
})

export  default dialogsReducer;