import React from 'react'
import PropTypes from 'prop-types';


function ResultRepresent({ foundResult, currentPage, foundPage }) {
    return (
        <div className='d-flex justify-content-between'>
            <p>About {foundResult} result found</p>
            <p>{currentPage} Page of {foundPage}</p>
        </div>
    )
}

ResultRepresent.propTypes = {
    foundResult: PropTypes.number,
    currentPage: PropTypes.number,
    foundPage: PropTypes.number
}
export default ResultRepresent