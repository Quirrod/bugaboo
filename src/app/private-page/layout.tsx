import RequireAuth from "@/components/shared/RequireAuth";

export default function PrivateLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    return <RequireAuth>{children}</RequireAuth>;
}
