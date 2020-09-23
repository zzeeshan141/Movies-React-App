import React, { Component} from 'react';
import './style/style.scss';

class LabelAndSelect extends Component{
    renderOptions(items){
        return items.map((item) => {
            return (<option value={item.value} key={item.id} id={item.id}>{item.value}</option>);
        });
    }

    render(){
        if(this.props.useDefaultOption){
            return(
                <div className="label-select-container">
                    <p>
                        {this.props.labelText} 
                        <span className="">
                            <select onChange={(e) => {this.props.onChange(e.target.value, e.target.selectedOptions[0].id)}}>
                                <option value="All" key="0">All</option>
                                {this.renderOptions(this.props.items)}
                            </select>
                        </span>
                    </p>
                </div>
            );
        }
        return(
            <div className="label-select-container">
                <p>
                    {this.props.labelText} 
                    <span className="">
                        <select onChange={(e) => {this.props.onChange(e.target.value, e.target.selectedOptions[0].id)}}>
                            {this.renderOptions(this.props.items)}
                        </select>
                    </span>
                </p>
            </div>
        );
    }
};

export default LabelAndSelect;