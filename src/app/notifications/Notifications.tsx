"use client";

import useAuth from "@/hooks/useAuth";
import { userService } from "@/services/userServices";
import { useQuery } from "@tanstack/react-query";

function Notifications() {
    const { auth } = useAuth();

    const { data, isSuccess, isFetching, isLoading, isError, refetch } =
        useQuery({
            queryKey: ["notifications"],
            queryFn: () =>
                userService.getNotifications(auth.userId, auth.token),
            keepPreviousData: true,
        });

    return (
        <div className="flex w-full p-4 flex-col gap-2">
            {data?.length !== 0 ? (
                data?.map((notification: any) => (
                    <Notification message={notification.message} />
                ))
            ) : (
                <p className="text-dark font-bold text-lg">
                    No tienes notificaciones 😢
                </p>
            )}
        </div>
    );
}

export default Notifications;

type NotificationProps = {
    message: string;
};

function Notification({ message }: NotificationProps) {
    return (
        <div className="flex rounded-sm justify-start items-center p-6 border-b-4">
            <p className="text-dark font-bold text-lg">{message}</p>
        </div>
    );
}
