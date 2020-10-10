import React from 'react';
import styles from './LabelAndSelect.module.scss';

function renderOptions(items){
    return items.map((item) => {
        return (<option value={item.value} key={item.id} id={item.id}>{item.value}</option>);
    });
}

const LabelAndSelect = (props) => {
    
    if(props.useDefaultOption){
        return(
            <div className={styles["label-select-container"]}>
                <p>
                    {props.labelText} 
                    <span className="">
                        <select onChange={(e) => {props.onChange(e.target.value, e.target.selectedOptions[0].id)}}>
                            <option value="All" key="0">All</option>
                            {renderOptions(props.items)}
                        </select>
                    </span>
                </p>
            </div>
        );
    }
    return(
        <div className={styles["label-select-container"]}>
            <p>
                {props.labelText} 
                <span className="">
                    <select onChange={(e) => {props.onChange(e.target.value, e.target.selectedOptions[0].id)}}>
                        {renderOptions(props.items)}
                    </select>
                </span>
            </p>
        </div>
    );
};

export default LabelAndSelect;