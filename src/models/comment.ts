import { UserI } from "./user";

export interface CommentI {
    message: string;
    upvotes: { data: { id: number }[] };
    downvotes: { data: { id: number }[] };
    code: number;
    users_permissions_user: { data: { attributes: UserI } };
    codeLine: string;
    numberCodeLine: number;
    createdAt?: string;
}

export type CommentGetI = {
    attributes: CommentI;
    id: number;
};

export type PostCommentI = Omit<
    CommentI,
    "users_permissions_user" | "upvotes" | "downvotes"
> & {
    codeUserId: number;
    codeTitle: string;
    usernameComment: string;
    users_permissions_user: number;
    upvotes: number[] | { connect?: number[]; disconnect?: number[] };
    downvotes: number[] | { connect?: number[]; disconnect?: number[] };
};

export type PutCommentI = Omit<
    Partial<PostCommentI>,
    "upvotes" | "downvotes"
> & {
    upvotes: { connect?: number[]; disconnect?: number[] };
    downvotes: { connect?: number[]; disconnect?: number[] };
};
