import cors from "cors";
import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";

import { appRouter } from "./router.js";
import { createContext } from "@/context.js";

const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

app.listen(() => {
  console.log("server 4000");
  return 4000;
});

export type AppRouter = typeof appRouter;
