const http = new easyHttp();

let post = http.get('https://jsonplaceholder.typicode.com/posts/1', function(response){
  console.log(response);
});

let data = {
  title: "title 101",
  body: "post 101"
}
http.post('https://jsonplaceholder.typicode.com/posts', data, function(response){
  console.log(response);
});


let updatedData = {
  title: "edited",
  body: "edited"
}
http.put('https://jsonplaceholder.typicode.com/posts/1', updatedData, function(response){
  console.log(response);
});
