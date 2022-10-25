import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/style.css'
// import { NewsCategory, Newses } from '../news/index'
import NewsList from './newslist';
import Pagination from './pagination/pagination';
import ResultRepresent from './result-represent';
import Loading from './loading';
import Header from './header';
import axios from 'axios';

// import Test from './test/test';

// https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4231b9412a70435496b29dcb6ce1d60f

export default class App extends Component {

    state = {
        newses: [],
        category: 'technology',
        page: 1,
        searchTerm: '',
        resultFound: 0,
        totalPage: 1
    }
    componentDidMount = async () => {
        const url = `${process.env.REACT_APP_BASE_URL}?category=${this.state.category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=10&page=${this.state.page}&language=en`
        const data = await axios.get(url)
        console.log(data);
        this.setState({
            newses: data.data.articles,
            resultFound: data.data.totalResults,
            totalPage: data.data.totalResults / 10
        })
    }

    handleCategory = category => {
        this.setState({ category, page: 1 })
    }

    componentDidUpdate = async (prevPro, prevState) => {
        if (prevState.category !== this.state.category || prevState.searchTerm !== this.state.searchTerm || prevState.page !== this.state.page) {

            const url = `${process.env.REACT_APP_BASE_URL}?category=${this.state.category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=10&q=${this.state.searchTerm}&page=${this.state.page}&language=en`
            const data = await axios.get(url)
            console.log(data.data)
            this.setState({
                newses: data.data.articles,
                resultFound: data.data.totalResults,
                totalPage: Math.floor(data.data.totalResults / 10),
                searchTerm: '',
            })
        }
    }
    searchValue = search => {
        this.setState({ searchTerm: search })
    }

    nextPage = () => {
        if (this.state.page < this.state.totalPage) {
            this.setState({
                page: this.state.page + 1
            })
        }
    }
    prevPage = () => {
        if (this.state.page > 1) {
            this.setState({
                page: this.state.page - 1
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    <div className="col-sm-6 offset-md-3">
                        <Header
                            searchValue={this.searchValue}
                            category={this.state.category}
                            handleCategory={this.handleCategory} /
                        >
                        {this.state.newses.length === 0 && <Loading />}

                        <ResultRepresent
                            foundResult={this.state.resultFound}
                            currentPage={this.state.page}
                            foundPage={this.state.totalPage}
                        />
                        <NewsList newsList={this.state.newses} />
                        <Pagination
                            currentPage={this.state.page}
                            totalPage={this.state.totalPage}
                            nextPage={this.nextPage}
                            prevPage={this.prevPage}
                            jump={(cp) => this.setState({ page: Number(cp) })}
                        />
                    </div>
                </div>
                {/* <Test /> */}
            </div>
        )
    }
}

