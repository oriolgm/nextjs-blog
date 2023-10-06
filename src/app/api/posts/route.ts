import getPosts from "@/services/getPosts";
import {NextResponse} from "next/server";

export async function GET(request: Request) {
    const posts = getPosts();
    return NextResponse.json(posts);
}