import FooterSection from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar></Navbar>
            <div className="mx-auto max-w-7xl grow-1">
                {children}
            </div>
            <FooterSection></FooterSection>
        </main>
    );
}
