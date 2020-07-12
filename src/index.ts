import path from "path";
import express from "express";
import serveStatic from "serve-static";
var app = express();
app.use(serveStatic(path.join(__dirname, 'public')));
//Tạo port để lắng nghe request từ client gọi lên.
app.listen(3000,()=>{
    console.log('Node-server running...')
});
var listUsers = [{id: 1, name: 'Nguyễn Văn A'}, {id: 2, name: 'Hoàng Thị B'}, {id: 3, name: 'Phan Huy C'}];
app.get('/', (request, response)=>{
  response.redirect('/src/index.html');
});
app.get('/api/getName/:userId', function(request, response){
    var userId = parseInt(request.params.userId);
    var user = listUsers.find(user=>user.id === userId);
    if(user)
      response.send(user.name);
    else
      response.send('User not found!!!')
  });