import { Request, Response } from "express";
import { connection as knex } from "../database/knex";

import { Item } from "../models/ItemType";

class ItemController {
  async create(req: Request, res: Response) {
    const { name, price, type, category }: Item = req.body;

    if (!name || !price || !type || !category) {
      throw new Error("Preencha todos os campos");
    }

    await knex("Itens").insert({
      name,
      price,
      type,
      category,
    });

    return res.status(201).json({ message: "Item adicionado" });
  }

  async index(req: Request, res: Response) {
    let { tipo, page }: any = req.query;

    const limit = 6;

    page = Number(page);

    if (tipo) {
      const ItensTypeFiltered: Item[] = await knex("Itens").where({
        type: tipo,
      });
      return res.json(ItensTypeFiltered);
    }

    if (page) {
      const allItens: Item[] = await knex("Itens")
        .limit(limit)
        .offset((page - 1) * limit);
      return res.json(allItens);
    }

    const all = await knex("Itens");

    return res.json(all);
  }
}

export { ItemController };
