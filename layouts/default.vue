<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <el-affix>
                    <Header />
                </el-affix>
            </el-header>
            <el-container>
                <el-aside width="250px" class="hidden-md-and-down">
                    Aside
                </el-aside>
                <el-main style="height: calc(100vh - 60px);">
                    <slot />
                </el-main>
            </el-container>
        </el-container>
        <el-backtop :right="100" :bottom="100" />
    </div>
</template>

<style scoped>
Header{
    line-height: 60px;
}
</style>
