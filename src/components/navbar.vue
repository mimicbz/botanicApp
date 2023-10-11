<template>
    <v-app-bar color="primary" prominent>
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Mon Jardin Botanique</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn variant="text" icon="mdi-account-circle" @click="$router.push('profile')"></v-btn>
        <v-btn color="white" v-if="!isAuthenticated" @click.prevent="login">Se connecter</v-btn>
        <v-btn color="white" v-else @click.prevent="logout">Déconnexion</v-btn>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" location="left" temporary>
        <v-list>
            <v-list-item @click="$router.push('/')">Home</v-list-item>
            <v-list-item @click="$router.push('/profile')">Mon profil</v-list-item>
            <v-list-item @click="$router.push('/search')">Liste des plantes</v-list-item>
            <v-list-item @click="$router.push('/favorites')">Mes favoris</v-list-item>
            <v-list-item v-if="!isAuthenticated" @click="$router.push('auth')">Se connecter</v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>

    import {useAuth0} from '@auth0/auth0-vue';

    export default {

        name: "Navbar",
        data() {
            const auth0 = useAuth0();

            return {
                drawer: false,
                isAuthenticated: auth0.isAuthenticated,
                isLoading: auth0.isLoading,
                user: auth0.user,
                login() {
                    auth0.loginWithRedirect();
                },
                logout() {
                    auth0.logout({
                        logoutParams: {
                            returnTo: window.location.origin
                        }
                    });
                },

            }
        }
    }
</script>