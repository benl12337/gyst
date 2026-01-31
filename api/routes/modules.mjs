import express from "express";
import modulesController from "../controllers/modulesController.mjs";
const modulesRouter = express.Router();

modulesRouter.get("/all", modulesController.getAllModules);
modulesRouter.get("/", modulesController.getUserModules);
modulesRouter.post("/", modulesController.addModules);
modulesRouter.delete("/", modulesController.deleteModules);

export default modulesRouter;