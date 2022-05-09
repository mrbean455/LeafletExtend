export const fireTooltip ={ 
  methods:{
    fireTooltip(target,firefuc){ // eslint-disable-line no-unused-vars
      //拿到marker的tooltip实例对象
        let mytooltip = target.getTooltip()
      //获取到tooltip的html元素
        let myel = mytooltip._container
      //给div元素加上事件监听器
        myel.addEventListener('click',firefuc)
    }
}
}



