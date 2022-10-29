<template>
    <div>
        {{numero}}
        <br/>
        {{mensaje}}
        {{valor}}
        <br/>
        <label>Nombre:</label>
        <input type="text" v-model="Nombre"/>{{Nombre}}
        <br/>
        <label>Raza:</label>
        <input type="text" v-model="Raza"/>{{Raza}}
        <br/>
        <label>Edad:</label>
        <input type="text" v-model="Edad"/>{{Edad}}
        <br/>
       
        <button v-on:click="datos">Aceptar</button>
    </div>
</template>
<script>
import { allGeneratedPositionsFor } from '@jridgewell/trace-mapping';

export default{
    name:"vfor",
    props:{

    },
    data(){
        return{
            numero:1,
            mensaje:"Mascotas",
            valor:null,
            Nombre:"Molly",
            Raza:null,
            Edad:null,
            
        }
    },
    methods:{
       datos(){
          alert(this.Nombre+ '' +this.Raza+ '' +this.Edad)
          
 }
    },
}
</script>