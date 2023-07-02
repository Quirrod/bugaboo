export interface ILink {
    name: string;
    path: string;
    button?: "primary" | "secondary" | "imageButton" | undefined;
    icon?: boolean;
}