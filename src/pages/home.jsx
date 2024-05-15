/* eslint-disable no-unused-vars */

import { JsonPlaceholder } from "../json-placeholder/json-placeholder";
import { useNetworkState } from "@uidotdev/usehooks";

export default function Home () {

    // console.log(datas);
    const network = useNetworkState()    

    return <section className="mt-5">
            <div className="container">
                <div className="row">
                    
                    <JsonPlaceholder data='posts' />
                    
                </div>
            </div>
        </section>
}
