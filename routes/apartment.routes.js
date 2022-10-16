import { Router } from "express";
import PostController from "../PostController/PostController.js";

const router = Router();

router.post("/post", PostController.create);
router.delete("/delete/:id", PostController.ondelete);
router.put("/put", PostController.update);
router.get("/getall", PostController.getAll);
router.get("/getone/:id", PostController.getOne);

export default router;
