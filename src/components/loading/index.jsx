import React from 'react'

function Loading() {
    return (
        <div className='d-flex'>
            <button className="btn btn-primary" type="button" disabled>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true">  </span>
                Loading...
            </button>
        </div>
    )
}



export default Loading