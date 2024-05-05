import { JsonPlaceholder } from "../components/post/json-placeholder";

export default function Photos () {
    
    return <section className="mt-5">
                <div className="mb-3 d-flex justify-content-end">
                    <a href="/" className="btn btn-primary">Back</a>
                </div>
                <div className="row">
                    <JsonPlaceholder data='photos' id={1} />
                </div>
            </section> 
}