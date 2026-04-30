import bcrypt from 'bcryptjs';

export interface Env {
    DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const { request, env } = context;

    try {
        const body = await request.json() as { email?: string; password?: string };
        const { email, password } = body;

        if (!email || !password) {
            return new Response(JSON.stringify({ error: 'Missing email or password' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

        // Query user by email using D1
        const user = await env.DB.prepare('SELECT * FROM users WHERE email = ?')
            .bind(email)
            .first();

        // Verify password
        if (!user || !(await bcrypt.compare(password, user.password_hash as string))) {
            return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401, headers: { 'Content-Type': 'application/json' } });
        }

        // Success
        return new Response(JSON.stringify({
            user: {
                id: user.id,
                name: user.full_name,
                email: user.email,
                role: user.role
            }
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
};

// St Joseph's Academy V1.0 Cloudflare Pages Functions
