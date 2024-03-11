export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useAuth();
    // Log in not required page
    
    if(process.client){
        if (isLoggedIn.value) {
        // return navigateTo('/my-info');
        window.location.pathname = '/my-info'
    }}
})