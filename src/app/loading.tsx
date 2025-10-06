import { Spinner } from "@/components/ui/spinner";

export default function GlobalLoading() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            {/* <div className="h-16 w-16 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" /> */}
            <Spinner className="size-12"></Spinner>
        </div>
    );
}
