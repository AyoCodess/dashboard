import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/kpi-metrics',
    '/backlog',
    '/q1',
    '/q2',
    '/cleaning',
    '/moving',
    '/construction',
    '/funeral',
    '/user-profile'
  ]
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)']
};
