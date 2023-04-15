import React, {useState} from 'react';

const input = require("../example.json");


function OrderTable() {


    const [orders, SetOrders] = useState(input);
    const [filter, SetFilter] = useState("");


    let firmen = Array.from(new Set(orders.map(entry => entry.Firma))).sort();

    let output = (filter !== "") ? orders.filter(entry => entry.Firma === filter) : orders;

    console.log(filter);

    return(
        <div>
            <button onClick={() => SetFilter("")}>Alle</button>
            {firmen.map(firma => <button
                onClick={() => SetFilter(firma)}
            >{firma}</button>)}
            
        <table>
            <thead>
                {Object.keys(orders[0]).map(entry => <th>{entry}</th>)}
            </thead>
            <tbody>
                {output.map(entry => <tr>
                    <td>{entry.Datum}</td>
                    <td>{entry.Firma}</td>
                    <td>{entry.Betrag}</td>
                </tr>)}
            </tbody>
        </table>
        </div>

    )
}

export default OrderTable;