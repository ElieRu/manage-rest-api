import axios from "axios";
import { useParams } from "react-router-dom";
import { datas } from "../hooks/datas";


function Post() {

    let id = JSON.parse(useParams().id);

    let lists = []
    datas().then((res) => {
        let datas = res.data;
        lists = datas.map(data => <li key={data.id}>{data.title}</li>)
        console.log();
        
    });

    return (<section className="mt-5">
                <div className="container">
                    <div className="row flex-column flex-sm-row">
                        {lists}
                    </div>
                </div>
            </section>
        );
}

export default Post;
