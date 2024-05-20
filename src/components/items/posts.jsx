/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";
import Pagination from "../other/pagination";



export default function ListPosts({posts}) {
    const location = useLocation();
    const currentPath = location.pathname
    const routeName = currentPath.split('/')[1];

    return <div className="row">
                <Pagination posts={posts} routeName={routeName} />
            </div>
}

            