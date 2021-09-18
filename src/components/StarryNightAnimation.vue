<template>
    <div class="fixed top-0 left-0 w-full h-full">
        <div class="rounded-full starSlow" :style="{ 'boxShadow': starsStyle1 }"></div>
        <div class="rounded-full opacity-90 starMedium" :style="{ 'boxShadow': starsStyle2 }"></div>
        <div class="rounded-full opacity-90 starFast" :style="{ 'boxShadow': starsStyle3 }"></div>
    </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({
    name: 'StarryNightAnimation',
    setup() {
        const getRandomPosition = () => {
            const xPos = Math.floor(Math.random() * window.innerWidth)
            const yPos = Math.floor(Math.random() * window.innerHeight)
            return [xPos, yPos]
        }

        const generateStarsStyle = (n) => {
            let style = ''
            
            for (let i = 0; i < n; i++) {
                const [xPos, yPos] = getRandomPosition()

                if (i === n - 1) {
                    style += `white ${xPos}px ${yPos}px 0px 0px`
                } else {
                    style += `white ${xPos}px ${yPos}px 0px 0px, `
                }
            }
            
            return style
        }

        const starsStyle1 = computed(() => generateStarsStyle(20))
        const starsStyle2 = computed(() => generateStarsStyle(20))
        const starsStyle3 = computed(() => generateStarsStyle(20))

        return {
            starsStyle1,
            starsStyle2,
            starsStyle3
        }
    },
})
</script>

<style scoped lang="postcss">
.starSlow {
    width: 3px;
    height: 3px;
    animation: animateStar 600s linear infinite;
}

.starMedium {
    width: 2px;
    height: 2px;
    animation: animateStar 300s linear infinite;
}

.starFast {
    width: 1px;
    height: 1px;
    animation: animateStar 150s linear infinite;
}

@keyframes animateStar {
    from {
        transform: translateY(0px)
    }
    to {
        transform: translateY(2000px)
    }
}
</style>