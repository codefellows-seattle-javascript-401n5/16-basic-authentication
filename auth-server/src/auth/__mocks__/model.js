'use strict';

//to make unit test work with this mock, you have to export a constructor / Class

export default {
//finding the truthiness of auth.username && auth.password


  authenticate: (auth) => {
    if ( (!!auth.username && !!auth.password) ) {
      return Promise.resolve({
        generateToken: () => {return 'token!';},
      });
    }
    else {
      return Promise.resolve(null);
    }
  },


};

// export default class User{
//   constructor(data){
//     this.username = data.username;
//     this.password = data.password;
//   }
//   save(){
//     //do save stuff
//     return new Promise()
//   }
// }