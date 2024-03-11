export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useAuth();
    // Log In required page
    
    if (process.client) {
        if (!isLoggedIn.value) {
            // return navigateTo('/login');
            window.location.pathname = '/login'
        }    
    }
})