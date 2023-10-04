<template>
    <el-button @click="drawer = true">
        亖
    </el-button>

    <el-drawer v-model="drawer" direction="ltr" :with-header="false">
        <Navbar @click="cancelClick" />
    </el-drawer>
</template>
  
<script lang="ts" setup>
const drawer = ref(false)

function cancelClick() {
    drawer.value = false
}
</script>
  