import { useRouter } from "vue-router";

export function authGuard(to, from, next) {
    const auth0 = useAuth0();

    const isAuthenticated = auth0.isAuthenticated;
    if (isAuthenticated) {
        next();
    } else {
        next('/');
    }

}