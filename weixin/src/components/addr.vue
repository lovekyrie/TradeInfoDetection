<style lang="less">
  .address{
    width: 100%;
    select{
      width: 30%;
      border: 1px solid #e5e5e5;
      color: #666;
    }
  }
</style>
<template>
  <div class="address">
    <select v-model="cityCode">
      <option value="" disabled value="">
        省份
      </option>
      <option v-for="item in cityList" :value="item.cd">
        {{item.nm}}
      </option>
    </select>
    <select v-model="cityCode2">
      <option value="" disabled value="">
        城市
      </option>
      <option v-for="item in cityList2" :value="item.cd">
        {{item.nm}}
      </option>
    </select>
    <select v-model="cityCode3" v-if="cityCode3!=0">
      <option value="" disabled value="">
        区/县
      </option>
      <option v-for="item in cityList3" :value="item.cd">
        {{item.nm}}
      </option>
    </select>
  </div>
</template>

<script>
export default {

  data() {
    return {
        cityCode:'',
        cityCode2:'',
        cityCode3:'',
        cityList:[],
        cityList2:[],
        cityList3:[],
    };
  },
    props: ["provCd","city","distCd"],
    mounted(){
        this.getCity()
        this.cityCode = this.provCd ? this.provCd:''
        this.cityCode2 = this.city ? this.city:''
        this.cityCode3 = this.distCd ? this.distCd:''
        console.log('22222:'+this.cityCode)
    },
    methods:{
        //省份
        getCity(){
            this.until.get('/general/cat/listByPrntCd?prntCd=90000')
                .then(res=>{
                    if(res.status=='200'){
                        this.cityList = res.data.items
                    }
                })
        },
    },
    watch:{
        cityCode(val) {
            this.until.get('/general/cat/listByPrntCd?prntCd='+val)
                .then(res=>{
                    if(res.status=='200'){
                        this.cityList2 = res.data.items
                    }
                })
        },
        cityCode2(val) {
            this.until.get('/general/cat/listByPrntCd?prntCd='+val)
                .then(res=>{
                    if(res.status=='200'){
                        this.cityList3 = res.data.items
                        if(this.cityCode3==0){
                            let cd = {
                                cd1:this.cityCode,
                                cd2:this.cityCode2,
                            }
                            this.$emit('setAddr',JSON.stringify(cd))
                        }
                    }
                })
        },
        cityCode3(val){
            let cd = {
                cd1:this.cityCode,
                cd2:this.cityCode2,
                cd3:val
            }
            this.$emit('setAddr',JSON.stringify(cd))
        }
    },
};
</script>

<style lang="less">
.address-wrap {
  background-color: #fff;
  border-bottom: 1px solid #F7F7F7;
  margin-bottom: .2rem;
  .address-info {
    border-bottom: 1px solid #E3E3E3;
    padding: 0.4rem;
    >div:nth-of-type(1){
      margin-bottom: .2rem;
      font-size: 12px;
      display: -webkit-flex;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      >span{
        width: 40%;
      }
    }
    >div:nth-of-type(2){
      font-size: 12px;
    }
  }
  .address-operate{
    padding: 0.4rem;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    >div{
      width: 50%;
      display: flex;
      display: -webkit-flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
      >div{
        text-align: center;
        padding: .1rem 0;
        width: 35%;
        border: 1px solid #D8D8D8;
        border-radius: 3px;
      }
    }
  }
}
</style>
