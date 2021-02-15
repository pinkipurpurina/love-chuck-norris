import EventEmitter from 'events';
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getFrases } from '../redux/actions';
import api from '../services/api';
interface IFrase {
    // frase?: string;
    frases?: any[];
    id?: string;
    getFrases: () => void;
}
function ee() {


}
class ListFrases extends Component<IFrase> {
    state = {}

    deleteLocal(id) {
        const { getFrases, } = this.props
        api.frases.delete(id).then((result) => {
            console.log(result);
            getFrases();
        }).catch((err) => {
            console.log(err);
        });
    }
    render() {
        const {
            frases,
        } = this.props;

        return (
            <div className="card-body-border margin-padding">
                {Boolean(frases?.length) &&
                    <div className="card-body-border margin-botton">
                        <ul className="list-group">
                            {frases?.map(frase => (
                                <Fragment key={frase.id}>
                                <div className="container" >
                                    <div className="row">
                                        <div className="col-9">
                                        <li className="list-group-item" >{frase.frase} </li>
                                        </div>
                                        <div className="col-3"> <button type="button" className="btn btn-light" onClick={
                                        () => this.deleteLocal(frase.id)} >Borrar</button></div>
                                    </div>
                                </div>
                                   
                                   
                                </Fragment>
                            ))}
                        </ul>
                    </div>
                }
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
    getFrases,
};


export default connect(mapStateToProps, mapDispatchToProps)(ListFrases);