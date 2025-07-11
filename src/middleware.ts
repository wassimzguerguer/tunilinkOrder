import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// هذا الميدل وير يتحقق من وجود التوكن في الكوكيز
export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const { pathname } = request.nextUrl

  // إذا لم يوجد توكن، نعيد توجيه المستخدم لصفحة تسجيل الدخول
  if (!token && (pathname.startsWith('/my-orders') || pathname.startsWith('/admin'))) {
    const loginUrl = new URL('/login', request.url)
    loginUrl.searchParams.set('redirect', pathname) // بعد تسجيل الدخول يرجع لنفس الصفحة
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// نحدد المسارات التي نريد حمايتها
export const config = {
  matcher: ['/my-orders/:path*', '/admin/:path*'],
}
