import { StrapiResponse } from './../models/strapiModel';
import axios from "@/api/axios";
import { Code, CodeGet, PostCode } from "@/models/code";

export const codeService = {
    async getCodes(token: string, currentPage: number, totaItems: number): Promise<StrapiResponse<CodeGet[]>> {
        const url = `/codes`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
            params: {
                'populate': '*',
                'pagination[page]': currentPage,
                'pagination[pageSize]': totaItems,
            }
        });
        return response.data;
    },
    async postCode(token: string, code: PostCode) {
        const url = `/codes`;
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
    async putCode(token: string, code: PostCode, idUser: number): Promise<StrapiResponse<CodeGet>> {
        const url = `/codes/${idUser}`;
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
    async deleteCode(token: string, code: Code) {
        const url = `/codes/${code.id}`;
        const response = await axios.delete(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });
        return response.data;
    },
    async getCode(token: string, id: number): Promise<StrapiResponse<CodeGet>> {
        const url = `/codes/${id}`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
            params: {
                'populate[comments][populate][0]': "users_permissions_user",
                'populate[users_permissions_user][populate][0]': '*',
                'populate[downvotes][populate][0]': "downvotes",
                'populate[upvotes][populate][0]': "upvotes",
                'populate[comments][populate][1]': "upvotes",
                'populate[comments][populate][2]': "downvotes",
            },
        });
        return response.data;
    },
};
