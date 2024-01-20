<template>
  <div class="q-pa-lg bg-color">
    <TopSection />
    <div class="row q-col-gutter-md">

      <div class="col-12 col-sm-8">
        <SaleChart />
      </div>

      <div class="col-12 col-sm-4">
        <SaleStatusChart />
      </div>

      <div class="col-12 col-sm-6 col-md-4">
        <ConversionRate />
      </div>

      <div class="col-12 col-sm-6 col-md-4">
        <ProjectTrack />
      </div>

      <div class="col-12 col-sm-6 col-md-4">
        <TodoList />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import TopSection from '../components/Home/TopSection.vue';
import SaleChart from '../components/Home/SaleChart.vue';
import SaleStatusChart from 'src/components/Home/SaleStatusChart.vue';
import ConversionRate from '../components/Home/ConversionRate.vue';
import ProjectTrack from 'src/components/Home/ProjectTrack.vue';
import TodoList from 'src/components/Home/TodoList.vue';

export default defineComponent({
  name: 'home-component',
  setup() {
    return {};
  },
  components: {
    TopSection,
    SaleChart,
    SaleStatusChart,
    ConversionRate,
    ProjectTrack,
    TodoList
  }
})
</script>

<style scoped lang="scss"></style>
