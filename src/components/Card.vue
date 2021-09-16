<template>
  <div class="relative flex flex-col items-start justify-end p-8 overflow-hidden transition duration-300 transform rounded-xl w-72 h-96 hover:scale-105">
    <button
      class="absolute w-6 h-6 text-white rounded-full top-6 right-6"
      @click="toggleLike"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="hover:fill-current"
        :class="filled"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    </button>
    <h3 class="mb-2 font-semibold text-left text-white font-display">
      {{ title }}
    </h3>
    <small class="font-medium text-left text-white font-display">{{ date }}</small>
    <img
      class="absolute top-0 left-0 flex-shrink-0 object-cover w-full h-full -z-10"
      :src="src"
      :alt="alt"
    >
  </div>
</template>

<script>
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
    name: 'Card',
    props: {
        date: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        src: {
            type: String,
            required: true
        },
        alt: {
            type: String,
            required: true
        }
    },
    setup() {
        const liked = ref(false)

        const toggleLike = () => {
            liked.value = !liked.value
        }

        const filled = computed(() => {
            return liked.value ? 'fill-current' : ''
        })

        return {
            filled,
            toggleLike,
        }
    },
})
</script>