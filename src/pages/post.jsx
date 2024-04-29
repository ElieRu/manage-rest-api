import axios from "axios";
import { useParams } from "react-router-dom";


function Post() {

    let id = JSON.parse(useParams().id);

    // let comments = axios.get()
    console.log(id);

    return (<section className="mt-5">
                <div className="container">
                    <div className="row flex-column flex-sm-row">
                        {id}
                    </div>
                </div>
            </section>
        );
}

export default Post;
