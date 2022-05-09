<template>
  <div class="marker" id="marker">
      <p>{{this.a}}</p>
      <p>{{this.prop1}}</p>
      <button @click="test">hello</button>
  </div>
</template>

<script>
export default {
    name:'markerdetail',
    props:['prop1','prop2'],
    data(){
        return{
            a:"test"

        }
    },
    created(){
        console.log('zi组件在created调用了')
        
    },
    methods:{
        test(){

            console.log(this.prop1,'prop1')
        }
    },
    mounted(){
        console.log('zi组件在mounted调用了')
    },
    beforeDestroy(){
        console.log('zi组件准备销毁了')
    },
    destroyed(){
        console.log('zi组件销毁了')
    }
}
</script>

<style lang="less" scoped>
.marker{
    z-index: 2022;
    background: pink;
    height: 500px;
    width: 500px;
}

</style>