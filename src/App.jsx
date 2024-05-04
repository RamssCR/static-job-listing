import Header from './components/Header'
import JobTemplate from './components/JobTemplate'
import { useContext } from 'react'
import { jobContext } from './JobContext'

function App() {
  const { jobs, filteredJobs } = useContext(jobContext);

  return (
    <main className="main-container">
      <Header />
      <div className="jobs-list">
        {filteredJobs.length === 0 ? (
          // if empty, show all
          jobs.map(job => (
            <JobTemplate key={job.id} jobInfo={job} tags={[job.role, job.level, ...job.languages, ...job.tools]} />
          ))
        ) : (
          // if any value's on the array, filter the components
          jobs.filter(job => {
            const tags = [job.role, job.level, ...job.languages, ...job.tools];
            return filteredJobs.every(filteredTag => tags.includes(filteredTag));
          }).map(filteredJob => (
            <JobTemplate key={filteredJob.id} jobInfo={filteredJob} tags={[filteredJob.role, filteredJob.level, ...filteredJob.languages, ...filteredJob.tools]} />
          ))
        )}
      </div>
    </main>
  )
}

export default App
