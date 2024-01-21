<template>
    <div class="q-pa-md bg-color">
    <div>
      <!-- Your Tabulator container -->
      <div ref="exampleTable"></div>
        
      <br /> <br /> <br />
      <!-- Download buttons -->
      <q-btn @click="download('csv', 'data.csv')" color="primary" label="Download CSV"  class="btn"/>
      <q-btn @click="download('json', 'data.json')" color="accent" label="Download JSON"  class="btn"/>
      <q-btn @click="download('xlsx', 'data.xlsx', { sheetName: 'My Data' })" color="primary" label="Download XLSX" class="btn"/>
      <q-btn @click="download('pdf', 'data.pdf', { orientation: 'portrait', title: 'Example Report' })" color="accent" label="Download PDF" class="btn"/>
      <q-btn @click="download('html', 'data.html', { style: true })" color="primary" label="Download HTML" class="btn"/>
    </div>
</div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { TabulatorFull as Tabulator } from 'tabulator-tables';
  import  tabulatorData  from '../utils/tab-data';
  
  export default {
    name: 'TabulatorExample',
    setup() {
      const exampleTable = ref(null);
      let tableInstance;
  
      onMounted(() => {
        // Build Tabulator when the component is mounted
        tableInstance = new Tabulator(exampleTable.value, {
          height: '311px',
          data: tabulatorData,
          columns: [
            { title: 'Name', field: 'name', width: 200 },
            { title: 'Progress', field: 'progress', width: 100, sorter: 'number' },
            { title: 'Gender', field: 'gender' },
            { title: 'Rating', field: 'rating', width: 80 },
            { title: 'Favourite Color', field: 'col' },
            { title: 'Date Of Birth', field: 'dob', hozAlign: 'center', sorter: 'date' },
            { title: 'Driver', field: 'car', hozAlign: 'center', formatter: 'tickCross' },
          ],
          layout:"fitColumns",
        });
      });
  
      const download = (type, filename, options) => {
        tableInstance.download(type, filename, options);
      };
  
      return {
        exampleTable,
        download,
      };
    },
  };
  </script>

<style scoped>
    .q-pa-md {
        height: 100vh;
    }

    .btn {
        margin-right: 15px;
    }

    .tabulator {
  /* Add your custom styles here */
  border: 1px solid #000;
  border-radius: 5px;
  overflow: auto;
  margin-bottom: 20px;
}
</style>
  