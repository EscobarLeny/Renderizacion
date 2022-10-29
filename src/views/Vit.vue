<template>
    <div>
        {{numero}}
        <br/>
        {{mensaje}}
        {{valor}}
        <br/>
        <label>Departamento:</label>
        <input type="text" v-model="Departamento"/>{{Departamento}}
        <br/>
        <label>Ciudad:</label>
        <input type="text" v-model="Cuidad"/>{{Cuidad}}
        <br/>
        <label>Barrio:</label>
        <input type="text" v-model="Barrio"/>{{Barrio}}
        <br/>
        <label>Direccion:</label>
        <input type="text" v-model="Direccion"/>{{Direccion}}
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
            numero:2,
            mensaje:"Datos de Ubicacion",
            valor:null,
            Departamento:"Antioquia",
            Cuidad:null,
            Barrio:null,
            Direccion:null
        }
    },
    methods:{
       datos(){
          alert(this.Departamento+ '' +this.Ciudad+ '' +this.Barrio+ '' +this.Direccion)
          
 }
    },
}
</script>