
import { useParams } from "react-router-dom";
import Comments from "../components/post/comments";
import { users } from "../components/post/description";


export default function Post() {

    let id = JSON.parse(useParams().id);
    let b = ''
    let datas = [
        {id: 1, name: 'elie'},
        {id: 2, name: 'john'},
    ]
    const getData = (datas, id) => {
        for (let i = 0; i < datas.length; i++) {
            if (datas[i].id == id) {
                return datas[i]
            }
        }
    }
    // console.log(users());
    // console.log(getData(users(), 1));

    return (<section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 mb-3">
                            <div className="card border-0">
                                <div className="card-body">
                                    <div>
                                        <h4 className="title-post">Title</h4>
                                        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                                    </div>
                                    <div>
                                        <form><textarea className="form-control mb-2" style={{resize: 'none'}} placeholder="Comment this post"></textarea><button className="btn btn-primary" type="submit">Comment</button></form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Comments postId={id} />
                    </div>
                </div>
            </section>
        );
}

