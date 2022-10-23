import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Pagination extends Component {
    state = {
        isEditable: false,
        jumpTo: 1,
        currentPage: this.props.currentPage
    }

    handleChange = (e) => {
        this.setState({ jumpTo: e.target.value, currentPage: e.target.value })
    }

    jumpTo = () => {
        this.props.jump(this.state.jumpTo)
        this.setState({
            isEditable: false
        })
    }

    render() {
        return (
            <div className='d-flex justify-content-around my-4 align-items-center'>
                <button className='btn btn-warning' onClick={this.props.prevPage}>previous</button>
                <div className="text-center">
                    {this.state.isEditable ? (
                        <>
                            <input value={this.state.currentPage} type='number' onDoubleClick={() => this.setState({ isEditable: !this.state.isEditable })} onChange={this.handleChange} />
                            <p style={{ 'textDecoration': 'underline', 'cursor': 'pointer' }} onClick={this.jumpTo} className='text-center'>Jump to </p>
                        </>
                    ) : (
                        <p
                            className='text-center'
                            title='Double tap to jump page'
                            onDoubleClick={() => this.setState({ isEditable: !this.state.isEditable })}
                        >
                            {this.props.currentPage} of {this.props.totalPage}
                            <br />
                            <small>
                                Double tap to jump page
                            </small>
                        </p>
                    )}
                </div>
                <button className='btn btn-warning' onClick={this.props.nextPage}>next</button>

            </div>
        )
    }
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPage: PropTypes.number.isRequired,
    nextPage: PropTypes.func.isRequired,
    prevPage: PropTypes.func.isRequired,
    jump: PropTypes.func
}

export default Pagination