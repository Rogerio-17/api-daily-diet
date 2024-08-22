import { app } from "./app";
import { knex } from "./database";
import { env } from "./env";

app.post("/", async () => {
  const user = await knex("user")
    .insert({
      id: crypto.randomUUID(),
      name: "Rogerio José",
    })
    .returning("*");

  return user;
});

app.get("/", async () => {
  const user = await knex("user").select("*");

  return user;
});

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
