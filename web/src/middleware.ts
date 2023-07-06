import { NextRequest, NextResponse } from "next/server";

const signInURL = `https://github.com/login/oauth/authorize?cliente_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`

// backend for front
export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value

    if (!token) {
        return NextResponse.redirect(signInURL, {
            headers: {
                'Set-Cookie': `redirectTo=${request.url}; Path=/; HttpOnly; max-age=20;`,
            }
        })
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/matcher/:path*',
}