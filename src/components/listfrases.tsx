import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteFrase } from '../redux/actions';
import api from '../services/api';
interface IListFrase {
    frases?: any[];
    id?: string;
    deleteFrase: (data: any) => void;
}
class ListFrases extends Component<IListFrase> {
    state = {}

    render() {
        const {
            frases,
            deleteFrase
        } = this.props;
        return (
            <>
                {Boolean(frases?.length) &&
                    <div className="card-body-border margin-bottom margin-padding">
                        <ul className="list-group">
                            {frases?.map(frase => (
                                <Fragment key={frase.id}>
                                    <div className="container" >
                                        <div className="row">
                                            <div className="col-9">
                                                <li className="list-group-item" >{frase.value} </li>
                                            </div>
                                            <div className="col-3"> <button type="button" className="btn btn-outline-danger btn-lg btn-block" onClick={
                                                () => deleteFrase(frase)} >Borrar</button></div>
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
    deleteFrase,
};


export default connect(mapStateToProps, mapDispatchToProps)(ListFrases);