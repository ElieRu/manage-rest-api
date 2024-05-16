import { useParams } from "react-router-dom";
// import SearchAlbum from "../components/albums/search";
import { JsonPlaceholder } from "../utils/json-placeholder";

export default function Albums () {

    let userId = JSON.parse(useParams().id);

    return <section className="mt-5">
            <div className="row mb-3">
                {/* <SearchAlbum /> */}
            </div>
            <div className="row">
                <JsonPlaceholder data='albums' id={userId} />
            </div>
        </section>    
}
