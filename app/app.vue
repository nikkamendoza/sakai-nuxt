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
import StudentInfoV2 from './StudentInfoV2.vue';
import Calendar from './calendar.vue';

const currentPage = ref('students');
const selectedStudent = ref(null);
const studentTab = ref('personal');

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

function handleStudentSelect(student) {
  selectedStudent.value = student;
  studentTab.value = 'personal';
}

function handleBackToList() {
  selectedStudent.value = null;
}

function handleStudentTabChange(tab) {
  studentTab.value = tab;
}
</script>

<template>
  <div class="flex h-screen">
    <Sidebar @navigate="(page) => currentPage = page" />
    <div class="flex-1 flex flex-col overflow-auto">
  <Header :currentPage="currentPage" :selectedStudent="selectedStudent" :studentTab="studentTab" />
      <div class="flex-1 overflow-auto">
        <template v-if="currentPage === 'students'">
          <StudentInfoV2
            v-if="selectedStudent"
            :student="selectedStudent"
            :activeTab="studentTab"
            @tab-change="handleStudentTabChange"
            @back="handleBackToList"
          />
          <Students v-else @student-select="handleStudentSelect" />
        </template>
        <template v-else>
          <component :is="pageComponents[currentPage]" />
        </template>
      </div>
    </div>
  </div>
</template>
