import React, { Component } from 'react';
interface IFrase {
    frase?: string;
    frases?: string[];
    id?: string;

}
class Frases extends Component<IFrase> {
    state = {}

    render() {
        const {
            frases,
        } = this.props;
        return (
            <div className="card-body-border margin-padding">
                {Boolean(frases?.length)&&
                <div className="card-body-border margin-botton">
                    <ul className="list-group">
                        {frases?.map(frase =>(
                            <li className="list-group-item">{frase}</li>
                        ))}
                      </ul>
                </div>
                }
            </div>
        );
    }
}
export default Frases;