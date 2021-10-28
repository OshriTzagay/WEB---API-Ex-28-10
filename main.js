// // async function FetchFunction(){
// //     try {
// //      return await fetch('https://jsonplaceholder.typicode.com/todos/')
// //      .then(response => response.json())
// //      .then(json => console.log(json))

// //     }
// //     catch(error){
// //         return error
// //     }
// // }

// // FetchFunction()

// //!ex 1
// async function getAllPosts() {
//   try {
//     return await fetch("https://jsonplaceholder.typicode.com/posts/");
//   } catch (error) {
//     return error;
//   }
// }
// // getAllPosts ().then(respone=>respone.json()).then((json)=>console.log(json));

// //!ex 2

// async function getAllComments() {
//   try {
//     return await fetch("https://jsonplaceholder.typicode.com/comments/");
//   } catch (error) {
//     return error;
//   }
// }
// // getAllComments().then(respone=>respone.json()).then((json)=>console.log(json));

// //!ex 3

// async function getFifthPost() {
//   try {
//     return await fetch("https://jsonplaceholder.typicode.com/posts/5");
//   } catch (error) {
//     return error;
//   }
// }
// // getFifthPost().then(respone => respone.json()).then(json=>console.log(json))

// //!ex 4

// async function get9thComment() {
//   try {
//     return await fetch("https://jsonplaceholder.typicode.com/comments/9");
//   } catch (error) {
//     return error;
//   }
// }
// // get9thComment().then(respone => respone.json()).then(json=>console.log(json))

// //!ex 5

// async function getAllAlbums() {
//   try {
//     return await fetch("https://jsonplaceholder.typicode.com/albums/")
//       .then((resopne) => resopne.json())
//       .then((json) => console.log(json));
//   } catch (error) {
//     return error;
//   }
// }
// // getAllAlbums ()

// //!ex 6

// async function getAlbumNum2() {
//   try {
//     return await fetch("https://jsonplaceholder.typicode.com/albums/2");
//   } catch (error) {
//     return error;
//   }
// }
// // getAlbumNum2 ().then(respone=> respone.json()).then((res)=>{
// //     for (const key in res) {
// //       printDiv.innerHTML +=`<h2>${key} ${res[key]}<h2>`
// //     }
// // })

// //!ex 7

// async function getAllUsers() {
//   try {
//     return await fetch("https://jsonplaceholder.typicode.com/users/");
//   } catch (error) {
//     return error;
//   }
// }
// getAllUsers()
//   .then((respone) => respone.json())
//   .then((users) => {
//     for (const user of users) {
//       for (let key in user) {
//         // UsersDiv.innerHTML += `<div class ="divs"><h2>${key} :  ${user[key]}<h2></div><br>`;
//       }
//     }
//   });

// // ! ex 8+9
// //! /////////////////////////////////////////////////////////////////////////
// // ! THIS FUNCTION WILL BE USEFULL FOR U *** GETTING SPESIFIC ID FROM DATA.
// //! /////////////////////////////////////////////////////////////////////////

// function getDataFromApi(api, someId) {
//   return new Promise((resolve, reject) => {
//     fetch(`${api}/${someId}`)
//       .then((response) => response.json())
//       .then((res) => (res.id ? resolve(res) : reject("NO ID IN DATA")));
//   });
// }

// async function DataFromApiAsync() {
//   try {
//     return await getDataFromApi(
//       "https://jsonplaceholder.typicode.com/users/",
//       6
//     );
//   } catch (error) {
//     return error;
//   }
// }
// DataFromApiAsync().then((res) => console.log(res));

// //!EX 10!!/

// let post = {
//   method: "Post",
// };

// async function postFunc() {
//   try {
//     return await fetch("https://jsonplaceholder.typicode.com/todos/", post);
//   } catch (error) {
//     return error;
//   }
// }
// postFunc()
//   .then((response) => response.json())
//   .then((res) => console.log(res));

// //!Ex 11 !!/
// let post1 = {
//   method: "Post",
// };
// async function postToPost() {
//   try {
//     return await fetch("https://jsonplaceholder.typicode.com/posts/", post1);
//   } catch (error) {
//     return error;
//   }
// }
// postToPost()
//   .then((response) => response.json())
//   .then((res) => console.log(res));

// //!Ex 12 !!/

// let album = {
//   userId: 1,
//   id: 8,
//   title: "Eliyahu The King Of Netanya!",
// };

// let post2 = {
//   method: "Post",
//   body: JSON.stringify(album),
// };
// async function postToAlbum() {
//   try {
//     return await fetch("https://jsonplaceholder.typicode.com/albums/", post2);
//   } catch (error) {
//     return error;
//   }
// }
// postToAlbum()
//   .then((response) => response.json())
//   .then((res) => console.log(res));

// //!Ex 13 !!/
// let user1 = {
//     id: 1,
//     name: "Shimon Shimony",
//     username: "Shimi",
//     email: "DoubleS@april.biz",
// }
// const post3 ={
//     method:'Post',
//     body: JSON.stringify(user1)
// }

// async function addToUsers() {
//   try {
//     return await fetch("https://jsonplaceholder.typicode.com/users/",post3);
//   } catch (error) {
//     return error;
//   }
// }
// addToUsers().then(response=>response.json())
// .then(res=>console.log(res))

// //!Ex 14 !!//

// // function GernarFunc (api,obj){
// //     return new Promise ((resolve,)=>{})
// // }

// let somObj ={
//     id: 1,
//     name: "Shimon Shimony",
//     username: "Shimi",
//     email: "DoubleS@april.biz",

// }

// let option5={
// method:'Post',
// body:JSON.stringify(somObj)
// }
// async function GenaretFunc(api){
//     try {
//         return await fetch(`${api}`,option5)
//     } catch (error) {
//         return error
//     }
// }
// GenaretFunc("https://jsonplaceholder.typicode.com/comments/").then(response=>response.json())
// .then(res=>console.log(res))

//!Ex 15 !!//
class User {
  fname;
  id;
  phone;
  constructor(fname, id, phone) {
    this.fname = fname;
    this.id = id;
    this.phone = phone;
  }
}
btn.onclick = () => {
  let somUser = new User(firstnameInput.value, idInput.value, phoneInput.value);
  let option6 = {
    method: "Post",
    body: JSON.stringify(somUser),
  };

  async function forTheSwitch(api) {
    try {
      return await fetch(`${api}`, option6);
    } catch (error) {
      return error;
    }
  }
  switch (selector.value) {
    case "users":
      forTheSwitch("https://jsonplaceholder.typicode.com/users/")
        .then((response) => response.json())
        .then((res) => console.log(res));

      break;
    case "albums":
      forTheSwitch("https://jsonplaceholder.typicode.com/albums/")
        .then((response) => response.json())
        .then((res) => console.log(res));

      break;
    case "comments":
      forTheSwitch("https://jsonplaceholder.typicode.com/comments/")
        .then((response) => response.json())
        .then((res) => console.log(res));

      break;
    case "todos":
      forTheSwitch("https://jsonplaceholder.typicode.com/todos/")
        .then((response) => response.json())
        .then((res) => console.log(res));

      break;
    case "posts":
      forTheSwitch("https://jsonplaceholder.typicode.com/posts/")
        .then((response) => response.json())
        .then((res) => console.log(res));

      break;
    case "photos":
      forTheSwitch("https://jsonplaceholder.typicode.com/photos/")
        .then((response) => response.json())
        .then((res) => console.log(res));

      break;
    default:
      break;
  }
};
