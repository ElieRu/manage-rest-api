
import { useParams } from "react-router-dom";
import Comments from "../components/other/comments";
import { JsonPlaceholder } from "../utils/json-placeholder.jsx";


export default function Post() {

    let id = JSON.parse(useParams().id);

    return <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <JsonPlaceholder data='posts' unique={true} id={id} />
                        </div>
                        <Comments id={id} />
                    </div>
                </div>
            </section>
}

