import { FastifyInstance } from "fastify";
import { knex } from "../database";

export async function users(app: FastifyInstance) {
  app.post("/", async () => {
    const user = await knex("user")
      .insert({
        id: crypto.randomUUID(),
        name: "Rogerio José",
      })
      .returning("*");

    return { user };
  });

  app.get("/", async () => {
    const user = await knex("user").select("*");

    return { user };
  });
}
