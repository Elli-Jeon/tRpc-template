import { initTRPC, inferAsyncReturnType } from "@trpc/server";

import { createContext } from "@/context.js";

export type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

export const middleware = t.middleware;
export const router = t.router;

//  미들웨어(예: 인증된 사용자 확인)를 사용하여 보호된 프로시저(예: 인증)를 추가할 수 있는 곳
export const publicProcedure = t.procedure;
