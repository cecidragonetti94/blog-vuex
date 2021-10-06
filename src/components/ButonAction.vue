<template>

 <button class="buton-action" @click="actionButon({estado: estado, num:15})">{{textBoton}} </button>

 
</template>

<script>
import {mapActions} from 'vuex'

export default {
    props: {
        estado:Boolean
    },
    computed:{
        textBoton(){
            return this.estado ? 'Increment' : 'Decrease'
        }
    },
    methods:{
        ...mapActions(['actionButon'])
    }
}
</script>

<style>
.buton-action{
    border-radius: 5px;
    width: 70px;
    border:none;
    font-weight: bold;
    margin-left: 5px;
    background-color: rgb(17, 182, 204);
    color:white;
   
}
.buton-action:hover{
    background-color: violet;
    color:white;
    font-weight: bold;
}

</style>