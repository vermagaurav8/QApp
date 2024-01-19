<!-- Navbar and Sidebar Component -->

<template>
    <q-layout view="lHh Lpr lFf" class="navbar-wrapper">
        <!-- Navbar -->
        <q-header class="bg-color" :class="{ 'bg-dark': darkMode }">
            <q-toolbar class="nav-toolbar">
                <q-btn dense flat round icon="menu" @click="toggleDrawer" aria-label="Toggle navigation drawer" />

                <q-toolbar-title class="toolbar-title">
                    s3India
                </q-toolbar-title>

                <!-- For Space -->
                <q-space />

                <q-btn dense flat round icon="dark_mode" class="dark-mode" @click="ToggleDarkMode" />

                <!-- LANGUAGE DROPDOWN -->
                <q-btn-dropdown class="dropdown" label="Eng" dropdown-icon="arrow_drop_down" no-caps>
                    <q-list class="bg-color">
                        <q-item clickable v-close-popup>
                            <q-item-section>
                                <q-item-label>English</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-close-popup>
                            <q-item-section>
                                <q-item-label>हिंदी</q-item-label>
                            </q-item-section>
                        </q-item>

                        <q-item clickable v-close-popup>
                            <q-item-section>
                                <q-item-label>Deutsch</q-item-label>
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
        <q-drawer v-model="drawerModel" side="left" show-if-above bordered :width='220' :breakpoint="400">

            <q-img class="sidebar-image" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
                <div class="absolute-bottom bg-transparent">
                    <q-avatar size="56px" class="q-mb-sm">
                        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                    </q-avatar>
                    <div class="text-weight-bold">Administrator</div>
                    <div>@adminS3india</div>
                </div>
            </q-img>

            <q-list>
                <!-- HOME -->
                <q-item class="sidebar-item" clickable @click="navigateToPage('dashboard')" v-close-popup>
                    <q-item-section>
                        <q-item-label class="sidebar-label">
                            <q-icon class="sidebar-icon" name="home" size="30px" />
                            Home
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <!-- TABULATOR -->
                <q-item class="sidebar-item" clickable @click="navigateToPage('tabulator')" v-close-popup>
                    <q-item-section>
                        <q-item-label class="sidebar-label">
                            <q-icon class="sidebar-icon" name="table_view" size="30px" />
                            Tabulator
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <!-- PROFILE -->
                <q-item class="sidebar-item" clickable @click="navigateToPage('profile')" v-close-popup>
                    <q-item-section>
                        <q-item-label class="sidebar-label">
                            <q-icon class="sidebar-icon" name="person" size="30px" />
                            Profile
                        </q-item-label>
                    </q-item-section>
                </q-item>

                <!-- COMPONENTS DROPDOWN MODAL -->
                <!-- Include only if it serves a purpose and provide a meaningful icon -->
                <!-- <q-item class="sidebar-item" clickable @click="navigateToPage('components')" v-close-popup>
            <q-item-section>
                <q-item-label class="sidebar-label">
                    <q-icon class="sidebar-icon" name="extension" size="30px"/>
                    Components
                </q-item-label>
            </q-item-section>
        </q-item> -->

                <!-- EXCEPTION DROPDOWN -->
                <!-- Include only if it serves a purpose and provide a meaningful icon -->
                <!-- <q-item class="sidebar-item" clickable @click="navigateToPage('exception')" v-close-popup>
            <q-item-section>
                <q-item-label class="sidebar-label">
                    <q-icon class="sidebar-icon" name="warning" size="30px"/>
                    Exception
                </q-item-label>
            </q-item-section>
        </q-item> -->

                <!-- SETTINGS -->
                <q-item class="sidebar-item" clickable @click="navigateToPage('settings')" v-close-popup>
                    <q-item-section>
                        <q-item-label class="sidebar-label">
                            <q-icon class="sidebar-icon settings-item" name="settings" size="30px" />
                            Settings
                        </q-item-label>
                    </q-item-section>
                </q-item>
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

.bar-item-title {
    font-size: 15px;
    margin-left: 5px;
}


.sidebar-item {
    display: flex;
    align-items: center;
    padding: 12px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.sidebar-item:hover {
    background-color: #f0f0f0;
    /* Add a subtle hover effect */
}

.sidebar-icon {
    margin-right: 12px;
}

.sidebar-label {
    font-size: 17px;
    font-weight: 600;
}

.sidebar-image {
    position: relative;
}

</style>