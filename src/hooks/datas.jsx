import axios from "axios";

export async function datas() {
    const datas = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
    return datas
}