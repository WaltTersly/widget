import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

function Translate() {

    

    const langOptions = [
        {
            label: 'Afrikaans',
            value: 'af',
        },
        {
            label: 'Arab',
            value: 'ar',
        },
        {
            label: 'Hindi',
            value: 'hi',
        },
        {
            label: 'Chinese',
            value: 'zh',
        },
    ];

    const [language, setLanguage] = useState(langOptions[0]);
    const [text, setText] = useState('');

    return (
        <div className="ui container" >
            <div className="ui form">
                <div className="field">
                    <label> ENTER A PHRASE</label>
                    <input value={text} type="text" onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown label="Select a Language" options={langOptions} selected={language} onSelected={setLanguage} />
            <hr />
            <h3 className="ui header"> Translation </h3>
            <Convert text = {text} language = {language} />
        </div>
    )
}

export default Translate;
