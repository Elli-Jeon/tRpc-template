import * as trpcExpress from "@trpc/server/adapters/express";

export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => {
  // 추후, 토큰으로 인증 절차할 수도

  return {};
};
