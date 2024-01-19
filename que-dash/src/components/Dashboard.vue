<!-- Navbar.vue Component -->

<template>
    <q-layout view="lHh Lpr lFf" class="navbar-wrapper">
        <q-header class="bg-color" :class="{ 'bg-dark': darkMode}">
            <q-toolbar class="nav-toolbar">
                <q-btn dense flat round icon="menu" @click="toggleDrawer" aria-label="Toggle navigation drawer" />

                <q-toolbar-title class="toolbar-title" >
                    s3India
                </q-toolbar-title>

                <!-- For Space -->
                <q-space />

                <q-btn dense flat round icon="dark_mode" class="dark-mode" @click="ToggleDarkMode"/>

                <!-- LANGUAGE DROPDOWN -->
                <q-btn-dropdown class="dropdown" label="Eng" dropdown-icon="arrow_drop_down" no-caps>
                    <q-list class="bg-color">
                        <q-item clickable v-close-popup >
                            <q-item-section>
                                <q-item-label>Eng-US</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-close-popup >
                            <q-item-section>
                                <q-item-label>Hindi</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-close-popup>
                            <q-item-section>
                                <q-item-label>German</q-item-label>
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-btn-dropdown>

                <!-- ADMIN DROPDOWN -->
                <q-btn-dropdown class="dropdown" no-caps>
                    <template v-slot:label>
                        <div class="row items-center no-wrap">
                            <q-avatar class="avatar">
                                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                            </q-avatar>
                            <div class="text-center">
                                admin
                            </div>
                        </div>
                    </template>

                    <div class="row no-wrap q-pa-md bg-color">
                        <div class="column">
                            <div class="text-h6 q-mb-md">Settings</div>
                            <q-toggle v-model="mobileData" label="Use Mobile Data" />
                            <q-toggle v-model="bluetooth" label="Bluetooth" />
                        </div>

                        <q-separator vertical inset class="q-mx-lg" />

                        <div class="column items-center">
                            <q-avatar size="72px">
                                <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                            </q-avatar>

                            <div class="text-subtitle1 q-mt-md q-mb-xs">Admin</div>

                            <q-btn color="negative" label="Logout" push size="sm" @click="signOut" v-close-popup />
                        </div>
                    </div>
                </q-btn-dropdown>
            </q-toolbar>
        </q-header>

        <!-- Sidebar -->
        <q-drawer v-model="drawerModel" side="left" show-if-above>
            <q-list>
                <!-- HOME -->
                <q-item clickable @click="navigateToPage('dashboard')" v-close-popup>
                    <q-item-section>
                        <q-item-label>Home</q-item-label>
                    </q-item-section>
                </q-item>

                <!-- TABULATOR -->
                <q-item clickable @click="navigateToPage('tabulator')" v-close-popup>
                    <q-item-section>
                        <q-item-label>Tabulator</q-item-label>
                    </q-item-section>
                </q-item>

                <!-- PROFIILE -->
                <q-item clickable @click="navigateToPage('profile')" v-close-popup>
                    <q-item-section>
                        <q-item-label>Profile</q-item-label>
                    </q-item-section>
                </q-item>

                <!-- COPONENTS DROPDOWN MODAL -->
                <q-item clickable @click="navigateToPage('tabulator')" v-close-popup>
                    <q-item-section>
                        <q-item-label>Components Dropdown</q-item-label>
                    </q-item-section>
                </q-item>

                <!-- EXCEPTION DROPDOWN -->
                <q-item clickable @click="navigateToPage('tabulator')" v-close-popup>
                    <q-item-section>
                        <q-item-label>Exception Dropdown</q-item-label>
                    </q-item-section>
                </q-item>

                <!-- Settings  -->
                <q-item clickable @click="navigateToPage('settings')" v-close-popup>
                    <q-item-section>
                        <q-item-label>Settingd</q-item-label>
                    </q-item-section>
                </q-item>
                <!-- Add more sidebar items as needed -->
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>
  
  
<script>
import { ref, defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'dashboard-component',
    setup() {
        const router = useRouter();
        const drawerModel = ref(false);
        const userMenuVisible = ref(true);
        const darkMode = ref(false);

        const toggleDrawer = () => {
            drawerModel.value = !drawerModel.value;
        };

        const signOut = () => {
            router.push('/');
        };

        const navigateToPage = (route) => {
            router.push(route);
        };

        const ToggleDarkMode = () => {
            darkMode.value = !darkMode.value;
        }

        return {
            drawerModel,
            userMenuVisible,
            toggleDrawer,
            mobileData: ref(false),
            bluetooth: ref(false),
            signOut,
            navigateToPage,
            ToggleDarkMode,
            darkMode
        };
    },
});
</script>
  
<style scoped lang="scss">
.avatar {
    width: 30px;
    height: 30px;
    margin-right: 5px;
}

.dark-mode {
    margin-right: 4px;
}

.navbar {
    background: $bg-app;
}

.nav-toolbar {
    color: $dark;
}

.dropdown::before {
    box-shadow: none;
    // border: 1px solid;
    border-radius: 5px;

}

.toolbar-title {
    font-weight: 900;
}

</style>