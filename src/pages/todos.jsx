import { useParams } from "react-router-dom";
import {JsonPlaceholder} from "../utils/json-placeholder";

export default function Todos () {

    let userId = JSON.parse(useParams().userId)

    return <section className="mt-5">
            <div className="container">
                <div className="row">
                    <JsonPlaceholder data='todos' id={userId} />
                </div>
            </div>
        </section>
}
