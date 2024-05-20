/* eslint-disable no-unused-vars */

import { JsonPlaceholder } from "../utils/json-placeholder";
// import { useNetworkState } from "@uidotdev/usehooks";

export default function Home () {

    return <section className="mt-5">
            <JsonPlaceholder data='posts' />
        </section>
}
