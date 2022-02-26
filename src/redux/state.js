import RerenderTree from './../render';

const ADD_POST = "ADD-POST";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";

let store =  {
  _state : {
    posts: [{id : 1, message: "Привеt как дела", likes: 1},
    {id : 2, message: "Погодка , снег)))", likes: 1},
    {id : 3, message: "Цой Погодка, снег)))",likes: 1},
    {id : 4, message: "МПогодка , снег)))",likes: 1}
    // данные постов
    ],
    dialogs: {
      contacts: [ 
        {id : 1, name: "Влад"},
        {id : 2, name: "Кайрат"},
        {id : 3, name: "Цой НАйн"},
        {id : 4, name: "Медер"}
        // данные контактов
        ],
      messages: [ 
        {id : 1, message: "Привет, что делаешь?", user:"user"},
        {id : 2, message: "Погодка , снег)))",user:"user"},
        {id : 3, message: "Цой Погодка , снег)))",user:"Vlad"},
        {id : 4, message: "МПогодка , снег)))",user:"user"} 
        // данные сообщений
      ],
      newMessageText: {
        id: 5,
        message: "",
        user: "user"
      },
    }
    
  },


  getState(){
    return this._state;
  },

  _callSubscriber(){
    console.log("TextChanged");
  },

  subscribe(observer){
    this._callSubscriber = observer;
  },

  dispatch(action){
    if(action.type === ADD_POST){

      let newPost = {
        id: 5,
        message: action.post,
        likes: 0
      };
      
      this._state.posts.push(newPost);
      RerenderTree(this._state);
    }

    else if(action.type === UPDATE_NEW_MESSAGE){
      this._state.dialogs.newMessageText.message = action.body;
      this._callSubscriber(this._state);
    }

    else if(action.type === SEND_MESSAGE){
      let body =  this._state.dialogs.newMessageText.message;
      this._state.dialogs.newMessageText.message = "";
      this._state.dialogs.messages.push({
        id: 5,
        message: body,
        user: "user"
      });
      RerenderTree(this._state);
    }
  }
};

export const addPostAction = (text)=>{
  return {
    type: ADD_POST,
    post: text
    };
}

export const updateNewMessageAction = (text)=>{
  return {
    type: UPDATE_NEW_MESSAGE,
    body: text
    };
}

export const sendMessageAction = ()=>{
  return {
    type: SEND_MESSAGE,
    };
}

export default store;