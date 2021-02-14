import { debug } from 'console';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { getCategoria} from '../redux/actions';
interface ICategorias {
    categorias?: string[];
    categoriaTexto?:any;
    getCategoria:(data: string)=>void;
   
}
class GetFrase extends Component<ICategorias> {
    state = {}

    render() {
        const {
            categorias,
            categoriaTexto,
            getCategoria,
           
        } =  this.props;
        //console.log("recibiendo del store categoria en getfrase",ultimaCategoria());
        console.log("recibiendo del store categoria en*******************",categoriaTexto);
       // console.log("en get frase",categorias);
        let tipo="Categorias";
        return (
            <div className="card-body-border margin-padding">
                <div className="card-body-border margin-botton">
                    <p>

                    </p>
                </div>

                <div className="btn-group  col-12" role="group" aria-label="Button group with nested dropdown">
                    <button type="button" className="btn btn-info">1</button>
                    <button type="button" className="btn btn-info">2</button>
                    {Boolean(categorias?.length) &&
                        <div className="btn-group" role="group">
                            <input id="btnGroupDrop1" type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value={categoriaTexto}>
                            </input>
                            <div className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                                {categorias?.map(categoria => (
                                   
                                    <a className="dropdown-item" href="#" onClick={()=>{
                                        getCategoria(categoria);
                                       // console.log(categoriaTexto.payload);
                                        //console.log(getCategoria(categoria));
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

const mapDispatchToProps = {
    getCategoria,
};

export default connect(undefined, mapDispatchToProps)(GetFrase);