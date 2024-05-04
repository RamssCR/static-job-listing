import "../css/jobTemplate.css"
import { useContext } from "react";
import { jobContext } from "../JobContext";

function JobTemplate({jobInfo, tags}) {
    const { setFilteredJobs, filteredJobs } = useContext(jobContext)

    return (
        <div className="job-template" style={{borderLeft: jobInfo.featured ? "5px solid #5ba4a4" : "none"}}>
            <div className="img-info-container">
                <div className="img-container">
                    <img src={jobInfo.logo} alt="logo" />
                </div>
                <div className="job-info-container">
                    <div className="company-name-nf">
                        <span className="name">{jobInfo.company}</span>
                        {/* if it's new or featured */}
                        <div className="new-featured-container">
                            {jobInfo.new ? <span className="new-job">NEW</span> : ""}
                            {jobInfo.featured ? <span className="featured-job">FEATURED</span> : ""}
                        </div>
                    </div>
                    <div className="job-title">{jobInfo.position}</div>
                    <div className="job-details">
                        <span className="posted-day">{jobInfo.postedAt}</span>
                        {/* bullet */}
                        <span className="bullet">&bull;</span>
                        <span className="job-time">{jobInfo.contract}</span>
                        {/* bullet */}
                        <span className="bullet">&bull;</span>
                        <span className="job-region">{jobInfo.location}</span>
                    </div>
                </div>
            </div>
            <div className="related-languages-container">
                {tags.map((tag, index) => {
                    return (
                        <span 
                            className="related-items" 
                            key={index}
                            onClick={() => {
                                //adding a tag to the array only if it doesn't have the same value
                                if (!filteredJobs.includes(tag)) {
                                    setFilteredJobs(prevJobs => [...prevJobs, tag]);
                                }
                            }}>
                                {tag}
                        </span>
                    )
                })}
            </div>
        </div>
    );
}

export default JobTemplate;