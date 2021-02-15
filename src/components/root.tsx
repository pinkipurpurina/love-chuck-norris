import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategorias, getFrases, setCategoria, ultimaCategoria, setFrases, getFrase } from '../redux/actions';
import Layout from "./layout";
import ButtonGroup from "./buttonGroup";
import Frase from "./frase";
import ListFrases from "./listfrases";
import api from '../services/api'
interface ICategorias {
    categorias?: any[] | any;
    frases?: any[]|any;
    frase?: any[]|any;
    categoria: string;
    getCategorias: () => void;
    getFrases: () => void;
    setCategoria: (data: string) => void;
    ultimaCategoria: () => void;
    setFrases: (data: any) => void;
}
class Root extends Component<ICategorias>{
    state = {}
    //categorias:string[]=[];
    componentDidMount() {
        //api.frase.create({frase:'estamos de pruebas'});
      //console.log(  api.frase.get());
      
        const { getCategorias, getFrases, setCategoria, ultimaCategoria, setFrases } = this.props
        getCategorias();
        ultimaCategoria();
        setCategoria("Categorias");
        getFrases();
     // console.log( setFrases({frase:'rrrrrrrrrrrrr'}));
       
    }
    render() {
        const {
            categorias,
            frases,
            categoria,
            frase
        } = this.props;
        var myArray = [{
            
            contenido: "hola"
        }, {
          
            contenido: "adios"
        }];
             
        console.log("prueba frases ", frases);
        return (
            <Layout>
                <ButtonGroup categorias={categorias} categoriaTexto={categoria} frase={frase} ></ButtonGroup>
                <Frase frase={frase} ></Frase>
                <ListFrases ></ListFrases>
            </Layout>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        categorias: state.categorias,
        frases: state.frases,
        categoria: state.categoria,
frase:state.frase
    };
};

const mapDispatchToProps = {
    getCategorias,
    getFrases,
    setCategoria,
    ultimaCategoria,
    setFrases,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);