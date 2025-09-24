
<template>
  <aside class="sidebar bg-gradient-to-b from-blue-500 to-blue-700 text-white w-64 h-screen flex flex-col p-4 shadow-lg">
    <div class="flex flex-col items-center mb-8">
      <div class="bg-black rounded-lg w-12 h-12 flex items-center justify-center text-xl font-bold mb-2">T</div>
      <div class="font-semibold text-lg">Test School</div>
    </div>
    <div v-for="section in ['FAVORITES','PREMISES','EDUCANDS','ASSOCIATES','APPS']" :key="section" class="sidebar-section mb-4">
      <div class="text-xs font-semibold text-blue-200 mb-2">{{ section }}</div>
      <div v-for="item in menuItems.filter(i => i.section === section)" :key="item.page"
        class="flex items-center gap-2 py-2 cursor-pointer rounded"
        :class="selectedPage === item.page ? 'bg-blue-600' : 'hover:bg-blue-600'"
        @click="handleNavigate(item.page)"
      >
        <i :class="item.icon"></i>
        <span>{{ item.label }}</span>
      </div>
    </div>
    <div class="mt-auto text-xs text-blue-200 text-center pt-8">© EduTrack-2024</div>
  </aside>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
const emit = defineEmits(['navigate']);
const menuItems = [
  { label: 'Dashboard', icon: 'pi pi-home', page: 'dashboard', section: 'FAVORITES' },
  { label: 'My School', icon: 'pi pi-building', page: 'myschool', section: 'PREMISES' },
  { label: 'Locations', icon: 'pi pi-map-marker', page: 'locations', section: 'PREMISES' },
  { label: 'Rooms', icon: 'pi pi-door', page: 'rooms', section: 'PREMISES' },
  { label: 'Classes', icon: 'pi pi-users', page: 'classes', section: 'EDUCANDS' },
  { label: 'Students', icon: 'pi pi-id-card', page: 'students', section: 'EDUCANDS' },
  { label: 'Staffs', icon: 'pi pi-user', page: 'staffs', section: 'ASSOCIATES' },
  { label: 'Contacts Book', icon: 'pi pi-book', page: 'contactsbook', section: 'ASSOCIATES' },
  { label: 'Calendar', icon: 'pi pi-calendar', page: 'calendar', section: 'APPS' },
];
const selectedPage = ref('students');
function handleNavigate(page) {
  selectedPage.value = page;
  emit('navigate', page);
}
</script>

<style scoped>
.sidebar {
  min-width: 16rem;
  max-width: 16rem;
}
</style>
