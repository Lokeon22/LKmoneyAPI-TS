import { Router } from "express";

import { itemRoute } from "./item.routes";

const routes = Router();

routes.use("/", itemRoute);

export { routes };
