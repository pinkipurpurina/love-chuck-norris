import { debug } from 'console';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setCategoria, getFrase, setFrases } from '../redux/actions';
//import frase from '../redux/reducers/frase';
interface ICategorias {
    categorias?: string[];
    categoriaTexto?: any;
    frase?: string;
    setCategoria: (data: string) => void;
    getFrase: (data?: any) => void;
    setFrases: (data: any) => void;
}

class GetFrase extends Component<ICategorias> {
    state = {}

    render() {
        const {
            categorias,
            categoriaTexto,
            frase,
            setCategoria,
            getFrase,
            setFrases
        } = this.props;
       

        return (
            <div className="card-body-border margin-padding">
                <div className="btn-group  col-12" role="group" aria-label="Button group with nested dropdown">
                <button type="button" className="btn btn-info" onClick={() => setFrases({frase:frase})}>Guardar frase</button>
                    <button type="button" className="btn btn-info" onClick={()=>{
                        if(categoriaTexto!=="Categorias"){
                            getFrase(categoriaTexto);
                        }else{
                             getFrase();
                        }
                        
                       }}>Nueva Frase</button>
                    {Boolean(categorias?.length) &&
                        <div className="btn-group" role="group">
                            <input id="btnGroupDrop1" type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value={categoriaTexto}>
                            </input>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                {categorias?.map((categoria,index) => (
                                    <a key={index} className="dropdown-item" href="#" onClick={() => {
                                        setCategoria(categoria);
                                    }}>{categoria}</a>
                                ))}
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state: any) => {
    return {
      
        frases: state.frases,
      

    };
};

const mapDispatchToProps = {
    setCategoria,
    getFrase,
    setFrases
};

export default connect(mapStateToProps, mapDispatchToProps)(GetFrase);