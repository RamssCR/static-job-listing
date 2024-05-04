import { useState, useEffect, createContext } from "react";

export const jobContext = createContext();

export function JobContextProvider(props) {
    //state for all the jobs
    const [jobs, setJobs] = useState([])
    //state for tags to filter the jobs
    const [filteredJobs, setFilteredJobs] = useState([])
    //state to merge level, role, languages and tools
    const [tags, setTags] = useState([])

    useEffect(() => {
        //calling the JSON file
        const fetchJobs = async () => {
            try {
                const fetchedJobData = await fetch('./src/data.json');
                const newData = await fetchedJobData.json();
                setJobs(newData);
            } catch (error) {
                console.error(error);
            }
        }

        fetchJobs();
    }, [])

    //verifying if there's info in the state 'jobs' to be used as an API
    if (!jobs) return

    //function to remove a tag from the filter bar
    function removeTag(tag) {
        setFilteredJobs(filteredJobs.filter(job => job !== tag))
    }

    return (
        <jobContext.Provider value={{jobs, filteredJobs, setFilteredJobs, removeTag, tags, setTags, setJobs}}>
            {props.children}
        </jobContext.Provider>
    )
}