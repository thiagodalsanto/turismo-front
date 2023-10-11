import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../../AppConsts";

export default function UserList() {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        axios.get(API_URL + '/users/')
            .then(res => {
                console.log(res);
                if( res.status === 200)
                    setUsers(res.data.data);
            })
            .catch(err => {
                console.error(err);
            })
    });

    return (
        <>
            <div className="containe mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10 content-center">
                <h2 className="text-center py-8">Usuários</h2>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3"></th>
                            <th scope="col" class="px-6 py-3">Nome</th>
                            <th scope="col" class="px-6 py-3">Email</th>
                        </tr>
                    </thead>

                    <tbody>
                        { users.map ( u => (
                            <tr key={u.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <td class="py-4 px-4"><img src={u.avatar} alt={u.last_name}/></td>
                                <td class="py-4">{u.first_name} {u.last_name}</td>
                                <td class="py-4">{u.email}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}