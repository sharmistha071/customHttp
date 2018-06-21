function easyHttpPromise(){
  this.http = new XMLHttpRequest();
}

easyHttpPromise.prototype.get = function(url){
  let self = this;
  let error = false;
  this.http.open('GET', url, true);
  return new Promise((resolve, reject) => {
    this.http.onload = function(){
      if(this.status === 200){
        if(!error){
          let response = JSON.parse(this.responseText);
          resolve(response);
        }else{
          reject(error);
        }
      }
    }
    this.http.send();
  });
}

easyHttpPromise.prototype.post = function(url, data){
  let error = false;
  this.http.open('POST', url, true);
  return new Promise((resolve,reject) => {
    this.http.onload = function(){
      if(!error){
        resolve(data);
      }else{
        reject(error);
      }
    }
    this.http.send(JSON.stringify(data));
  });
}
