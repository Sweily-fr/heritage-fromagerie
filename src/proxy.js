import { NextResponse } from "next/server";

/**
 * Les URL du type /?b=... sont des restes de l'ancien site WordPress piraté.
 * On renvoie 410 (Gone) pour que Google les retire définitivement de l'index,
 * au lieu d'afficher l'accueil en 200.
 */
export function proxy(request) {
  if (request.nextUrl.searchParams.has("b")) {
    return new NextResponse(null, {
      status: 410,
      headers: { "X-Robots-Tag": "noindex" },
    });
  }
  return NextResponse.next();
}

// Toutes les pages, sauf les fichiers statiques et images optimisées.
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|images/|logo/).*)",
  ],
};
