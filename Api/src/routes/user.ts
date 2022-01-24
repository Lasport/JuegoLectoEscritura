import { Router } from "express";
import { UserController } from "../controller/UserController";
import { checkJwt } from "../middlewares/jwt";
import { checkRole } from "../middlewares/role";

const router = Router();

//get all users
router.get('/',[checkJwt], UserController.getAll);

//gel one user
router.get('/:id',[checkJwt], UserController.getById);

//create a new user
router.post('/',[checkJwt,checkRole(['admin'])], UserController.newUser);

//edit user
router.patch('/:id',[checkJwt], UserController.editUser);

//Delete 
router.delete('/:id',[checkJwt], UserController.deleteUser);

export default router;