import TopMenu from "@/components/ui/top-menu/TopMenu";
import React from "react";


export default function ShopLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-gray-200">
            <TopMenu />
            {children}

        </main>
    )
}