export interface Env {
    AI: any; // Using any or Ai from @cloudflare/workers-types if available
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
    const { request, env } = context;

    try {
        const body = await request.json() as { message?: string };
        const { message } = body;

        // GoGuardian-Inspired Safety Heuristics
        const sensitiveTerms = ['hurt myself', 'suicide', 'kill', 'bomb', 'weapon', 'attack', 'bully'];
        const lowerMessage = message?.toLowerCase() || '';
        const isFlagged = sensitiveTerms.some(term => lowerMessage.includes(term));

        if (isFlagged) {
            console.warn(`[SAFETY ALERT] Sensitive content detected from user: ${message}`);
            return new Response(JSON.stringify({
                reply: "I've noticed you're talking about something very serious. Please know that you're not alone and there are people who want to help. You can reach out to a trusted teacher, counselor, or call a support hotline immediately.",
                safetyFlag: true
            }), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }

        // Graceful fallback if no AI binding is present (e.g. testing locally without wrangler ai)
        if (!env.AI) {
            // Simulate network delay
            await new Promise(resolve => setTimeout(resolve, 1500));

            const mockResponses = [
                "That's a great question! Based on your current curriculum, I'd suggest reviewing Chapter 4.",
                "I can help with that. The Pythagorean theorem states that a² + b² = c².",
                "Remember to break the problem down into smaller steps. What do you think is the first step?",
                "Excellent work so far! You're making great progress in this subject.",
                "I'm currently running in 'Offline Mode' because my brain (AI Binding) is missing, but I'm still rooting for you!"
            ];

            const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
            return new Response(JSON.stringify({ reply: randomResponse }), { status: 200, headers: { 'Content-Type': 'application/json' } });
        }

        console.log('Fetching from Cloudflare Workers AI...');
        
        const response = await env.AI.run('@cf/meta/llama-3-8b-instruct', {
            messages: [
                { 
                    role: 'system', 
                    content: 'You are an advanced Educational Learning Model. Your goal is to help students learn by guiding them to the answer, rather than just giving it to them. Use the Socratic method, ask thought-provoking questions, encourage critical thinking, and dynamically adapt your language to be engaging, age-appropriate, and supportive. If a student is frustrated, be extremely patient and empathetic.' 
                },
                { role: 'user', content: message }
            ]
        });

        const reply = response.response || "I'm having trouble thinking right now. Try again?";

        return new Response(JSON.stringify({ reply }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch (error: any) {
        console.error('Detailed Cloudflare AI Error:', error);
        return new Response(JSON.stringify({
            error: 'Failed to process your request.',
            details: error instanceof Error ? error.message : String(error),
            suggestion: 'Please verify your Cloudflare AI binding configuration.'
        }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
};

// Enhanced for Cloudflare Workers AI integration
