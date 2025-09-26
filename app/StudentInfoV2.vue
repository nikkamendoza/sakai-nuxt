<template>
  <div class="min-h-screen bg-gray-50">
    <div class="px-12 pt-12">
      <div class="flex items-center justify-between mb-4">
        <h1 class="text-2xl font-semibold text-gray-700">{{ tabTitles[activeTab] }}</h1>
        <div class="flex gap-2">
          <Button icon="pi pi-print" class="p-button-outlined p-button-sm header-btn-print" />
          <Button icon="pi pi-trash" class="p-button-outlined p-button-danger p-button-sm header-btn-delete" />
        </div>
      </div>
      <nav class="flex items-center border-b border-gray-200 mb-2 text-sm">
        <div class="flex gap-2">
          <Button icon="pi pi-user" label="Personal Info" class="p-button-text tab-btn" :class="{ 'tab-active': activeTab === 'personal' }" style="border-radius:0;" @click="changeTab('personal')" />
          <Button icon="pi pi-map-marker" label="Services Recommended" class="p-button-text tab-btn" :class="{ 'tab-active': activeTab === 'services' }" style="border-radius:0;" @click="changeTab('services')" />
          <Button icon="pi pi-file" label="Documents" class="p-button-text tab-btn" :class="{ 'tab-active': activeTab === 'documents' }" style="border-radius:0;" @click="changeTab('documents')" />
          <Button icon="pi pi-comment" label="Notes" class="p-button-text tab-btn" :class="{ 'tab-active': activeTab === 'notes' }" style="border-radius:0;" @click="changeTab('notes')" />
          <Button icon="pi pi-users" label="Staffs" class="p-button-text tab-btn" :class="{ 'tab-active': activeTab === 'staffs' }" style="border-radius:0;" @click="changeTab('staffs')" />
          <Button icon="pi pi-calendar" label="Schedules" class="p-button-text tab-btn" :class="{ 'tab-active': activeTab === 'schedules' }" style="border-radius:0;" @click="changeTab('schedules')" />
        </div>
      </nav>
      <div v-if="activeTab === 'personal'" class="mb-3 flex justify-end">
        <Button v-if="!editMode" icon="pi pi-pencil" label="Edit" class="p-button-outlined p-button-sm header-btn-edit" @click="startEdit" />
        <div v-else class="flex gap-2">
          <Button label="Save" class="p-button-success p-button-sm" @click="saveEdit" />
          <Button label="Cancel" class="p-button-secondary p-button-sm" @click="cancelEdit" />
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-8 px-12 pb-12">
      <aside v-if="activeTab === 'personal'" class="w-1/4 bg-white p-8 border border-gray-200 rounded-lg flex flex-col items-center">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" class="w-28 h-28 rounded-full mb-6 object-cover shadow" />
        <div class="w-full">
          <div class="sidebar-info-block">
            <div class="sidebar-label">First Name</div>
            <div class="sidebar-value">
              <template v-if="editMode">
                <InputText v-model="editData.firstName" class="w-full mb-1" />
              </template>
              <template v-else>
                {{ personalInfo.firstName }}
              </template>
            </div>
          </div>
          <div class="sidebar-info-block">
            <div class="sidebar-label">Last Name</div>
            <div class="sidebar-value">
              <template v-if="editMode">
                <InputText v-model="editData.lastName" class="w-full mb-1" />
              </template>
              <template v-else>
                {{ personalInfo.lastName }}
              </template>
            </div>
          </div>
          <div class="sidebar-info-block">
            <div class="sidebar-label">Date of Birth</div>
            <div class="sidebar-value">
              <template v-if="editMode">
                <InputText v-model="editData.dob" class="w-full mb-1" />
              </template>
              <template v-else>
                {{ personalInfo.dob }}
              </template>
            </div>
          </div>
          <div class="sidebar-info-block">
            <div class="sidebar-label">Medication</div>
            <div class="sidebar-value">
              <template v-if="editMode">
                <InputText v-model="editData.medication" class="w-full mb-1" />
              </template>
              <template v-else>
                {{ personalInfo.medication }}
              </template>
            </div>
          </div>
          <div class="sidebar-info-block">
            <div class="sidebar-label">Diagnosis</div>
            <div class="sidebar-value">
              <template v-if="editMode">
                <InputText v-model="editData.diagnosis" class="w-full mb-1" />
              </template>
              <template v-else>
                {{ personalInfo.diagnosis }}
              </template>
            </div>
          </div>
          <div class="sidebar-info-block">
            <div class="sidebar-label">Allergies</div>
            <div class="sidebar-value">
              <template v-if="editMode">
                <InputText v-model="editData.allergies" class="w-full mb-1" />
              </template>
              <template v-else>
                {{ personalInfo.allergies }}
              </template>
            </div>
          </div>
        </div>
      </aside>
      <main class="flex-1">
        <section class="space-y-6">
          <template v-if="activeTab === 'personal'">
            <div class="border border-gray-200 rounded-lg p-6 bg-white">
              <div class="flex items-center gap-2 font-semibold mb-4 text-lg"><i class="pi pi-user"></i> Student</div>
              <div class="grid grid-cols-3 gap-4 text-sm">
                <div class="info-block-v2">
                  <div class="info-label-v2">Status</div>
                  <div class="info-value-v2">Active</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Class</div>
                  <div class="info-value-v2">Class 1</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Location</div>
                  <div class="info-value-v2">Location</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Father Name</div>
                  <div class="info-value-v2">Pending</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Mother Name</div>
                  <div class="info-value-v2">Class 3</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Mother Maiden Name</div>
                  <div class="info-value-v2">Location C</div>
                </div>
              </div>
            </div>
            <div class="border border-gray-200 rounded-lg p-6 bg-white">
              <div class="flex items-center gap-2 font-semibold mb-4 text-lg"><i class="pi pi-phone"></i> Contact</div>
              <div class="grid grid-cols-3 gap-4 text-sm">
                <div class="info-block-v2">
                  <div class="info-label-v2">Status</div>
                  <div class="info-value-v2">Active</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Class</div>
                  <div class="info-value-v2">Class 1</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Location</div>
                  <div class="info-value-v2">Location</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Father Name</div>
                  <div class="info-value-v2">Pending</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Mother Name</div>
                  <div class="info-value-v2">Class 3</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Mother Maiden Name</div>
                  <div class="info-value-v2">Location C</div>
                </div>
              </div>
            </div>
            <div class="border border-gray-200 rounded-lg p-6 bg-white">
              <div class="flex items-center gap-2 font-semibold mb-4 text-lg"><i class="pi pi-home"></i> Address</div>
              <div class="grid grid-cols-3 gap-4 text-sm">
                <div class="info-block-v2">
                  <div class="info-label-v2">Status</div>
                  <div class="info-value-v2">Active</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Class</div>
                  <div class="info-value-v2">Class 1</div>
                </div>
                <div class="info-block-v2">
                  <div class="info-label-v2">Location</div>
                  <div class="info-value-v2">Location</div>
                </div>
              </div>
            </div>
          </template>
          <template v-else-if="activeTab === 'services'">
            <div class="border border-gray-200 rounded-lg p-6 bg-white text-gray-500 text-center">Services Recommended content...</div>
          </template>
          <template v-else-if="activeTab === 'documents'">
            <div class="border border-gray-200 rounded-lg p-6 bg-white text-gray-500 text-center">Documents content...</div>
          </template>
          <template v-else-if="activeTab === 'notes'">
            <div class="border border-gray-200 rounded-lg p-6 bg-white text-gray-500 text-center">Notes content...</div>
          </template>
          <template v-else-if="activeTab === 'staffs'">
            <div class="border border-gray-200 rounded-lg p-6 bg-white text-gray-500 text-center">Staffs content...</div>
          </template>
          <template v-else-if="activeTab === 'schedules'">
            <div class="border border-gray-200 rounded-lg p-6 bg-white text-gray-500 text-center">Schedules content...</div>
          </template>
        </section>
      </main>
    </div>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import 'primeicons/primeicons.css';


