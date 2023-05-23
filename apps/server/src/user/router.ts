import { z } from "zod";

import { router, publicProcedure } from "../trpc.js";

import { users } from "./db.js";
import { IUser } from "./types.js";

export const userRouter = router({
  getUsers: publicProcedure.query(() => users),
  getUsersById: publicProcedure
    .input((val: unknown) => {
      if (typeof val === "number") return val;
      throw new Error(
        `Invalid input, type of id should be number. current ${typeof val}`
      );
    })
    .query((req) => {
      const { input } = req;

      const user = users.find((user) => user.id === input);

      return user;
    }),
  createUser: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation((req) => {
      const { input } = req;

      const user: IUser = {
        id: users.length + 1,
        name: input.name,
      };

      users.push(user);

      return user;
    }),
});
