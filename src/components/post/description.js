import axios from "axios";
import { useEffect, useState } from "react";

export function users() {
    const [users, setUsers] = useState(null)

    const datas = async () => {
        try {
            const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`)
            setUsers(resp.data)
        } catch (error) {
            console.error(error);
        }
    }
    
    useEffect(() => {
        datas();
    }, []);

    console.log(datas());
    
    return users;
}
