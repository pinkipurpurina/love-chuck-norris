import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getFrases } from '../redux/actions';
import api from '../services/api';
interface IListFrase {
    frases?: any[];
    id?: string;
    getFrases: () => void;
}
class ListFrases extends Component<IListFrase> {
    state = {}
    deleteLocal(id) {
        const { getFrases, } = this.props
        api.frases.delete(id).then((result) => {
            getFrases();
        }).catch((err) => {
            console.error(err);
        });
    }
    render() {
        const {
            frases,
        } = this.props;
        return (
            < >
                {Boolean(frases?.length) &&
                    <div className="card-body-border margin-bottom margin-padding">
                        <ul className="list-group">
                            {frases?.map(frase => (
                                <Fragment key={frase.id}>
                                    <div className="container" >
                                        <div className="row">
                                            <div className="col-9">
                                                <li className="list-group-item" >{frase.frase} </li>
                                            </div>
                                            <div className="col-3"> <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={
                                                () => this.deleteLocal(frase.id)} >Borrar</button></div>
                                        </div>
                                    </div>

                                </Fragment>
                            ))}
                        </ul>
                    </div>
                }
            </>
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