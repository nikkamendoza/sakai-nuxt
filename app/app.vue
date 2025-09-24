<script setup>
import { ref } from 'vue';
import Sidebar from './sidebar.vue';
import Header from './header.vue';
import Dashboard from './dashboard.vue';
import MySchool from './myschool.vue';
import Locations from './locations.vue';
import Rooms from './rooms.vue';
import Classes from './classes.vue';
import Students from './students.vue';
import Staffs from './staffs.vue';
import ContactsBook from './contactsbook.vue';
import Calendar from './calendar.vue';

const currentPage = ref('students');
const sidebarCollapsed = ref(false);

const pageComponents = {
  dashboard: Dashboard,
  myschool: MySchool,
  locations: Locations,
  rooms: Rooms,
  classes: Classes,
  students: Students,
  staffs: Staffs,
  contactsbook: ContactsBook,
  calendar: Calendar,
};
</script>

<template>
  <div class="flex h-screen">
    <Sidebar v-show="!sidebarCollapsed" @navigate="(page) => currentPage = page" />
    <div class="flex-1 flex flex-col overflow-auto">
      <Header @toggleSidebar="() => sidebarCollapsed.value = !sidebarCollapsed.value" />
      <div class="flex-1 overflow-auto">
        <component :is="pageComponents[currentPage]" />
      </div>
    </div>
  </div>
</template>
