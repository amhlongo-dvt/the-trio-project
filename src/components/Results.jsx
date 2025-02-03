import '../style/Results.css'

export default function Results({resultsData}) {
  return (
    <div className="results">
      <div className="results-pic">
        <img src={resultsData.picUrl} alt=""  className={resultsData.project ? "r-project-pic" : 'r-user-pic'}/>
      </div>
      <div className="results-data">
        <h2 className="results-title">{resultsData.project ? resultsData.title: resultsData.name}</h2>
        <p className="results-date">{resultsData.project ? resultsData.datePosted : resultsData.role}</p>
        <p className="results-bio">{resultsData.summary}</p>
      </div>
    </div>
  )
};
