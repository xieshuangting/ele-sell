<template>
	<div>
		<nav-header :seller='seller'></nav-header>
		<div class="tab border-1px">
			<router-link to='/goods' class='tab-item'>商品</router-link>
			<router-link to='/ratings' class='tab-item'>评价</router-link>
			<router-link to='/seller' class='tab-item'>商家</router-link>
		</div>
		<keep-alive>
			<router-view :seller='seller'/></router-view>
		</keep-alive>
	</div>
</template>

<script>
import NavHeader from './components/NavHeader'
import {urlParse} from './assets/js/util.js'
const ERR_OK = 0

export default {
  components:{
  	NavHeader
  },
  data () {
    return {
    	seller:{
    		id:(()=>{
    			let queryParam = urlParse();
    			// console.log(queryParam)
    			return queryParam.id;
    		})()
    	}
    }
  },
  created:function(){
    	this.$http.get('/seller?id='+this.seller.id).then((res)=>{
    		var response = res.body;
    		if(response.errno === ERR_OK){
    			this.seller = Object.assign({},this.seller,response.data);
    			// console.log(this.seller.id)
    		}
    	})
    }
}
</script>

<style lang="stylus" rel='stylesheet/stylus'>
	@import "./assets/stylus/mixin.styl"
	.tab
		display:flex
		width:100%
		height:40px
		line-height:40px
		border-1px(rgba(7,12,27,0.1))
		.tab-item
			flex:1
			text-align:center
			display:block
			font-size:14px
			color:rgb(77,85,93)
			&.active
				color:rgb(240,20,20)
</style>