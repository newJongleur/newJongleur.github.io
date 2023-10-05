<template>
    <client-only>
        <el-button @click="drawer = true">
            <slot />
        </el-button>

        <el-drawer v-model="drawer" direction="ltr" size="60%" :with-header="false">
            <Navbar :isMode="mode" @click="cancelClick" />
        </el-drawer>
    </client-only>
</template>
  
<script lang="ts" setup>
const drawer = ref(false)
const mode = ref<string>('vertical');

function cancelClick() {
    drawer.value = false
}
</script>
  