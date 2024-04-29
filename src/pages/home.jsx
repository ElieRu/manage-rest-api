/* eslint-disable no-unused-vars */

import { useState } from "react";
import Posts from "../components/posts.jsx";
import { useNetworkState } from "@uidotdev/usehooks";
import Search from "../components/search.jsx";

export default function Home () {

    // const [search, setSearch] = useState("")

    // const handleChange = (e) => {
    //     setSearch(e.target.value) 
    // }

    const network = useNetworkState()

    return <section className="mt-5">
            <div className="container">
                <Search />
                <div className="row">
                    <Posts network={network.online} />
                </div>
            </div>
        </section>
}
