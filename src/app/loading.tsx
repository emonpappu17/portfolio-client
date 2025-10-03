export default function GlobalLoading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-violet-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
        </div>
    );
}
