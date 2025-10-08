import FooterSection from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Spotlight } from "@/components/ui/spotlight-new";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen flex flex-col">
            {/* <Spotlight /> */}
            {/* <BackgroundRippleEffect /> */}
            <Navbar></Navbar>
            <div className=" grow-1">
                {children}
            </div>
            <FooterSection></FooterSection>
        </main>
    );
}
