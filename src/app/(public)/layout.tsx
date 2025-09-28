import Navbar from "@/components/shared/Navbar";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="">
            <Navbar></Navbar>
            <div className="mx-auto max-w-7xl">
                {children}
            </div>
        </main>
    );
}
