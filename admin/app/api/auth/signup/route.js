import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';

export async function POST(req) {
  const { name, email, password } = await req.json();

  if (!name || !email || !password) {
    return new Response(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("your-database-name");
  const users = db.collection("users");

  const existingUser = await users.findOne({ email });

  if (existingUser) {
    return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await users.insertOne({
    name,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  return new Response(JSON.stringify({ message: 'User created successfully' }), { status: 201 });
}
