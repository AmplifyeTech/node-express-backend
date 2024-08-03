import {Router} from "express";
import {
    createUser,
    deleteUser,
    getAllUsers,
    updateUser,
    getUser
} from "../controllers/user/index.js";

const router = Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export {router as userRouter};