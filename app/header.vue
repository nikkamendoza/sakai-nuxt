<template>
  <header class="flex items-center justify-between bg-white px-6 h-16 w-full border-b border-gray-200">
    <div class="flex items-center gap-4">
      <button class="text-gray-400 hover:text-gray-600">
        <i class="pi pi-chevron-left text-xl"></i>
      </button>
      <div class="border-l border-gray-300 h-8 mx-2"></div>
      <div class="flex items-center gap-2 text-gray-500 text-sm">
        <i class="pi pi-home"></i>
        <span>/ STUDENTS</span>
      </div>
    </div>
    <div class="flex items-center gap-0">
      <span class="text-gray-500 text-sm px-4">September 17 2025 | 10:42 PM</span>
      <div class="border-l border-gray-300 h-8 mx-2"></div>
      <div class="flex items-center px-4">
        <i class="pi pi-search text-xl text-gray-400"></i>
      </div>
      <div class="border-l border-gray-300 h-8 mx-2"></div>
      <div class="flex items-center px-4">
  <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" class="w-8 h-8 object-cover border rounded-md" />
        <span class="text-gray-700 text-sm font-medium ml-2">Amelie Stone</span>
      </div>
    </div>
  </header>
</template>

<script setup>
// No logic needed for static header
</script>

<style scoped>
header {
  min-height: 4rem;
  max-height: 4rem;
}
</style>
