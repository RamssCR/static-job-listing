import removeIcon from "../../public/images/icon-remove.svg"
import { useContext } from "react"
import { jobContext } from "../JobContext"
import "../css/header.css"

function Header() {
    const { filteredJobs, removeTag } = useContext(jobContext)
    
    function FilterBar() {
        return (
            <div className="filter-container">
                {filteredJobs.map((tag, index) => {
                    return (
                        <div className="filtered-language" key={index}>
                            <span className="language">{tag}</span><span className="x" onClick={() => removeTag(tag)}><img src={removeIcon} alt="x" /></span>
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <header>
            <div className="img"></div>
            {filteredJobs.length > 0 ? <FilterBar /> : ""}
        </header>
    );
}

export default Header;