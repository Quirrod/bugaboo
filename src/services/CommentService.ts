import { CommentI } from './../models/comment';
import axios from "@/api/axios";
import { AxiosResponse } from "axios";

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
    async postComments(token: string, code: CommentI) {
        const url = `/comments`;
        const response = await axios.post(
            url,
            { data: code },
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
    async putComments(token: string, code: CommentI, id: number) {
        const url = `/comments/${id}`;
        const response = await axios.put(
            url,
            { data: code },
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
    async deleteComments(token: string, code: CommentI, id: number) {
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
    async getComment(token: string, id: number) {
        const url = `comments/${id}`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    },
};
