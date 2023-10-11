import axios from "axios";
import { useEffect } from "react";
import { API_URL } from "../../AppConsts";

export default function UserList() {
    useEffect( () => {
        axios.get(API_URL + '/users/')
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.error(err);
            })
    });

    return (
        <>
            <h2>Usuários</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nome</th>
                        <th>Email</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}