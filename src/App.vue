<template>
    <div class="flex flex-col px-10 max-w-screen-2xl">
        <Home class="z-50" />
        <section class="z-50 w-full my-10">
            <Gallery />
        </section>
        <StarryNightAnimation />
    </div>
</template>

<script>
import { defineComponent } from 'vue'

import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'
import StarryNightAnimation from './components/StarryNightAnimation.vue'

export default defineComponent({
    name: 'App',
    components: {
        Home,
        Gallery,
        StarryNightAnimation
    }
})
</script>

<style lang="postcss">
#app {
    @apply flex justify-center w-full text-white;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: radial-gradient(ellipse at bottom, #212f3f 0%, #000000 100%);
}
</style>
