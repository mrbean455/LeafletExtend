<template>
  <div>
    <div id="map" class="map"></div>
    <template v-if="showMaker">
    <!-- <MakerDetail :prop1='3000'></MakerDetail> -->
    </template>

  </div>
</template>

<script>
// import MakerDetailVue from './MakerDetail.vue';
 import MarkerDetail from './makerdetail.vue'
 import MarkerDetail1 from './markerdetail1.vue'
// import { fireTooltip } from '../mixins/tooltipClickable.js'

export default {
components: { MarkerDetail ,MarkerDetail1 },
  // mixins:[fireTooltip],
  props:{
    'map1':String,
    'map2':String
    },
  data() {
    return {
      map: null,
      marker1: null,
      showMaker:false,
      obj:{
        name:'zhansan',
        age:18
        }
    };
  },
  methods: {
    initMap() {
      this.map = this.L.map("map", {
        //地图初始化配置选项
        minZoom: 1,
        maxZoom: 14, //设置最大最小缩放层级
        center: [39.909186, 116.397411], //设定地图中心
        //设置加载的图层
      });
      let GDurl =
        "http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}";
      this.L.tileLayer(GDurl, {
        subdomains: "1234",
      }).addTo(this.map); //高德地图的加载节点？
      this.map.setView([39.909186, 116.397411], 14); //设定展示中心（北京天安门坐标[39.909186,116.397411]）
      this.addMarker();
    },
    addMarker() {
      var F = function(){
        console.log('1111')
      };
      var f = new F();
      console.log(f,'ffff')
            const marker0 = this.L.marker([39.90000, 116.397411]).addTo(this.map);
      marker0.popupPlus(MarkerDetail,{
        props:{
          prop1:"CCCCC",
          prop2:"BBBBB"
        },
        popOptions:{
          maxWidth:500,
          maxHeight:200,
          autoPan:true,
          className:'testpop1',
        }
      })
      const marker = this.L.marker([39.909186, 116.397411]).addTo(this.map);
      marker.popupPlus(MarkerDetail,{
        props:{
          prop1:this.obj,
          prop2:"BBBBB"
        },
        popOptions:{
          maxWidth:500,
          maxHeight:500,
          autoPan:true,
          className:'testpop',
        }
      })
      this.showMaker=true
      // this.fireTooltip(marker,this.tooltipfuc);

    },
    testF(){
      var test = new String('123')
    }

    // fireTooltip1(target){
      
    //   let mytooltip = target.getTooltip()
    //   console.log(mytooltip,'t')
    //   mytooltip.on('click',this.tooltipfuc)
      
    // },
    // tooltipfuc(){
    //     console.log('++++')
    // }
  },
  mounted() {
    this.initMap();
  },
};
</script>

<style>
.map {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100vh;
  width: 100%;
}
.toolclick{
    cursor: pointer;
    pointer-events: auto !important;

}
</style>
