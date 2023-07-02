import axios from "@/api/axios";
import { UserResponseI } from "@/models/user";
import { AxiosResponse } from "axios";

export const loginUser = (
    identifier: string,
    password: string
): Promise<AxiosResponse<UserResponseI>> => {
    const response = axios.post(
        "/auth/local",
        JSON.stringify({
            identifier,
            password,
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        }
    );
    return response;
};

export const registerUser = (
    username: string,
    email: string,
    password: string
) => {
    const response = axios.post(
        "/auth/local/register",
        JSON.stringify({
            username,
            email,
            password,
            role: "Authenticated",
            confirmed: true,
        }),
        {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        }
    );
    return response;
};
