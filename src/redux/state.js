import RerenderTree from './../render';

let store =  {
  _state : {
    posts: [{id : 1, message: "Привеt как дела", likes: 1},
    {id : 2, message: "Погодка , снег)))", likes: 1},
    {id : 3, message: "Цой Погодка, снег)))",likes: 1},
    {id : 4, message: "МПогодка , снег)))",likes: 1}
    // данные постов
    ],
    dialogs: [ 
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
    ]
  },

  getState(){
    return this._state;
  },


  dispatch(action){
    if(action.type === "ADD-POST"){

      let newPost = {
        id: 5,
        message: action.post,
        likes: 0
      };
      
      this._state.posts.push(newPost);
      RerenderTree(this._state);
    }
  }
};



export default store;