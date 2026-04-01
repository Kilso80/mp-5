'use server';

import getCollection, { LINKS_COLLECTION } from "@/db";

export default async function isLinkFree(alias: string): Promise<bool> {
    let db = await getCollection(LINKS_COLLECTION);

    let ans = await db.findOne(
        { alias: alias }
    );

    return ans === undefined || ans === null;
}
