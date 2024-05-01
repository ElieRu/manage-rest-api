
import { useParams } from "react-router-dom";
import Comments from "../components/post/comments";
import { Place } from "../components/post/json-placeholder";


export default function Post() {

    let id = JSON.parse(useParams().id);

    return (<section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <Place data='posts' id={id} />
                        </div>
                        <Comments postId={id} />
                    </div>
                </div>
            </section>
        );
}

