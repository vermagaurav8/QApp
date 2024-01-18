<!-- Navbar.vue Component -->

<template>
    <q-layout>
        <!-- Black shade overlay -->
        <div v-if="drawerModel" class="overlay" @click="closeDrawer"></div>

        <q-header elevated >
            <q-toolbar> 
                <q-btn dense flat round icon="menu" color="white" @click="toggleDrawer"
                    aria-label="Toggle navigation drawer" />

                <q-toolbar-title >
                    QueDash
                </q-toolbar-title>

                <q-space />

                <q-btn color="white" text-color="black" label="Sign Out" @click="signOut" />

                <q-menu v-if="userMenuVisible" v-model="userMenuVisible" anchor="top right">
                    <q-list>
                        <q-item clickable @click="signOut" v-close-popup>
                            <q-item-section>
                                <q-item-label>Sign Out</q-item-label>
                            </q-item-section>
                        </q-item>
                        <q-item clickable v-close-popup>
                            <q-item-section>
                                <q-btn flat round dense icon="" />
                            </q-item-section>
                        </q-item>
                    </q-list>
                </q-menu>
            </q-toolbar>
        </q-header>

        <!-- Sidebar -->
        <q-drawer v-model="drawerModel" side="left" show-if-above>
            <q-list>
                <q-item clickable @click="navigateToPage('/dashboard')" v-close-popup>
                    <q-item-section>
                        <q-item-label>Dashboard</q-item-label>
                    </q-item-section>
                </q-item>
                <!-- Add more sidebar items as needed -->
            </q-list>
        </q-drawer>
    </q-layout>
</template>
  
  
<script>
import { ref, defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'nav-bar',
    setup() {
        const router = useRouter();

        const drawerModel = ref(false);
        const userMenuVisible = ref(false);

        const toggleDrawer = () => {
            drawerModel.value = !drawerModel.value;
        };

        const closeDrawer = () => {
            drawerModel.value = false;
        };

        const signOut = () => {
            router.push('/');
        };

        const navigateToPage = (route) => {
            router.push(route);
            closeDrawer(); // Close the drawer when an item is clicked
        };

        return {
            drawerModel,
            userMenuVisible,
            toggleDrawer,
            closeDrawer,
            signOut,
            navigateToPage,
        };
    },
});
</script>
  
<style scoped lang="scss">
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        /* Black overlay */
        z-index: 10;
    }
    
</style>