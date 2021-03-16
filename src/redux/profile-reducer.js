const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState  = {
    posts:[
        {id:1, message:'You You Yuu', likeCount:"1"},
        {id:2, message:'Hello html', likeCount:"3"},
        {id:3, message:'Hello flex', likeCount:"34"},
        {id:4, message:'Hi Juliya', likeCount:"11"}
    ],
    newPostText:'it-main-text'
};

const profileReducer = (state=initialState, action) => {

    switch (action.type ) {
        case ADD_POST :
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost);
            state.newMessageBody='';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default :
            return state;

    }


}
export  const  addPostActionCreator = ()=> ({type:ADD_POST})


export  const updateNewPostTextActionCreator = (text)=>({
    type:UPDATE_NEW_POST_TEXT, newText:text
})
export  default  profileReducer;