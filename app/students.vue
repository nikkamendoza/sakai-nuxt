<script setup>
import OverlayPanel from "primevue/overlaypanel";
import MultiSelect from "primevue/multiselect";
import { ref as vueRef } from "vue";

const filterPanelRef = vueRef();
const filterLocation = vueRef(null);
const filterClass = vueRef([]);
const filterClassOptions = [
  { label: "John Doe", value: "John Doe" },
  { label: "Jane Smith", value: "Jane Smith" },
  { label: "Michael Johnson", value: "Michael Johnson" },
];
const filterStaff = vueRef(null);
const locationOptions = [
  { label: "Location", value: null },
  { label: "Cebu", value: "Cebu" },
  { label: "Manila", value: "Manila" },
  { label: "Davao", value: "Davao" },
];
const staffOptions = [
  { label: "Staff", value: null },
  { label: "Staff 1", value: "Staff 1" },
  { label: "Staff 2", value: "Staff 2" },
];
import Dropdown from "primevue/dropdown";
import "primeicons/primeicons.css";

const activeOptions = [
  { label: "All", value: null },
  { label: "Active", value: true },
  { label: "Inactive", value: false },
];
const activeStatus = ref(null);
import { ref, computed } from "vue";
import { defineEmits } from 'vue';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const students = ref([
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    dob: "1990-01-01",
    title: "Cebu",
    phone: "132",
    cell: "094534213",
    email: "johndoe@gmail.com",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    dob: "1992-02-02",
    title: "Manila",
    phone: "133",
    cell: "094534214",
    email: "janesmith@gmail.com",
  },
  {
    id: 3,
    firstName: "Alice",
    lastName: "Brown",
    dob: "1988-03-03",
    title: "Davao",
    phone: "134",
    cell: "094534215",
    email: "alicebrown@gmail.com",
  },
  {
    id: 4,
    firstName: "Bob",
    lastName: "Johnson",
    dob: "1995-04-04",
    title: "Cebu",
    phone: "135",
    cell: "094534216",
    email: "bobjohnson@gmail.com",
  },
  {
    id: 5,
    firstName: "Charlie",
    lastName: "Lee",
    dob: "1993-05-05",
    title: "Manila",
    phone: "136",
    cell: "094534217",
    email: "charlielee@gmail.com",
  },
  {
    id: 6,
    firstName: "Diana",
    lastName: "Garcia",
    dob: "1991-06-06",
    title: "Davao",
    phone: "137",
    cell: "094534218",
    email: "dianagarcia@gmail.com",
  },
  {
    id: 7,
    firstName: "Eve",
    lastName: "Martinez",
    dob: "1989-07-07",
    title: "Cebu",
    phone: "138",
    cell: "094534219",
    email: "evemartinez@gmail.com",
  },
  {
    id: 8,
    firstName: "Frank",
    lastName: "Wilson",
    dob: "1994-08-08",
    title: "Manila",
    phone: "139",
    cell: "094534220",
    email: "frankwilson@gmail.com",
  },
  {
    id: 9,
    firstName: "Grace",
    lastName: "Kim",
    dob: "1996-09-09",
    title: "Davao",
    phone: "140",
    cell: "094534221",
    email: "gracekim@gmail.com",
  },
  {
    id: 10,
    firstName: "Henry",
    lastName: "Lopez",
    dob: "1997-10-10",
    title: "Cebu",
    phone: "141",
    cell: "094534222",
    email: "henrylopez@gmail.com",
  },
  // ...existing code...
  ...Array.from({ length: 190 }, (_, i) => ({
    id: i + 11,
    firstName: "John",
    lastName: "Doe",
    dob: "1990-01-01",
    title: "Cebu",
    phone: "132",
    cell: "094534213",
    email: "johndoe@gmail.com",
  })),
]);

const search = ref("");
const perPage = ref(25);
const currentPage = ref(1);
const sortKey = ref("firstName");
const sortOrder = ref("asc");

const appliedFilters = vueRef({ location: null, class: [], staff: null });

const filteredStudents = computed(() => {
  let data = students.value;

  // Search filter
  if (search.value) {
    data = data.filter((s) =>
      Object.values(s).some((val) =>
        String(val).toLowerCase().includes(search.value.toLowerCase())
      )
    );
  }

  // Location filter
  if (appliedFilters.value.location) {
    data = data.filter((s) => s.title === appliedFilters.value.location);
  }
  // Class filter
  if (appliedFilters.value.class.length > 0) {
    data = data.filter((s) =>
      appliedFilters.value.class.includes(`${s.firstName} ${s.lastName}`)
    );
  }
  // Staff filter (dummy, since no staff in student data)
  if (appliedFilters.value.staff && appliedFilters.value.staff !== "Staff") {
    // Implement staff filter logic here if staff is part of student data
  }

  // Sorting
  data = [...data].sort((a, b) => {
    const valA = a[sortKey.value];
    const valB = b[sortKey.value];
    if (valA < valB) return sortOrder.value === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder.value === "asc" ? 1 : -1;
    return 0;
  });

  return data;
});

