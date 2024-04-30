/* eslint-disable no-unused-vars */

import { useId, useState } from "react";
import Posts from "../components/posts/posts.jsx";
import { useNetworkState } from "@uidotdev/usehooks";
import Search from "../components/posts/search.jsx";

export default function Home () {

    // console.log(useId());

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
