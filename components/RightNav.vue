<template>
    <el-switch v-model="isDark" style="--el-switch-on-color: #262727;" />
</template>

<script lang="ts" setup>
const isDark = useDark();
</script>
