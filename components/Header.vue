<template>
    <el-row>
        <el-col :xs="4" :sm="6" :md="0" :lg="0" :xl="0">
            <LeftNav>
                亖
            </LeftNav>
        </el-col>
        <el-col :xs="16" :sm="12" :md="4" :lg="4" :xl="4">
            <Icon name="tabler:math-y-plus-y" size="32" color="yellow" />
            <Icon name="😋" />
        </el-col>
        <el-col :xs="0" :sm="0" :md="8" :lg="6" :xl="6">
            <!-- 空 -->
        </el-col>
        <el-col :xs="4" :sm="6" :md="10" :lg="12" :xl="12">

            <el-row>
                <el-col :span="12">
                    <Navbar :isMode="mode" class="hidden-sm-and-down" />
                </el-col>
                <el-col :span="12">
                    <RightNav />
                </el-col>
            </el-row>

        </el-col>
    </el-row>
</template>

<script setup lang="ts">
const mode = ref<string>('horizontal');
</script>
