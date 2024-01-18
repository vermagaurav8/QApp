<script>
import { TabulatorFull as Tabulator } from 'tabulator-tables'; //import Tabulator library

export default {
    name: 'TabuLator',
    data() {
        return {
            tabulator: null, //variable to hold your table
            tableData: [
                { id: 1, name: 'John Doe', age: 30 },
                { id: 2, name: 'Jane Doe', age: 25 },
            ], //data for table to display
        }
    },
    mounted() {
        //instantiate Tabulator when element is mounted
        this.tabulator = new Tabulator(this.$refs.table, {
            data: this.tableData, //link data to table
            reactiveData: true, //enable data reactivity
            columns: [
                { title: 'ID', field: 'id' },
                { title: 'Name', field: 'name' },
                { title: 'Age', field: 'age' },
            ], //define table columns
        });
    }
}
</script>

<template>
    <div ref="table"></div>
</template>

