import React, {useState} from 'react'
import './PolicyFinder.css'
import { POLICIES } from '../Utilities/Policies';
import { Link } from 'react-router-dom';

function PolicyFinder() {
    const [searchResults, setSearchResults] = useState([]);
    const [keyword, setKeyword] = useState('');

    const searchPolicies = (e) => {
        e.preventDefault();
        const results = POLICIES.filter((policy) =>
        Array.isArray(policy.tag) &&
            policy.tag.some((tag) => tag.includes(keyword.toLowerCase()))
        );
        setSearchResults(results);
    };
  return (
    <>
        <section className='policyFinder'>
            <div className='form-section'>
                <h1>Policy Finder</h1>
                <form onSubmit={searchPolicies}>
                    <div>
                        <label htmlFor="">Your Email:</label>
                        <input type="email" placeholder='abc@xyz.com'/>
                    </div>
                    <div>
                        <label htmlFor="">Property Type:</label>
                        <input 
                            type="text"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                            placeholder='Car'/>
                    </div>
                    <div>
                        <label htmlFor="">Location:</label>
                        <input type="text" placeholder='Lagos, Nigeria'/>
                    </div>
                    <button type='submit'>FIND YOUR POLICY</button>
                </form>
                <ul>
                    {searchResults.map((policy) => (
                        <li key={policy.key}>
                            <Link 
                                to={`/policy/${policy.key}`}
                                target='_blank'>
                                    {policy.title} Cover
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            
        </section>
    </>

  )
}

export default PolicyFinder

//1. This component is a functional component that takes a prop onSearch, 
//which is a function responsible for handling the search functionality.
//2. It uses the useState hook to maintain the state of the keyword inputted by the user.
// When the form is submitted (handleSubmit function), it prevents the default form submission behavior, 
//calls the onSearch function with the current keyword, and clears the input field.
//3. The input field is controlled by the keyword state, meaning its value is derived from the state and 
//updated via the onChange event.