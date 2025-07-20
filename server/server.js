import fastify from "fastify";
import dotenv from "dotenv";
import sendMailRoute from "./src/routes/sendMail.js";

dotenv.config();

const app = fastify({
    logger: true,
  });

  app.register(sendMailRoute);
  
  app.get("/", async (request, reply) => {
    return { hello: "world" };
  });
  
  const start = async () => {
    try {
      await app.listen({ port: 5000 });
    } catch (err) {
      app.log.error(err);
      process.exit(1);
    }
  };
  
  start();
  