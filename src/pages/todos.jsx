import { JsonPlaceholder } from "../components/post/json-placeholder";

export default function Todos () {
    return <section className="mt-5">
            <div className="container">
                <div className="row">
                    <JsonPlaceholder data='todos' id={1} />
                </div>
            </div>
        </section>
}
