<template>
    <!-- <h1>JobDetails Page</h1> -->
    <!-- 當 <p>The job id is {{ $route.params.id}}</p>   括號中間使用$route.params.id 時下方不需要 使用export default {data() {return {id: this.$route.params.id}} }
    -->
    <!-- <p>The job id is {{ $route.params.id}}</p> -->

    <!-- 
        當 "<p>The job id is {{id}}</p> 使用id 下方需要
        expor default {data() {return{ id }}}
        "-->
    <!-- <p>The job id is {{id}}</p> -->
    
    <div v-if="job">
        <h1>{{ job.title}}</h1>
        <p>The job id is {{id}}</p>
        <P>{{ job.details}}</P>
    </div>
    <div v-else>
        <p>Loading job details...</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
    data(){
        return {
            job: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
            .then(res => res.json())
            .then(data => this.job = data)
            .catch(err => console.log(err.message))
    },
};
</script>

<style>

</style>