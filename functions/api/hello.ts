export const onRequest: PagesFunction = async (context) => {
    return new Response(JSON.stringify({ status: 'ok', message: 'The St Joseph\'s Academy Backend is running on Cloudflare' }), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
