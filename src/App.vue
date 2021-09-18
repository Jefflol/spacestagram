<template>
    <div class="flex flex-col px-10 max-w-screen-2xl">
        <Home />
        <section class="w-full my-10">
            <Gallery />
        </section>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

import Home from './components/Home.vue'
import Gallery from './components/Gallery.vue'

export default defineComponent({
    name: 'App',
    components: {
        Home,
        Gallery
    }
})
</script>

<style lang="postcss">
#app {
    @apply flex justify-center w-full bg-black text-white;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
