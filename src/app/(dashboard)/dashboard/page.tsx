/* eslint-disable @typescript-eslint/no-unused-vars */
import DashboardHome from "@/components/dashboardHome/DashboardHome";
import { baseUrl } from "@/config/baseUrl";
import { IDashboardOverview } from "@/types";
import { cookies } from "next/headers";

const getToken = async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken");
    return token?.value;
};

const getOverview = async () => {
    const token = await getToken();
    try {
        const res = await fetch(`https://portfolio-server-fawn-tau.vercel.app/api/overview`, {
            cache: "no-store",
            headers: {
                "Content-Type": "application/json",
                Cookie: `accessToken=${token}`,
            },
        })

        if (!res.ok) return [];

        const { data: overview } = await res.json();
        return overview
    } catch (error) {
        return [];
    }
}

const DashboardHomePage = async () => {
    const overflow = await getOverview();
    // console.log(overflow);
    return (
        <main>
            <div className="max-w-7xl mx-auto px-4 py-10">
                <DashboardHome data={overflow}></DashboardHome>
            </div>
        </main>
    );
};

export default DashboardHomePage;