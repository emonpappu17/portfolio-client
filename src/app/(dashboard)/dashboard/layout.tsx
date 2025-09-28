// import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {/* //   <Sidebar /> */}
      {children}
    </main>
  );
}
