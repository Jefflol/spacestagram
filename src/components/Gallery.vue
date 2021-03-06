<template>
    <div class="flex flex-col gap-4 py-10 sm:px-10 md:px-20">
        <div class="pb-2 mb-8 text-center border-b-4 border-red-800 max-w-min md:text-left whitespace-nowrap">
            <h2 class="text-xl font-medium text-gray-200">
                Previously
            </h2>
        </div>

        <div
            ref="scrollComponent"
            class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8 xl:grid-cols-4"
        >
            <Card
                v-for="data in dataList"
                :key="data.title"
                class="h-64 lg:h-80 xl:h-96"
                :title="data.title"
                :date="data.date"
                :src="data?.thumbnail_url || data.url"
                :alt="data.title"
            />
        </div>
    </div>
</template>

<script>
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import { getApodDataWithRange, debounce } from '../utils/requests.js'
import moment from 'moment'

import Card from './Card.vue'

export default defineComponent({
    name: 'Gallery',
    components: {
        Card
    },
    setup() {
        const scrollComponent = ref(null)

        const apodDataList = ref([])
        const apodInterval = 7
        const apodEndDate = ref(moment())
        const apodEnd = ref(null)
        const apodStart = ref(null)

        onMounted(async () => {
            loadMoreApod()
            window.addEventListener('scroll', debounce(handleScroll, 300))
        })

        onUnmounted(async () => {
            window.removeEventListener('scroll', debounce(handleScroll, 300))
        })

        const handleScroll = () => {
            let element = scrollComponent.value
            if (element?.getBoundingClientRect().bottom + 70 < window.innerHeight ) {
                loadMoreApod()
            }
        }

        const loadMoreApod = async () => {
            setNextRange()

            const newApod = await getApodDataWithRange(apodStart.value, apodEnd.value)
            newApod.reverse()
            apodDataList.value.push(...newApod)
        }

        const setNextRange = () => {
            apodEndDate.value.subtract(1, 'days')
            apodEnd.value = apodEndDate.value.format('YYYY-MM-DD')
            apodStart.value = apodEndDate.value.subtract(apodInterval, 'days').format('YYYY-MM-DD')
        }

        return {
            dataList: apodDataList,
            scrollComponent
        }
    },
})
</script>
