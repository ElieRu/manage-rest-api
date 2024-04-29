import { useState } from "react"

export default function Search () {
    const [search, setSearch] = useState("")

    const handleChange = (e) => {
        setSearch(e.target.value) 
    }
    
    return <div className="mb-3 row">
            <div className="col-12 col-md-7 col-lg-8"></div>
            <div className="col-0 col-md-5 col-lg-4">
                <input type="search" 
                    value={search} 
                    onChange={handleChange} 
                    placeholder="Search" 
                    className="form-control" />
            </div>
        </div>
}