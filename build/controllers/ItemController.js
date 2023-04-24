"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemController = void 0;
const knex_1 = require("../database/knex");
class ItemController {
    async create(req, res) {
        const { name, price, type, category } = req.body;
        if (!name || !price || !type || !category) {
            throw new Error("Preencha todos os campos");
        }
        await (0, knex_1.connection)("Itens").insert({
            name,
            price,
            type,
            category,
        });
        return res.status(201).json({ message: "Item adicionado" });
    }
    async index(req, res) {
        let { tipo, page } = req.query;
        const limit = 6;
        page = Number(page);
        if (!page) {
            page = 1;
        }
        if (tipo) {
            const ItensTypeFiltered = await (0, knex_1.connection)("Itens")
                .where({
                type: tipo,
            })
                .limit(limit)
                .offset((page - 1) * limit);
            return res.json(ItensTypeFiltered);
        }
        if (page) {
            const allItens = await (0, knex_1.connection)("Itens")
                .limit(limit)
                .offset((page - 1) * limit);
            return res.json(allItens);
        }
        const all = await (0, knex_1.connection)("Itens");
        return res.json(all);
    }
}
exports.ItemController = ItemController;
