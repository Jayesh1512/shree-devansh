// pages/api/logout.js
import { cookies } from 'next/headers';

export async function POST(req) {
  try {
    const cookieStore = cookies();
    
    // Clear the token cookie
    cookieStore.set('token', '', {
      httpOnly: true,
      expires: new Date(0), // Expire immediately
      path: '/',
    });

    // Return a success response
    return new Response(JSON.stringify({ message: 'Logout successful' }), { status: 200 });
  } catch (error) {
    console.error('Logout Error:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
}
