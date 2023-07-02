import { Cabin, Lato } from "next/font/google";

const lato = Lato({
    variable: "--font-lato",
    weight: "300",
    subsets: ["latin-ext"],
});

const cabin = Cabin({
    variable: "--font-cabin",
    weight: "700",
    subsets: ["latin-ext"],
});

export { lato, cabin };