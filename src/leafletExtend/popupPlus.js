import * as L from  'leaflet'
import Vue from 'vue'
/**
	参数1:要加载的组件 type:Object
	参数2:popup的参数选项 type:Object
 */
L.Marker.include({
    popupPlus:function(targetCopm,options){
		console.log(targetCopm,'t')
		return new popupplus(targetCopm,options,this)
	}
})
/*
		方法1：加载页面时，把组件加载了（执行代码即加载）
*/
// function popupplus(targetCopm,options={},marker){
// 	console.log(marker,'mmmm')
// 	let popEl = null;
// 	let mypopOptions=options.popOptions?options.popOptions:null
// 	let myProps = options.props?options.props:null
// 	let mytargetCopm=targetCopm
// 	if(mytargetCopm){
// 		let popComponent = Vue.component(`POPUP-${marker._leaflet_id}`,targetCopm)
// 		let mypop = new popComponent({propsData:myProps}).$mount()
// 		popEl =mypop.$el
// 		if (mytargetCopm instanceof L.Popup) {
// 			L.Util.setOptions(mytargetCopm, mypopOptions);
// 			marker._popup = mytargetCopm;
// 			mytargetCopm._source = marker;
// 		} else {
// 			if (!marker._popup || mypopOptions) {
// 				marker._popup = new L.Popup(mypopOptions, marker);
// 			}
// 			marker._popup.setContent(popEl);
// 		}
// 		if (!marker._popupHandlersAdded) {
// 			marker.on({
// 				click: marker._openPopup,
// 				keypress: marker._onKeyPress,
// 				remove: marker.closePopup,
// 				move: marker._movePopup
// 			});
// 			marker._popupHandlersAdded = true;
// 		}

// 		return marker;
// 	}else{
// 		return ;
// 	}

// }
/*
		方法2：点击marker时，把组件加载（用时再加载）
*/
function popupplus(targetCopm,options={},marker){
	let popEl = null;
	let firstCompRender = true
	let mypopOptions=options.popOptions?options.popOptions:null
	let myProps = options.props?options.props:null
	let mytargetCopm = targetCopm
	if(mytargetCopm){
		if (!marker._popupHandlersAdded) {
			console.log(marker,'this')
			marker.on({
				click: (e)=>{
					L.DomEvent.stop(e);
					//判断组件是否被渲染(即判断组件是否出去open状态)
					if(firstCompRender){
							//渲染组件
						  let popComponent = Vue.component(`POPUP-${marker._leaflet_id}`,targetCopm)
						  let mypop = new popComponent({propsData:myProps}).$mount()
						  popEl =mypop.$el
						  console.log(myProps,'props')
						  if (mytargetCopm instanceof L.Popup) {
						  L.Util.setOptions(mytargetCopm, mypopOptions);
						  marker._popup = targetCopm;
						  mytargetCopm._source = marker;
					  } else {
						  if (!marker._popup || mypopOptions) {
						  marker._popup = new L.Popup(mypopOptions, marker);
						  }
						  marker._popup.setContent(popEl);
					  }
					}
					
					var target = e.layer || e.target;
					if (marker._popup._source === target && !(target instanceof L.Path)) {
						// treat it like a marker and figure out
						// if we should toggle it open/closed
						if (marker._map.hasLayer(marker._popup)) {
						  marker.closePopup();
						//   destoryComponent(mytargetCopm)
						} else {
						  marker.openPopup(e.latlng);
						  firstCompRender=false
						}
						return;
					}
					marker._popup._source = target;
					},
				keypress: marker._onKeyPress,
				remove: marker.closePopup,
				move: marker._movePopup
			});
			marker._popupHandlersAdded = true;
		}

		return marker;
	}else{
		return ;
	}
}
 let destoryComponent = (targetCopm)=>{
	mypop.$destroy(targetCopm.name)

}