import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Wikipedia() {

    const [text, setText] = useState('');
    const [results,setResults] = useState([]);

    useEffect(()=>{
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: text,

                }
            });

            setResults(data.query.search);
        };

        const timeoutId = setTimeout(() => {
            
            if (text) {
                search();
            }
        }, 1000);

        return () => {
            clearTimeout(timeoutId);
        }

    }, [text]);


    const renderResult = results.map((result) => {
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https://en.wikipedia.org?curid = ${result.pageid}`} className="ui button"> ▶️ </a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html:result.snippet }}></span>
                </div>
                
            </div>

        );
    });

    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input className="input" type="text" value={text} onChange={(event) => setText(event.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderResult}
            </div>
        </div>
    )
}

export default Wikipedia
