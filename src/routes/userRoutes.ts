import {Router} from  "express"
import {UserController} from "./../controller/userController"
import {AuthenticateService} from './../middleware/Authenticate/Authenticate'
let userControllerObj=new UserController();


export let userRoutes=Router();

userRoutes.get('/',AuthenticateService.authenticate, userControllerObj.GetAllTodo);//n no of callback function
userRoutes.get('/authorize',AuthenticateService.authorize, userControllerObj.GetAllTodo);//n no of callback function
//userRoutes.get('/',AuthenticateService.authorize, userControllerObj.GetAllTodo);
//userRoutes.post('/',userControllerObj.register);
userRoutes.post('/register',userControllerObj.createUser);
userRoutes.post('/login',userControllerObj.login);
userRoutes.post('/getProfile',userControllerObj.getProfile);

userRoutes.get('/getByEmail/',userControllerObj.findUserByEmail);
// userRoutes.get('/:todoId',userControllerObj.getTodoById);
// userRoutes.put('/:todoId',userControllerObj.updateTodo);
// userRoutes.delete('/:todoId',userControllerObj.deleteTodo);
//nxt some middleare opr
//todoRoutes.get('/',abcd,xyx,next,todoControllerObj.GetAllTodo);
//create similar structure user app all CRUD n ame,mobile,email and password,created data



