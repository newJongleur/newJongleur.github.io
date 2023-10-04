<template>
    <el-row>
        <el-col :xs="4" :sm="6" :md="0" :lg="0" :xl="0">
            <LeftNav />
        </el-col>
        <el-col :xs="16" :sm="12" :md="4" :lg="4" :xl="4">
            LOGO
        </el-col>
        <el-col :xs="0" :sm="0" :md="8" :lg="6" :xl="6">
            <!-- 空 -->
        </el-col>
        <el-col :xs="4" :sm="6" :md="10" :lg="12" :xl="12">
            <div style="display: -webkit-box;">
                <Navbar class="hidden-sm-and-down" />
                <Test />
            </div>
        </el-col>
    </el-row>
</template>
