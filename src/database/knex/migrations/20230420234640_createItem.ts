import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return await knex.schema.createTable("Itens", (table) => {
    table.increments("id");
    table.text("name");
    table.decimal("price", 10, 2);
    table.text("type");
    table.text("category");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return await knex.schema.dropTable("Itens");
}
