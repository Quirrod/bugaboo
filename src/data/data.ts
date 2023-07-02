import { ILink } from "@/models/links";

export const navBarNoAuth: ILink[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "About",
        path: "/#about",
    },
    {
        name: "Services",
        path: "/#services",
    },
    {
        name: "Steps",
        path: "/#steps",
    },
];

export const navBarAuth: ILink[] = [
    {
        name: "Codes",
        path: "/shared-codes",
    },
    {
        name: "My Codes",
        path: "/my-codes",
    },
    {
        name: "Notifications",
        path: "/notifications",
    },
];
