import React, { Component } from 'react'
import { FormControl } from 'react-bootstrap'
import PropTypes from 'prop-types'

import { NewsCategory } from '../../news/index.js'


class Header extends Component {
    state = {
        searchTerm: ''
    }

    handleSearch = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleKeyUp = (e) => {
        if (e.key === 'Enter') {
            return this.props.searchValue(this.state.searchTerm)
        }
        return false
    }

    handleClick = (e) => {
        // console.dir(e.target.value);
        this.props.handleCategory(e.target.value)
    }


    render() {
        const { category } = this.props
        return (
            <div>
                <div className="my-4">
                    <h1 className='mb-4' style={{ fontWeight: 300 }}>
                        Block Buster Handler
                    </h1>
                    <FormControl
                        type="text"
                        value={this.state.searchTerm}
                        onChange={this.handleSearch}
                        placeholder="Search Topic..."
                        onKeyUp={this.handleKeyUp}
                        name='search'
                    />
                </div>
                <div className='my-3'>
                    {
                        NewsCategory && Object.keys(NewsCategory).map((item) => {
                            return NewsCategory[item] === category ?
                                <button key={item} onClick={this.handleClick} className='btn btn-warning btn-sm m-2' value={item}>{`#${item}`}</button>
                                :
                                <button value={item} key={item} onClick={this.handleClick} className='btn btn-light btn-sm m-2'>{`#${item}`}</button>
                        })
                    }
                </div>
            </div>
        )
    }
}

Header.propTypes = {
    category: PropTypes.string,
    handleCategory: PropTypes.func,
    searchValue: PropTypes.func
}

export default Header