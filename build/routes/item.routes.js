"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemRoute = void 0;
const express_1 = require("express");
const ItemController_1 = require("../controllers/ItemController");
const itemRoute = (0, express_1.Router)();
exports.itemRoute = itemRoute;
const itemController = new ItemController_1.ItemController();
itemRoute.post("/create", itemController.create);
itemRoute.get("/all", itemController.index);