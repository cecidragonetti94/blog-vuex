<template>
 <button class="buton-dismi" @click="actionDismi(50)">Decrease</button> 
</template>

<script>
import {mapActions} from 'vuex'
export default {
    methods:{
        ...mapActions(['actionDismi'])
    }

}
</script>

<style>
.buton-dismi{
    border-radius: 5px;
    width: 70px;
    border:none;
    font-weight: bold;
    margin-left: 5px;
    background-color: violet;
    color:white;
}
.buton-dismi:hover{
    background-color: rgb(17, 182, 204);
    color:white;
    font-weight: bold;
}
</style>