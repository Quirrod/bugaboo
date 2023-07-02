import { Code } from "./code"

export interface UserI {
    blocked: boolean
    confirmed: boolean
    createdAt: string
    email: string
    updatedAt: string
    username: string
}

export interface UserResponseI {
    jwt: string
    user: UserI
}

export interface UserGet {
    id: number
    username: string
    email: string
    provider: string
    confirmed: boolean
    blocked: boolean
    createdAt: string
    updatedAt: string
    profilePic: {
        id: number,
        name: string,
        alternativeText: string | null,
        caption: string | null
        width: number
        height: number
    }
    notifications: []
    comments: Comment[]
    codes: Code[]
}