
import { useParams } from "react-router-dom";
import Comments from "../components/comments";
import { JsonPlaceholder } from "../json-placeholder/json-placeholder.jsx";


export default function Post() {

    let id = JSON.parse(useParams().id);

    return <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <JsonPlaceholder data='posts' id={id} />
                        </div>
                        <Comments postId={id} />
                    </div>
                </div>
            </section>
}

