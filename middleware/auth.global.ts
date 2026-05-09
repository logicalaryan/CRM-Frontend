import { defineNuxtRouteMiddleware, navigateTo, useCookie } from '#imports';

export default defineNuxtRouteMiddleware((to, from) => {
  const token = useCookie('auth_token');
  const publicRoutes = ['/login', '/signup', '/forgot-password', '/verify'];
  
  // If the user is NOT authenticated and the route is NOT public, redirect to login
  if (!token.value && !publicRoutes.includes(to.path)) {
    return navigateTo('/login');
  }

  // If authenticated user tries to access root, redirect to /leads
  if (token.value && to.path === '/') {
    return navigateTo('/leads');
  }
});
