<script lang="ts" setup>
defineOptions({ name: 'WatchSliderCardSkeleton' })
</script>

<template>
  <div
    role="status"
    class="w-full mx-auto lg:w-[620px] h-[900px] mt-[100px] bg-black rounded-[5px]"
  >
    <div
      role="status"
      class="w-full h-full p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
    >
      <div
        class="flex items-center justify-center h-[50%] bg-gray-300 rounded dark:bg-gray-700 mb-[50px]"
      >
        <svg
          class="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path
            d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"
          />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>

      <div class="h-4 w-[100px] mx-auto bg-gray-200 rounded-full dark:bg-gray-700 mb-[50px]"></div>
      <div class="h-8 w-[200px] mx-auto bg-gray-200 rounded-full dark:bg-gray-700 mb-[50px]"></div>
      <div class="h-4 w-[100px] mx-auto bg-gray-200 rounded-full dark:bg-gray-700 mb-[50px]"></div>
      <div class="h-4 w-[250px] mx-auto bg-gray-200 rounded-full dark:bg-gray-700 mb-[50px]"></div>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
</template>
