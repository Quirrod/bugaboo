import { AxiosResponse } from "axios";
import axios from "@/api/axios";
import { UserGet } from "@/models/user";

type updateUser = {
    username?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    currentPassword?: string;
};

type updatePassword = {
    password: string;
    currentPassword: string;
    passwordConfirmation: string;
};

export const userService = {
    async getUser(id: string, token: string): Promise<UserGet> {
        const url = `/users/${id}`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
            params: {
                populate: "*",
            },
        });

        return response.data;
    },

    async getNotifications(id: string, token: string) {
        const url = `/users/${id}`;
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
            params: {
                populate: "notifications",
            },
        });
        return response.data.notifications;
    },

    async updateUser(data: updateUser, id: number, token: string) {
        if (
            data.password !== "" &&
            data.confirmPassword !== "" &&
            data.currentPassword !== ""
        ) {
            const passwordData: updatePassword = {
                password: data.password as string,
                currentPassword: data.currentPassword as string,
                passwordConfirmation: data.confirmPassword as string,
            };
            await this.updatePassword(passwordData, id, token);
        }
        delete data.password;
        const url = `/users/${id}`;
        const response = await axios.put(url, JSON.stringify(data), {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });

        return response.data;
    },
    async updatePassword(data: updatePassword, id: number, token: string) {
        console.log(data, id, token);
        const url = `/auth/change-password`;
        const response = await axios.post(url, JSON.stringify({ ...data }), {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
        });

        return response.data;
    },
};
