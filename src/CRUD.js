import React, { useState, useEffect, Fragment } from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
const CRUD = () => {

    const empdata = [
        {
            ID: 1,
            Material: 'Computer',
            Quantity: 29

        },
        {
            ID: 2,
            Material: 'CPU',
            Quantity: 30
        },
        {
            ID: 3,
            Material: 'TV',
            Quantity: 15
        },
    ]

    const [data, setData] = useState([]);
    useEffect(() => {
        setData(empdata);
    }, [empdata]);

    return (
        <Fragment>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Material</th>
                        <th>Quantity</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.length > 0 ?
                            data.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.Material}</td>
                                        <td>{item.Quantity}</td>
                                    </tr>
                                )
                            })
                            : <tr><td colSpan="4">No data available</td></tr>
                    }
                </tbody>
            </Table>
        </Fragment>
    )
}
export default CRUD;
