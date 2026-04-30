export interface Env {
    DB: D1Database;
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
    const { env } = context;

    try {
        const { results } = await env.DB.prepare('SELECT * FROM students ORDER BY name ASC').all();
        return new Response(JSON.stringify(results), { 
            status: 200, 
            headers: { 'Content-Type': 'application/json' } 
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { 
            status: 500, 
            headers: { 'Content-Type': 'application/json' } 
        });
    }
};
