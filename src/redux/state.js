
import {rerenderEntireTree} from '../render'

let state = {
    profilePage:{
        posts:[
            {id:1, message:'You You Yuu', likeCount:"1"},
            {id:2, message:'Hello html', likeCount:"3"},
            {id:3, message:'Hello flex', likeCount:"34"},
            {id:4, message:'Hi Juliya', likeCount:"11"}
        ],
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

}

export let addPost = (postMessage) =>{

    let newPost ={
        id:5, 
        message:postMessage,
         likeCount:0
    }
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state)
}


export default state;