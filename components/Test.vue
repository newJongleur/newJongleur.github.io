<script setup>
const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation())
</script>

<template>
  <pre>{{ navigation }}</pre>
  <nav>
        <ContentNavigation v-slot="{ navigation }">
            <ul :class="isMode == 'horizontal' ? 'horizontal' : 'vertical'">
                <li v-for="link of navigation" :key="link._path">
                    {{ link.icon }}
                    <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                </li>
            </ul>
        </ContentNavigation>
    </nav>
</template>
