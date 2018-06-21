function easyHttp(){
  this.http = new XMLHttpRequest();
}

// GET request
easyHttp.prototype.get = function(url, callback){
  this.http.open('GET', url, true);
  let self = this;
  this.http.onload = function(){
    if(self.http.status === 200){
      //return self.http.responseText;
      callback(self.http.responseText);
    }
  }
  this.http.send();
}
// POST request
easyHttp.prototype.post = function(url, data, callback){
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function(){
    callback(self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

// PUT request
easyHttp.prototype.put = function(url, data, callback){
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function(){
    callback(self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}
// DELETE request
easyHttp.prototype.delete = function(url, data, callback){
  this.http.open('DELETE', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  let self = this;
  this.http.onload = function(){
    callback(self.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}
