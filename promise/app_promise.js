let http = new easyHttpPromise();
//
// function get(url){
//   let error = false;
//   let xhr = new XMLHttpRequest();
//   let self = this;
//   xhr.open('GET', url, true);
//   return new Promise(function(resolve, reject){
//     xhr.onload = function(){
//       if(this.status === 200){
//         if(!error){
//           //console.log(this.responseText);
//           resolve(this.responseText);
//         }else{
//           reject(error);
//         }
//       }
//     }
//     xhr.send();
//   });
// }

http.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(function(response){
    console.log(response);
    http.get('https://jsonplaceholder.typicode.com/users/' + response.userId)
  .then(function(response){
      console.log(response);
    })
  .catch(function(error){
      console.log(error);
    })
  });

http.post('https://jsonplaceholder.typicode.com/posts', {title: 'title 101', body: 'body 101'})
  .then(function(response){
    console.log(response);
  })
  .catch(function(error){
    console.log(error);
  });
