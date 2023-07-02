import { StrapiResponse } from "./../models/strapiModel";
import { CommentGetI, PostCommentI, PutCommentI } from "./../models/comment";
import axios from "@/api/axios";
import { CommentI } from "@/models/comment";
import { notificationService } from "./notificationService";

export const commentService = {
    async getComments(token: string) {
        const url = `/comments`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    },
    async postComment(
        token: string,
        comment: PostCommentI
    ): Promise<StrapiResponse<CommentGetI>> {
        const url = `/comments`;
        await notificationService.createNotification(token, {
            message: `Tienes un nuevo comentario en el código ${comment.codeTitle}} de ${comment.usernameComment}`,
            codeUserId: comment.codeUserId,
        });
        const response = await axios.post(
            url,
            { data: comment },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            }
        );
        return response.data;
    },
    async putComment(
        token: string,
        comment: PutCommentI,
        id: number
    ): Promise<StrapiResponse<CommentGetI>> {
        const url = `/comments/${id}`;
        const response = await axios.put(
            url,
            { data: comment },
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                withCredentials: true,
            }
        );
        return response.data;
    },
    async deleteComment(token: string, comment: CommentI, id: number) {
        const url = `/comments/${id}`;
        const response = await axios.delete(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    },
    getComment(token: string, id: number) {
        const url = `/comments/${id}`;
        const response = axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response;
    },
};
