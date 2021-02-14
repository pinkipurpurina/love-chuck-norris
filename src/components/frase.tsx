import React, { Component } from 'react';
interface IFrase {
    frase?: string;
    id?: string;
  
  }
class Frase extends Component <IFrase> {
    state = {}

    render() {
        const {
            frase, 
        } = this.props;
        return (
            <div className="card-body-border margin-padding">
                <div className="card-body-border margin-botton">
                    <p>
                        {frase}
                    </p>
                </div>
            </div>
        );
    }
}
export default Frase;