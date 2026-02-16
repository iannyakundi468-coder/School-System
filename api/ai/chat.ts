import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    // Graceful fallback if no API key is present (Mock Mode)
    if (!apiKey) {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1500));

        const mockResponses = [
            "That's a great question! Based on your current curriculum, I'd suggest reviewing Chapter 4.",
            "I can help with that. The Pythagorean theorem states that a² + b² = c².",
            "Remember to break the problem down into smaller steps. What do you think is the first step?",
            "Excellent work so far! You're making great progress in this subject.",
            "I'm currently running in 'Offline Mode' because my brain (API Key) is missing, but I'm still rooting for you!"
        ];

        const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
        return res.status(200).json({ reply: randomResponse });
    }

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are a helpful, encouraging K-12 tutor for a student. Keep answers concise and age-appropriate. User asks: ${message}`
                    }]
                }]
            })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error?.message || 'Failed to fetch from Gemini');
        }

        const reply = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble thinking right now. Try again?";

        return res.status(200).json({ reply });

    } catch (error: any) {
        console.error('Gemini API Error:', error);
        return res.status(500).json({
            error: 'Failed to process your request.',
            details: error instanceof Error ? error.message : String(error)
        });
    }
}

// Enhanced for Gemini integration
