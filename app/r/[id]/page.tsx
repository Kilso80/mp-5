'use server';
import getLink from "@/lib/getLink";
import { redirect } from "next/navigation";

export default async function Redirecter({ params }: { params: Promise<{ id: string }> }) {
    const url = await getLink((await params).id);
    
    redirect(url);
}
