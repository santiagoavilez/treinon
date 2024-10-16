import { Suspense } from "react";

import { api } from "~/trpc/server";
import {
  CreatePostForm,
  PostCardSkeleton,
  PostList,
} from "../_components/posts";
import { ClerkLoaded, ClerkLoading, SignIn, SignedOut } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import { Loader2 } from "lucide-react";


export default async function HomePage() {
  // You don't need to fetch these here, just showing different usages
  // If you don't want the Suspense loading state, you could pass these
  // posts as props as use as initialData in the query.
  const posts = await api.post.all();
  // const user = await currentUser();
  console.log("RSC  Posts:", posts);

  return (
    <main className="flex h-screen flex-col items-center">
      <div className="container mt-12 flex flex-col items-center justify-center gap-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <span className="text-fuchsia-500">T3</span> Turbo x{" "}
          <span className="text-emerald-400">Supabase</span>
        </h1>
        <CreatePostForm />
        <div className="h-[40vh] w-full max-w-2xl overflow-y-scroll">
          <Suspense
            fallback={
              <div className="flex w-full flex-col gap-4">
                <PostCardSkeleton />
                <PostCardSkeleton />
                <PostCardSkeleton />
              </div>
            }
          >
            <PostList />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