const props = defineProps({
  activeTab: { type: String, default: 'personal' },
});
const emit = defineEmits(['tab-change']);
const activeTab = ref(props.activeTab);

// Editable data state
const personalInfo = ref({
  firstName: 'John',
  lastName: 'Doe',
  dob: 'September 21,2025',
  medication: 'Tylenol',
  diagnosis: 'Bipolar',
  allergies: 'Seafood',
});
const editMode = ref(false);
const editData = ref({ ...personalInfo.value });

function startEdit() {
  editData.value = { ...personalInfo.value };
  editMode.value = true;
}
function saveEdit() {
  personalInfo.value = { ...editData.value };
  editMode.value = false;
}
function cancelEdit() {
  editMode.value = false;
}

const tabTitles = {
  personal: 'Personal Information',
  services: 'Services Recommended',
  documents: 'Documents',
  notes: 'Notes',
  staffs: 'Staffs',
  schedules: 'Schedules',
};

watch(() => props.activeTab, (val) => {
  activeTab.value = val;
});

function changeTab(tab) {
  activeTab.value = tab;
  emit('tab-change', tab);
}
</script>

<style scoped>
.input-edit {
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  width: 100%;
  background: #f9fafb;
  color: #374151;
}
</style>

<style scoped>
.sidebar-info-block {
  padding: 0.5rem 0 0.75rem 0;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 0.25rem;
}
.sidebar-info-block:last-child {
  border-bottom: none;
}
.sidebar-label {
  color: #6b7280;
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.25rem;
  text-align: left;
}
.sidebar-value {
  color: #374151;
  font-size: 1.08rem;
  margin-left: 1.5rem;
  margin-bottom: 0.1rem;
  margin-top: 0.5rem;
  font-weight: 400;
  text-align: left;
}
.tab-btn {
  border: none !important;
  border-bottom: 2px solid transparent !important;
  background: none !important;
  color: #6b7280 !important;
  font-weight: 500;
  margin-bottom: -2px;
}
.tab-active {
  color: #2563eb !important;
  border-bottom: 2px solid #2563eb !important;
  background: none !important;
}
.info-block-v2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}
.info-label-v2 {
  color: #6b7280;
  font-size: 0.95rem;
  font-weight: 500;
  margin-bottom: 0.15rem;
}
.info-value-v2 {
  color: #374151;
  font-size: 1.05rem;
  margin-left: 1.5rem;
  margin-bottom: 0.1rem;
  margin-top: 0.25rem;
  font-weight: 400;
  text-align: left;
}
.header-btn-edit {
  border-color: #60a5fa !important;
  color: #2563eb !important;
}
.header-btn-print {
  border-color: #d1d5db !important;
  color: #374151 !important;
}
.header-btn-delete {
  border-color: #fca5a5 !important;
  color: #dc2626 !important;
}
</style>
