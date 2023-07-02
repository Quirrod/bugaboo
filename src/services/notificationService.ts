import axios from "@/api/axios";

export const notificationService = {
    async createNotification(token: string, data: any) {
        console.log(data);
        const url = `/notifications`;
        const response = await axios.post(
            url,
            JSON.stringify({
                data: {
                    message: data.message,
                    users_permissions_user: data.codeUserId,
                },
            }),
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
};
