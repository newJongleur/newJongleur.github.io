<template>
    <nav>
        <ContentNavigation v-slot="{ navigation }">
            <ul :class="isMode == 'horizontal' ? 'horizontal' : 'vertical'">
                <li v-for="link of navigation" :key="link._path">
                    <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                </li>
            </ul>
        </ContentNavigation>
    </nav>
</template>

<script setup lang="ts">
defineProps(['isMode']);
</script>

<style scoped>
.horizontal {
    display: flex;
    justify-content: right;
}

.vertical {
    display: block;
}

ul li {
    margin: 0px 10px;
}
</style>
