<template>
    <nav>
        <ContentNavigation v-slot="{ navigation }">
            <ul>
                <li v-for="link of navigation" :key="link._path">
                    <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
                </li>
            </ul>
        </ContentNavigation>
    </nav>
</template>

<style scoped>
ul {
    display: flex;
    justify-content: right;
}

ul li {
    margin: 0px 10px;
}
</style>
