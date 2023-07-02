import { CommentGetI } from "./comment";
import { UserI } from "./user";

export type Code = {
    id?: number;
    code: string;
    language?: string;
    description: string;
    title: string;
    createdAt: string;
    users_permissions_user: { data: { id: number; attributes: UserI } };
    comments?: { data: CommentGetI[] };
    upvotes: { data: { id: number }[] };
    downvotes: { data: { id: number }[] };
};

export type CodeGet = {
    id: number;
    attributes: Code;
};

export type PostCode = {
    id?: number;
    code?: string;
    language?: string;
    description?: string;
    title?: string;
    createdAt?: string;
    users_permissions_user?: number;
    upvotes?: number[] | { connect?: number[]; disconnect?: number[] };
    downvotes?: number[] | { connect?: number[]; disconnect?: number[] };
};
