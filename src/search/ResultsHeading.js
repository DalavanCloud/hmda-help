import React from 'react'

const ResultsHeading = props => {
  if (props.numOfResults === 0) return <h2>Sorry, no results were found.</h2>

  let resultsText = props.numOfResults === 1 ? 'result' : 'results'
  return (
    <h2>
      {props.numOfResults} {resultsText} found
    </h2>
  )
}

export default ResultsHeading
