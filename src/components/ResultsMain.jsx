import ResultsNav from "./ResultsNav"
import Results from "./Results"

export default function ResultsMain({resultsData}) {
  return(
    <section className="results-section">
      <h1 className="r-section-h1">Results</h1>
      <ResultsNav />
      {
        resultsData.map((resuls, index) =>{
          return ( <a href=""> <Results resultsData={resuls}  key={index}/> </a>)
        })
      }
    </section>
  )
};
