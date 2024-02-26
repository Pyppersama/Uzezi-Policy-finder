import React from 'react'
import './PolicyDetail.css'
import { Link } from 'react-router-dom'

function PolicyDetail({ policy }) {
  return (
    <div className='policy-main'>
        <section className="policy-detail">
          <h2>{policy.title}</h2>
          <div className='policy-img'>
            <img src={policy.picture} alt="" />
          </div>
          <div className='policy-words'>
            <p><strong>Coverage:</strong> {policy.coverage}</p>
            <p><strong>Benefits:</strong> {policy.benefits}</p>
            <p><strong>Requirements:</strong> {policy.requirements}</p>
            <p><strong>Premium:</strong> {policy.premium}</p>
            <a href={policy.resources} target="_blank" rel="noopener noreferrer">Learn more</a>
            <Link to="/PolicyFinder">Go back to search</Link>
          </div>
          
        </section>
    </div>
  )
}

export default PolicyDetail

