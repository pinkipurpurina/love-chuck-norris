import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategorias, getFrases, getCategoria,ultimaCategoria } from '../redux/actions';
import  Layout  from "./layout";
import  GetFrase  from "./getFrase";
import  Frase  from "./frase";
import  Frases  from "./frases";
import api from '../services/api'
interface ICategorias {
    categorias?: any[]|any;
    frases?:any[];
    categoria: string;
    getCategorias:()=>void;
    getFrases:()=>void;
    getCategoria:(data: string)=>void;
    ultimaCategoria:()=>void;
}
class Root extends Component  <ICategorias>{
    state = {}
    //categorias:string[]=[];
    componentDidMount() {
        //api.frase.create({frase:'estamos de pruebas'});
        const{getCategorias, getFrases, getCategoria,ultimaCategoria}=this.props//
       // console.log(api.categorias.get());
        getCategorias();
        ultimaCategoria();
        getCategoria("Categorias");
        
    }
    render() {
        const{
            categorias,
            frases,
            categoria
        }=this.props;
        var myArray = ['something','aa','dsfsdf'];
        console.log("prueba categorias ",categorias);
        console.log("prueba frases ",frases);
        
        
        return (
            <Layout>
               
               <GetFrase categorias={categorias} categoriaTexto={categoria}></GetFrase>
               <Frase frase="hola" ></Frase> 
                <Frases frases={myArray} ></Frases>
            </Layout>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        categorias:state.categorias,
        frases:state.frases,
        categoria:state.categoria
    };
};

const mapDispatchToProps = {
    getCategorias,
    getFrases,
    getCategoria,
    ultimaCategoria
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);