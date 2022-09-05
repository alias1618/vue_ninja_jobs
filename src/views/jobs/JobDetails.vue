<template>
    <h1>JobDetails Pagw</h1>
    <!-- 當 <p>The job id is {{ $route.params.id}}</p>   括號中間使用$route.params.id 時下方不需要 使用export default {data() {return {id: this.$route.params.id}} }
    -->
    <p>The job id is {{ $route.params.id}}</p>
    <!-- 
        當 "<p>The job id is {{id}}</p> 使用id 下方需要
        expor default {data() {return{ id }}}
        "-->
    <p>The job id is {{id}}</p>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
};
</script>

<style>

</style>