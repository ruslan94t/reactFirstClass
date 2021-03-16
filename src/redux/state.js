import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



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
            ],
            newMessageBody:'',
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
        this._state.profilePage= profileReducer(this._state.profilePage, action)
        this._state.dialogsPage= dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)


}





}



export default store;
window.store=store;

//store OOP
//api интерфейс какойто программы
// method api 99518599342

