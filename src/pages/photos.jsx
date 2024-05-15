import { useParams } from "react-router-dom";
import {JsonPlaceholder} from "../json-placeholder/json-placeholder";

export default function Photos () {
    
    const id = JSON.parse(useParams().id);

    return <section className="mt-5">
                <div className="row">
                    <JsonPlaceholder data='photos' id={id} />
                </div>
            </section> 
}