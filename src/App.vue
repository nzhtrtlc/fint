<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "App",
  setup() {
    const store = useStore();
    // comment

    return {
      message: store.getters.getMessage,
    };
  },
});
</script>

<template>
  <div
    class="flex h-screen antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light"
  >
    <aside
      class="flex-shrink-0 hidden w-64 bg-white border-r dark:border-primary-darker dark:bg-darker md:block"
    >
      <div class="flex flex-col h-full">
        <!-- Sidebar links -->
        <nav
          aria-label="Main"
          class="flex-1 px-2 py-4 space-y-2 overflow-y-hidden hover:overflow-y-auto"
        >
          <!-- Dashboards links -->
          <div x-data="{ isActive: true, open: true}">
            <!-- active & hover classes 'bg-primary-100 dark:bg-primary' -->
            <a
              href="#"
              class="flex items-center p-2 text-gray-500 transition-colors rounded-md dark:text-light hover:bg-primary-100 dark:hover:bg-primary bg-primary-100 dark:bg-primary"
              :class="{ 'bg-primary-100 dark:bg-primary': true || open }"
              role="button"
              aria-haspopup="true"
            >
              <span aria-hidden="true">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-sm"> Dashboards </span>
              <span class="ml-auto" aria-hidden="true">
                <!-- active class 'rotate-180' -->
                <svg
                  class="w-4 h-4 transition-transform transform rotate-180"
                  :class="{ 'rotate-180': open }"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </a>
            <div
              role="menu"
              x-show="open"
              class="mt-2 space-y-2 px-7"
              aria-label="Dashboards"
            >
              <!-- active & hover classes 'text-gray-700 dark:text-light' -->
              <!-- inActive classes 'text-gray-400 dark:text-gray-400' -->
              <a
                href="index.html"
                role="menuitem"
                class="block p-2 text-sm text-gray-700 transition-colors duration-200 rounded-md dark:text-light dark:hover:text-light hover:text-gray-700"
              >
                Default
              </a>
              <a
                href="#"
                role="menuitem"
                class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
              >
                Project Mangement (soon)
              </a>
              <a
                href="#"
                role="menuitem"
                class="block p-2 text-sm text-gray-400 transition-colors duration-200 rounded-md dark:hover:text-light hover:text-gray-700"
              >
                E-Commerce (soon)
              </a>
            </div>
          </div>
        </nav>

        <!-- Sidebar footer -->
        <div class="flex-shrink-0 px-2 py-4 space-y-2">
          <button
            type="button"
            class="flex items-center justify-center w-full px-4 py-2 text-sm text-white rounded-md bg-primary hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-dark focus:ring-offset-1 focus:ring-offset-white dark:focus:ring-offset-dark"
          >
            <span aria-hidden="true">
              <svg
                class="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                ></path>
              </svg>
            </span>
            <span>Customize</span>
          </button>
        </div>
      </div>
    </aside>
    <div class="flex-1 h-full overflow-x-hidden overflow-y-auto">
      <header class="relative bg-white dark:bg-darker">
        <div
          class="flex items-center justify-between p-2 border-b dark:border-primary-darker"
        >
        Welcome Mr.Osman
        </div>
      </header>
    </div>
  </div>
</template>

<style lang="scss"></style>
