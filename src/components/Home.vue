<template>
<div class="flex flex-col justify-center min-h-screen py-10 sm:px-10 md:px-20">
    <div class="flex flex-col w-full mb-16 text-center md:text-left">
        <h1 class="mb-2 text-5xl font-medium text-gray-200 font-display">
            Spacestagram
        </h1>
        <p class="text-gray-400 text-md">
            Brought to you by NASA's Astronomy Photo of the Data (APOD) API
        </p>
    </div>

    <div class="pb-2 mb-8 text-center border-b-4 border-blue-800 max-w-min md:text-left">
        <h2 class="text-xl font-medium text-gray-200 font-display">
            Today
        </h2>
    </div>

    <div class="flex flex-col w-full gap-10 md:flex-row">
        <div class="w-full md:w-5/12">
            <Card
                class="w-full h-96"
                :title="data.title"
                :date="data.date"
                :src="data.src"
                :alt="data.title"
            />
        </div>
        <p class="w-full leading-loose text-center text-gray-400 md:text-left md:w-7/12">
            {{ data.description }}
        </p>
    </div>
</div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import { getApodData } from '../../src/requests'

import Card from './Card.vue'

export default defineComponent({
    name: 'Home',
    components: {
        Card
    },
    setup() {
        const apodData = ref({
            title: '',
            date: '',
            description: '',
            src: '',
            alt: ''
        })

        onMounted(async () => {
            const data = await getApodData()
            apodData.value = {
                title: data.title,
                date: data.date,
                description: data.explanation,
                src: data.url,
                alt: data.title
            }
        })

        return {
            data: apodData
        }
    },
})
</script>
