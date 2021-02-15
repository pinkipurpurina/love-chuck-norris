import React, { Component } from 'react';
interface IFrase {
    frase?: string;
    id?: string;
}
class Frase extends Component<IFrase> {
    state = {}

    render() {
        const {
            frase,
        } = this.props;
        return (
            <div >
                <div className="card-body-border margin-bottom  margin-padding">
                    <p className="text-aling">
                        {frase}
                    </p>
                </div>
            </div>
        );
    }
}
export default Frase;