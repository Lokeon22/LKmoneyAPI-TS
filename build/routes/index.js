"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const item_routes_1 = require("./item.routes");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.use("/", item_routes_1.itemRoute);
