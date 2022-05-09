//用于解决引入的leatlet中不包含静态的icon文件的问题
//猜测原因就是因为通过npm下载到node_modules的leaflet，虽然有文件但是无法引入，所以需要单独修改
import Map from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

let DefaultIcon=Map.icon({
    //配置参数
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
})
//修改Map(leaflet插件)的Marker的原型中的icon
Map.Marker.prototype.options.icon=DefaultIcon

export default DefaultIcon
