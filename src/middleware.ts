import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  console.log("In middleware");

  if (req.nextUrl.pathname.startsWith("/middleware/response")) {
    // Response

    return NextResponse.json({
      message: "Response from middleware",
    });
  }

  if (req.nextUrl.pathname.startsWith("/middleware/redirect")) {
    // Redirect

    return NextResponse.redirect(new URL("/middleware/rewrite", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/middleware/rewrite")) {
    // Rewrite

    return NextResponse.rewrite(
      new URL("/middleware/rewriteResponse", req.url)
    );
  }
}

export const config = {
  matcher: "/middleware/:path*",
};
