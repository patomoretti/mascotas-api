import { Router } from "express";

const router = Router();

router.get("/", (req,res)=>{
    res.send("Bienvenidos");
})

export {router as viewsRouter};