import { debug } from 'console';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setCategoria, getFrase, setFrases } from '../redux/actions';
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
            <div >
                <div role="group" aria-label="Button group with nested dropdown">
                    <div className="btn-group dropright col-12 no-padding margin-bottom">
                        <button type="button" className="btn btn-outline-info  btn-lg btn-block" onClick={() => {
                            if (categoriaTexto !== "random") {
                                getFrase(categoriaTexto);
                            } else {
                                getFrase();
                            }

                        }}>Frase {categoriaTexto}</button>
                        <button type="button" className="btn btn-outline-info dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="sr-only">Toggle Dropright</span>
                        </button>

                        {Boolean(categorias?.length) &&
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                {categorias?.map((categoria, index) => (
                                    <a key={index} className="dropdown-item" href="#" onClick={() => {
                                        setCategoria(categoria);
                                    }}>{categoria}</a>
                                ))}
                            </div>
                        }
                    </div>
                    <button type="button" className="btn btn-outline-info btn-lg btn-block col-12 " onClick={() => { if (frase.length > 0) { setFrases({ frase: frase }) } }}>Guardar frase</button>
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