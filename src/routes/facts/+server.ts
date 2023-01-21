import { json } from '@sveltejs/kit';
import type { RequestEvent } from './$types';
import facts from './data.json';

const SPECIAL_IMAGE_PATH = '/special.webp';

/** @type {import('./$types').RequestHandler} */
export async function GET(request: RequestEvent) {
    const randomIndex = Math.ceil(Math.random() * facts.length) - 1;

    const showSpecialImage = Math.round(Math.random() * 100) < 2;

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, Math.random() * 1000);
    })

    if (showSpecialImage) {
        const data = {
            ...facts[randomIndex],
            imagePath: SPECIAL_IMAGE_PATH
        };

        return json(data);
    }

    return json(facts[randomIndex]);
}