import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCategorias, setCategoria, ultimaCategoria } from '../redux/actions';
import Layout from "./layout";
import ButtonGroup from "./buttonGroup";
import Frase from "./frase";
import ListFrases from "./listfrases";
interface IRoot {
    categorias?: any[] | any;
    frase?: any[] | any;
    categoria: string;
    getCategorias: () => void;
    setCategoria: (data: string) => void;
    ultimaCategoria: () => void;
}
class Root extends Component<IRoot>{
    state = {}
    componentDidMount() {
        const { getCategorias, setCategoria, ultimaCategoria, } = this.props
        getCategorias();
        ultimaCategoria();
        setCategoria("random");
    
    }
    render() {
        const {
            categorias,
            categoria,
            frase
        } = this.props;
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
        categoria: state.categoria,
        frase: state.frase
    };
};

const mapDispatchToProps = {
    getCategorias,
    setCategoria,
    ultimaCategoria,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);