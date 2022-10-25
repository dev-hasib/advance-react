import React from 'react'
import PropTypes from 'prop-types';

const getDateString = (date) => new Date(date).toDateString()


const NewsItem = ({ news }) => {
    return (
        <div key={news.title} className='card mb-3'>
            <div className="card-header">
                {
                    news.urlToImage && <img className='card-img-top' src={news.urlToImage} alt={news.title} />
                }
            </div>
            <div className="card-body">
                <a target='_blank' href={news.url} rel='noopener noreferrer'>
                    {<h4 className='card-title'>{news.title}</h4>}
                </a>
                <a href={news.url} target='_blank' rel='noopener noreferrer'>
                    {<p className='card-text'>{news.content}</p>}
                </a>
                <div className="d-flex justify-content-between mt-4">
                    <small>
                        <strong>
                            {getDateString(news.publishedAt)}
                        </strong>
                    </small>
                    <small style={{
                        padding: '5px 10px',
                        backgroundColor: '#ededed',
                        color: '#424242',
                        cursor: 'pointer',
                        borderRadius: '5px',
                    }}>
                        <strong>
                            {news.source.name}
                        </strong>
                    </small>
                </div>
            </div>
        </div>
    )
}


const NewsList = ({ newsList }) => {
    return (
        <div>
            {
                (newsList && newsList.length === 0) && setTimeout(() => <h2>Data Not Found .....</h2>, 10000)
            }
            {
                newsList && newsList.length > 0 && newsList.map(item => <NewsItem key={item.title} news={item} />)
            }
        </div>
    )
}

NewsList.propTypes = {
    newsList: PropTypes.array,
}

export default NewsList
