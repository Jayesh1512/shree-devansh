import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'

export async function POST(req) {
    try {
        const cookieStore = cookies();
        cookieStore.delete('token');
        return NextResponse.redirect("/login");
    } catch(error) {
        console.log("Logout Error \n", error);
    }
}