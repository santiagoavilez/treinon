// import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

// import type { AppRouter } from "./src/root";

// export { appRouter, type AppRouter } from "./src/root";
// export { createTRPCContext } from "./src/trpc";

// /**
//  * Inference helpers for input types
//  * @example type HelloInput = RouterInputs['example']['hello']
//  **/
// export type RouterInputs = inferRouterInputs<AppRouter>;

// /**
//  * Inference helpers for output types
//  * @example type HelloOutput = RouterOutputs['example']['hello']
//  **/
// export type RouterOutputs = inferRouterOutputs<AppRouter>;

import type { inferRouterInputs, inferRouterOutputs } from "@trpc/server";

import type { AppRouter } from "./src/root";
import { appRouter } from "./src/root";
import { createCallerFactory, createTRPCContext } from "./src/trpc";

/**
 * Create a server-side caller for the tRPC API
 * @example
 * const trpc = createCaller(createContext);
 * const res = await trpc.post.all();
 *       ^? Post[]
 */
const createCaller = createCallerFactory(appRouter);

/**
 * Inference helpers for input types
 * @example
 * type PostByIdInput = RouterInputs['post']['byId']
 *      ^? { id: number }
 **/
type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example
 * type AllPostsOutput = RouterOutputs['post']['all']
 *      ^? Post[]
 **/
type RouterOutputs = inferRouterOutputs<AppRouter>;

export { createTRPCContext, appRouter, createCaller };
export type { AppRouter, RouterInputs, RouterOutputs };
