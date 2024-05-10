/* eslint-disable no-unused-vars */

import Posts from "../components/posts/posts.jsx";
import { useNetworkState } from "@uidotdev/usehooks";

export default function Home () {

    const network = useNetworkState()    

    return <section className="mt-5">
            <div className="container">
                <div className="row">
                    <Posts network={network.online} />
                </div>
            </div>
        </section>
}
