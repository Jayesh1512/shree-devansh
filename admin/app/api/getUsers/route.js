import clientPromise from '@/lib/mongodb';

export async function GET(request) {
  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db('test');

    // Fetch all users from 'contacts' collection
    const users = await db.collection('contacts').find({}).toArray();

    // Return the users as a JSON response
    return new Response(JSON.stringify(users), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    // Log error details for debugging
    console.error('Error fetching users:', error);

    // Return an error response if fetching fails
    return new Response(JSON.stringify({ error: 'Failed to fetch users' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
