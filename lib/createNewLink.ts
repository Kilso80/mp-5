'use server';

import getCollection, { LINKS_COLLECTION } from "@/db";

export default async function createNewLink(alias: string, url: string) {
    let db = await getCollection(LINKS_COLLECTION);

    db.insertOne({
        alias: alias,
        link: url,
        timestamp: Date.now()
    });
}
