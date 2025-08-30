//- app/socials/posts/type.ts

import { BaseResponse } from "@/app/type"

export interface Post {
  id: number
  title: string
  body: string
  tags: string[]
  reactions: Reaction
  views: number
  userId: number
}

export interface Reaction {
  likes: number
  dislikes: number
}

export interface PostResponse extends BaseResponse {
  posts: Post[];
};
