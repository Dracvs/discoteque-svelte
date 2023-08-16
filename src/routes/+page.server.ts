import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const res = await fetch(`http://localhost:5044/api/Artists/GetAllArtistsAsync`);
    const item = await res.json();
    return {item};
};