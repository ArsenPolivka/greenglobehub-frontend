import { NextResponse } from "next/server";

let locales = ['en-US', 'ua-UA']

// Get the preferred locale, similar to the above or using a library
function getLocale(request: any) {
  const acceptLanguage = request.headers.get('Accept-Language')
  const preferredLocale = acceptLanguage?.split(',').find((locale: any) =>
    locales.includes(locale)
  )
  return preferredLocale || locales[0]
}

export function middleware(request:any) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. incoming request is /products
  // The new URL is now /en-US/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}