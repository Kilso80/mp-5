'use server';

import getCollection, { LINKS_COLLECTION } from "@/db";

export default async function getLink(alias: string): Promise<string> {
    let db = await getCollection(LINKS_COLLECTION);

    db.deleteMany({
        timestamp:
            { $lt: Date.now() - 1000 * 60 * 60 * 24 * 30 }
    });

    let ans = await db.findOneAndUpdate(
        { alias: alias },
        { $set: { timestamp: Date.now() } }
    );

    return ans?.link ?? undefined;
}
