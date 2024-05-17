import { useParams } from "react-router-dom";
import {JsonPlaceholder} from "../utils/json-placeholder";


function Users() {

    let userId = JSON.parse(useParams().id);

    return (<section className="mt-5">
                <div className="container">
                    <div className="row flex-column flex-sm-row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <JsonPlaceholder data='users' unique={true} id={userId} />
                        </div>
                        <div id="right-comp" className="col-12 col-sm-6 col-md-8">
                            <div id="div-albums" className="border rounded p-2 mb-2" >
                                <a href={`albums/${userId}/`}>Album</a>
                            </div>
                            <div id="div-todos" className="border rounded p-2" >
                                <a href={`todos/${userId}/`}>Todos</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-5">
                        <JsonPlaceholder data='posts' id={userId} />
                    </div>
                </div>
            </section>
        );
}

export default Users;
