'use server';
import getLink from "@/lib/getLink";
import { notFound, redirect } from "next/navigation";

export default async function Redirecter({ params }: { params: Promise<{ id: string }> }) {
    const url = await getLink((await params).id);
    
    if (url === undefined || url === null)
        return (<>
            <h2>This URL does not exist</h2>
            <p>Maybe it has expired?</p>
        </>);

    redirect(url);
}
