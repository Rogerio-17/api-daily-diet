import { app } from "./app";
import { env } from "./env";
import { users } from "./routes/users";

app.register(users);

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log("HTTP Server Running");
  });
