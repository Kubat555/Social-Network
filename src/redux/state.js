import RerenderTree from './../render';

// Это типа данные из базы данных - Типа для обучения)))
let state = {
  posts: [{id : 1, message: "Привет как дела", likes: 1},
  {id : 2, message: "Погодка заебись, снег)))", likes: 1},
  {id : 3, message: "Цой Погодка заебись, снег)))",likes: 1},
  {id : 4, message: "МПогодка заебись, снег)))",likes: 1}
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
  {id : 2, message: "Погодка заебись, снег)))",user:"user"},
  {id : 3, message: "Цой Погодка заебись, снег)))",user:"Vlad"},
  {id : 4, message: "МПогодка заебись, снег)))",user:"user"}
  // данные сообщений
  ]
}

export let addPost = (post)=>{
  let newPost = {
    id: 5,
    message: post,
    likes: 0
  };

  state.posts.push(newPost);
  RerenderTree(state);
}

export default state;