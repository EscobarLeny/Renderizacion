<template>
    <div>
        {{numero}}
        <br/>
        {{mensaje}}
        {{valor}}
        <br/>
        <label>Producto:</label>
        <input type="text" v-model="Producto"/>{{Producto}}
        <br/>
        <label>Marca:</label>
        <input type="text" v-model="Marca"/>{{Marca}}
        <br/>
        <label>Garantia:</label>
        <input type="text" v-model="Garantia"/>{{Garantia}}
        <br/>
        
        <button v-on:click="datos">Aceptar</button>
    </div>
</template>
<script>
import { allGeneratedPositionsFor } from '@jridgewell/trace-mapping';

export default{
    name:"von",
    props:{

    },
    data(){
        return{
            numero:2,
            mensaje:"Productos Electronicos",
            valor:null,
            Producto:"Danna Paz",
            Marca:null,
            Garantia:null,
            
        }
    },
    methods:{
       datos(){
          alert(this.Producto+ '' +this.Marca+ '' +this.Garantia)
          
 }
    },
}
</script>