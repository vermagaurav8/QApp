<template>
    <div class="card__dashboard">
        <div class="flex items-start">
            <div class="column">
                <div class="text-h6">To Do List</div>
            </div>

            <q-space />

            <q-btn round flat size="sm" icon="fa-solid fa-ellipsis-vertical" color="secondary"> </q-btn>
        </div>

        <div class="row wrap items-start justify-between q-mt-lg q-col-gutter-md">
            <div class="col-auto">
                <div class="text-body1">Call with Dave</div>
                <div class="text-caption text-muted">09:30 AM</div>
            </div>
            <div>
                <q-checkbox v-model="checked1" />
            </div>
        </div>

        <div class="row wrap items-start justify-between q-mt-lg q-col-gutter-md">
            <div class="col-auto">
                <div class="text-body1">Brunch Meeting</div>
                <div class="text-caption text-muted">11:00 AM</div>
            </div>
            <div>
                <q-checkbox v-model="checked2" />
            </div>
        </div>

        <div class="row wrap items-start justify-between q-mt-lg q-col-gutter-md">
            <div class="col-auto">
                <div class="text-body1">Dashboard Launch</div>
                <div class="text-caption text-muted">02:00 PM</div>
            </div>
            <div>
                <q-checkbox v-model="checked3" />
            </div>
        </div>

        <div class="row wrap items-start justify-between q-mt-lg q-col-gutter-md">
            <div class="col-auto">
                <div class="text-body1">Winter Hackaton</div>
                <div class="text-caption text-muted">10:30 AM</div>
            </div>
            <div>
                <q-checkbox v-model="checked4" />
            </div>
        </div>
    </div>
</template>
  
<script>
import { defineComponent, ref } from "vue";


export default defineComponent({
    name: 'todo-list',
    setup() {
        const checked1 = ref(true);
        const checked2 = ref(false);
        const checked3 = ref(false);
        const checked4 = ref(false);

        return {
            checked1, checked2, checked3, checked4
        }
    }
})

</script>
  
<style scoped></style>