import React from 'react';
import { useSearchParams } from 'react-router-dom';

function SearchParamsStudy(props) {
    const [ searchParams, setSearchParams ] =  useSearchParams();
    console.log(searchParams.get("a"));
    console.log(searchParams.get("b"));

    
    const handleClick = () => {
        const keys = searchParams.keys();
        let newParams = {};
        for(let i = 0; i < searchParams.size; i++) {
            const key = keys.next().value;
            const value = searchParams.get(key);
            newParams = {
                ...newParams,
                [key]: value   
            }
        }
        setSearchParams({...newParams, c: 30});
    }

    return (
        <div>
            <h1>SearchParams</h1>
            <button onClick={handleClick}>c=30 추가</button>
        </div>
    );
}

export default SearchParamsStudy;