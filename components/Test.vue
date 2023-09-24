<template>
    <button @click="toggleDark()">
        按钮
    </button>
</template>

<script lang="ts" setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>