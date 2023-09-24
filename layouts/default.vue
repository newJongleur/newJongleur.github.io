<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <Navbar />
            </el-header>
            <el-container>
                <el-aside width="200px">Aside</el-aside>
                <el-main>
                    <slot />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
