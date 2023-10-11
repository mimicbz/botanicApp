<template>
    <h1>Mon profil</h1>
    <v-card class="mx-auto pa-4" max-width="434" rounded="0">
        <v-avatar color="grey" size="150" rounded="0">
            <v-img cover :src="profileDatas.picture"></v-img>
        </v-avatar>
        <v-list-item class="text-white" :title="profileDatas.nickname" :subtitle="profileDatas.email"></v-list-item>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                profileDatas: {
                    "nickname": "myriam",
                    "name": "myriam@ctoutvert.com",
                    "picture": "https://s.gravatar.com/avatar/ba29ab7b29f8db44ac1de86fad679114?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmy.png",
                    "updated_at": "2023-10-10T07:37:03.947Z",
                    "email": "myriam@ctoutvert.com",
                    "email_verified": false,
                    "sub": "auth0|6524fed0c570e73e32f39f2a"
                }
            }
        }
    }
</script>
