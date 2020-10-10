import React, { useState, useEffect} from 'react';
import styles from './LabelAndInput.module.scss';

const LabelAndInput = (props) => {

    const [labelText, setLabelText] = useState('');
    const [inputText, setInputText] = useState('');
    const [placeholder, setPlaceholder] = useState('');

    useEffect(() => {
        setLabelText(props.labelText);
        setInputText(props.value);
        setPlaceholder(props.placeholder);
    }, []);


    useEffect(() => {
        const timeOutId = setTimeout(() => {props.onTitleChange(inputText)}, 1500);
        return () => clearTimeout(timeOutId);
    }, [inputText]);

    return(
        <div className={styles["label-input-container"]}>
            <p>
                {labelText} 
                <span>
                    <input type="text" value={inputText} placeholder={placeholder} onChange={(e) => setInputText(e.target.value)}></input>
                </span>
            </p>
        </div>
    );
};

export default LabelAndInput;