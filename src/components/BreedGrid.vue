<template>
  <div>
    <h1>Dog Breeds</h1>
    <DataTable
      :value="breeds"
      :paginator="true"
      :rows="pageSize"
      :totalRecords="totalItems"
      :lazy="true"
      @page="onPage"
    >
      <Column field="name" header="Name" />
      <Column field="description" header="Description" />
      <Column field="lifeSpanMin" header="Life Span (Min)" />
      <Column field="lifeSpanMax" header="Life Span (Max)" />
      <Column field="maleWeightMin" header="Male Weight (Min)" />
      <Column field="maleWeightMax" header="Male Weight (Max)" />
      <Column field="femaleWeightMin" header="Female Weight (Min)" />
      <Column field="femaleWeightMax" header="Female Weight (Max)" />
      <Column
        field="hypoallergenic"
        header="Hypoallergenic"
        :body="hypoallergenicTemplate"
      />
    </DataTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { fetchPaginatedBreeds, Breed } from '../services/api';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default defineComponent({
  name: 'BreedGrid',
  components: { DataTable, Column },
  setup() {
    const breeds = ref<Breed[]>([]);
    const totalItems = ref(0);
    const pageSize = ref(5);
    const pageNumber = ref(1);

    const loadBreeds = async () => {
      const response = await fetchPaginatedBreeds(pageNumber.value, pageSize.value);
      breeds.value = response.items;
      totalItems.value = response.totalItems;
    };

    const onPage = (event: any) => {
      pageNumber.value = event.page + 1;
      loadBreeds();
    };

    // Template for boolean (hypoallergenic) field
    const hypoallergenicTemplate = (rowData: Breed) => {
      return rowData.hypoallergenic ? 'Yes' : 'No';
    };

    loadBreeds();

    return { breeds, totalItems, pageSize, onPage, hypoallergenicTemplate };
  },
});
</script>

<style scoped>
h1 {
  margin-bottom: 1rem;
}
</style>