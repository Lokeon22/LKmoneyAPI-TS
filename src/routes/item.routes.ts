import { Router } from "express";

import { ItemController } from "../controllers/ItemController";

const itemRoute = Router();

const itemController = new ItemController();

itemRoute.post("/create", itemController.create);
itemRoute.get("/all", itemController.index);

export { itemRoute };
