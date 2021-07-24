# EasyTechUserDetails
this is a test project You can add and delete users. using  front end React GUI 

to run this

  1.just fork / download the project.
  2.open 2 terminals/commandprompt.
  3.cd(choose directory) over to clint and type "npm start".
  4.cd(choose directory) over to servet directory  and type "npm start"(it will run nodemon index.js ).
  5.your server will run in localhost:5000 and the default APi route will be "http://localhot:5000/users.
  6.your react app will run in localhost:3000 and the gui is preety simple toi use just click on Add button ton top right corner to add new user.
  
  
bugs: 
  1. the useEffet() hook contains bugs it might not always refresh the page i am still working on it.
  2. dont try to add same / already existing email it will respont with error but you can only see that in console.
  If i find any bugs in future i will report it. 


Description:

SERVER : the structure of server is preety simple 
I have built 3 directories in server 
1.Controllers : contains all the functions that perform CRUD operation in the mongoDB.
2.Routes : contains all the api routes
3.models : contains the mongoDB model
4.index.js file contains the main boiler plate code for server.

CLIENT : it is the react app , the folder structure id simple and welll organized ,
1. I have userd redux(to make a local store),
2. axios(to make api request),
3. Bootstrap and single CSS file for Styling.
  Directories inside src
  1.Actions : contains all the functions that makes request to the server.
  2.api : contains the api routes that makes an axios request to the server.
  3.components : contains 4 components of the UI 
  4.Constants : this was not necessary but i added it to make the code expandible and easy to implemet. contains constant like CREATE UPDATE etc.
  5.reducers contains the reducer boiler plate code.
  
