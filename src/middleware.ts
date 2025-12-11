import { db, Sessions, Users, eq } from 'astro:db';
import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware(async (context, next) => {
    const sessionId = context.cookies.get('session-id')?.value;

    // Set locals.user = null by default
    context.locals.user = null;

    if (sessionId) {
        const session = (await db.select().from(Sessions).where(eq(Sessions.id, sessionId))).at(0);

        if (session && session.expiresAt > Date.now()) {
            const user = (await db.select().from(Users).where(eq(Users.id, session.userId))).at(0);
            if (user) {
                context.locals.user = user;
            }
        }
    }

    // Protection Logic
    const { pathname } = context.url;
    const isProtected = pathname.startsWith('/dashboard') || pathname.startsWith('/admin') || pathname.startsWith('/profile');
    const isLogin = pathname === '/login' || pathname === '/';

    if (isProtected && !context.locals.user) {
        return context.redirect('/login');
    }

    if (isLogin && context.locals.user) {
        if (context.locals.user.role === 'admin') {
            return context.redirect('/admin');
        } else {
            return context.redirect(`/dashboard/${context.locals.user.id}`);
        }
    }

    // Admin protection
    if (pathname.startsWith('/admin') && context.locals.user?.role !== 'admin') {
        return context.redirect(`/dashboard/${context.locals.user.id}`);
    }

    return next();
});
