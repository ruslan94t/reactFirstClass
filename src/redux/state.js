const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';

let store = {
    _state :{
        profilePage:{
            posts:[
                {id:1, message:'You You Yuu', likeCount:"1"},
                {id:2, message:'Hello html', likeCount:"3"},
                {id:3, message:'Hello flex', likeCount:"34"},
                {id:4, message:'Hi Juliya', likeCount:"11"}
            ],
            newPostText:'it-main-text'
        },
        dialogsPage:{
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
            ]
        },
        sidebar:{}

    },
    _callSubscriber(){

    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber=observer;
    },

    dispatch(action){
       //{type:"ADD-POST"naz-deystt}
  if(action.type === 'ADD-POST'){
      let newPost ={
          id:5,
          message:this._state.profilePage.newPostText,
          likeCount:0
      }
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber(this._state)
  }else if(action.type=== 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state)
  }
    }





}

export  const  addPostActionCreator = ()=> ({type:ADD_POST})

export  const updateNewPostTextActionCreator = (text)=>({
        type:UPDATE_NEW_POST_TEXT, newText:text
    })


export default store;
window.store=store;

//store OOP
//api интерфейс какойто программы
// method api 99518599342

