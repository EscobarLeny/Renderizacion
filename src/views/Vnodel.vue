<template>
    <div>
        {{numero}}
        <br/>
        {{mensaje}}
        {{valor}}
        <br/>
        <label>nombre:</label>
        <input type="text" v-model="Nombre"/>{{Nombre}}
        <br/>
        <label>Apellido:</label>
        <input type="text" v-model="Apellido"/>{{Apellido}}
        <br/>
        <label>Edad:</label>
        <input type="text" v-model="Edad"/>{{Edad}}
        <br/>
        <label>Ciudad:</label>
        <input type="text" v-model="Ciudad"/>{{Cuidad}}
        <br/>
        
        <button v-on:click="datos">Aceptar</button>
    </div>
</template>
<script>
import { allGeneratedPositionsFor } from '@jridgewell/trace-mapping';

export default{
    name:"vnodel",
    props:{

    },
    data(){
        return{
            numero:1,
            mensaje:"Empleados",
            valor:null,
            nombre:"Danna Paz",
            Apellido:null,
            Edad:null,
            Cuidad:null
            
        }
    },
    methods:{
       datos(){
          alert(this.nombre+ '' +this.Apellido+ '' +this.Edad+'' +this.Cuidad)
          
 }
    },
}
</script>