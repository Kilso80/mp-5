'use server';

import getCollection, { LINKS_COLLECTION } from "@/db";

export default async function reactivate(alias: string) {
    let db = await getCollection(LINKS_COLLECTION);

    db.updateOne(
        { alias: alias },
        { $set: { timestamp: Date.now() } }
    );
}
