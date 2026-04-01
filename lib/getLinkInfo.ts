'use server';

import getCollection, { LINKS_COLLECTION } from "@/db";

export default async function getLinkInfo(alias: string) {
    let db = await getCollection(LINKS_COLLECTION);

    db.deleteMany({
        timestamp:
            { $lt: Date.now() - 1000 * 60 * 60 * 24 * 30 }
    });

    return await db.findOne(
        { alias: alias },
    );;
}
