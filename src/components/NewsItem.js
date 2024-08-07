import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NewsItem extends Component {
    constructor() {
        super()
        console.log("")
    }
  render() {
    let {title, description, imageURL, newsUrl, author, date, source} = this.props; 
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>

            <span class="badge rounded-pill bg-danger">{source}</span>

          </div>
            <img src={!imageURL?"https://images.barrons.com/im-449584/social":imageURL} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">
                  {title}...
                </h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>
                <div style={{display: 'flex', gap: '10px'}}>
                  <a rel="noreferrer" href={newsUrl} target='_black' className="btn btn-sm btn-dark">Read More</a>
                  <Link to={`/summarize/${encodeURIComponent(newsUrl)}`} className="btn btn-sm btn-danger">Summarize</Link>
                </div>
                
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