const totalPages = computed(() =>
  Math.ceil(filteredStudents.value.length / perPage.value)
);

const paginatedStudents = computed(() => {
  const start = (currentPage.value - 1) * perPage.value;
  return filteredStudents.value.slice(start, start + perPage.value);
});

function changeSort(key) {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === "asc" ? "desc" : "asc";
  } else {
    sortKey.value = key;
    sortOrder.value = "asc";
  }
}
const emit = defineEmits(['student-select']);

function goToStudentInfo(event) {
  emit('student-select', event.data);
}
</script>
<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold mb-4">Students</h1>
      <div class="flex gap-2">
        <Button label="Add" icon="pi pi-plus" class="p-button-primary" />
        <Button
          label="Bulk Update"
          icon="pi pi-pencil"
          class="p-button-outlined"
        />
        <Button icon="pi pi-upload" class="p-button-outlined" />
        <Button icon="pi pi-sign-out" class="p-button-outlined" />
      </div>
    </div>

    <div class="w-full flex items-center gap-2 mb-4 justify-between">
      <div class="flex items-center gap-2">
        <InputText v-model="search" placeholder="Search" class="w-40" />
        <Dropdown
          v-model="activeStatus"
          :options="activeOptions"
          optionLabel="label"
          placeholder="Active"
          class="w-32"
        />
        <Button
          label="Filter Items"
          icon="pi pi-filter"
          class="p-button-outlined"
          @click="(event) => filterPanelRef.toggle(event)"
        />
        <OverlayPanel ref="filterPanelRef">
          <div class="p-4 w-96">
            <div class="mb-4">
              <label class="block mb-2 font-semibold">Filter by</label>
              <Dropdown
                v-model="filterLocation"
                :options="locationOptions"
                optionLabel="label"
                placeholder="Location"
                class="w-full"
              />
            </div>
            <div class="mb-4">
              <MultiSelect
                v-model="filterClass"
                :options="filterClassOptions"
                optionLabel="label"
                placeholder="Class"
                class="w-full"
                filter
                display="chip"
              />
            </div>
            <div class="mb-4">
              <Dropdown
                v-model="filterStaff"
                :options="staffOptions"
                optionLabel="label"
                placeholder="Staff"
                class="w-full"
              />
            </div>
            <div class="flex justify-between mt-6">
              <Button
                label="Clear"
                class="p-button-outlined"
                @click="
                  filterLocation = null;
                  filterClass = [];
                  filterStaff = null;
                  appliedFilters.location = null;
                  appliedFilters.class = [];
                  appliedFilters.staff = null;
                  filterPanelRef.hide();
                "
              />
              <Button
                label="Apply"
                class="p-button-primary"
                @click="
                  appliedFilters.location = filterLocation;
                  appliedFilters.class = filterClass;
                  appliedFilters.staff = filterStaff;
                  filterPanelRef.hide();
                "
              />
            </div>
          </div>
        </OverlayPanel>
      </div>
      <Button label="Columns" icon="pi pi-columns" class="p-button-outlined" />
    </div>

    <div class="overflow-x-auto">
      <DataTable
        :value="filteredStudents"
        :paginator="true"
        :rows="perPage"
        :first="(currentPage - 1) * perPage"
        :totalRecords="filteredStudents.length"
        :rowsPerPageOptions="[10, 25, 50]"
        :currentPage="currentPage"
        @page="
          (e) => {
            currentPage = e.page + 1;
            perPage = e.rows;
          }
        "
        dataKey="id"
        class="w-full text-sm cursor-pointer"
        responsiveLayout="scroll"
        @row-click="goToStudentInfo"
      >
        <Column selectionMode="multiple" headerStyle="width: 3em" />
        <Column field="firstName" header="First Name" sortable />
        <Column field="lastName" header="Last Name" sortable />
        <Column field="dob" header="DOB" sortable />
        <Column field="title" header="Title" sortable />
        <Column field="phone" header="Phone" sortable />
        <Column field="cell" header="Cell" sortable />
        <Column field="email" header="Email" sortable />
      </DataTable>
    </div>

    <!-- Pagination handled by DataTable -->
  </div>
</template>
// ...existing code...
