import React, { Component} from 'react';
import debounce from 'lodash.debounce';
import styles from './LabelAndInput.module.scss';

class LabelAndInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            labelText: '',
            inputText: '',
            placeholder: ''
        }
        this.onChangeDebounced = debounce(this.onChangeDebounced, 1500);
    }

    componentDidMount(){
        this.setState({
            labelText: this.props.labelText,
            placeholder: this.props.placeholder,
            inputText: this.props.value
        });
    }

    handleInputChange(e){
        let tempValue = e.target.value;
        this.setState({
            inputText: tempValue
        })
        
        this.onChangeDebounced(tempValue)
      }

    onChangeDebounced(value){
        this.props.onTitleChange(value);
    }


    render(){
        return(
            <div className={styles["label-input-container"]}>
                <p>
                    {this.state.labelText} 
                    <span>
                        <input type="text" value={this.state.inputText} placeholder={this.state.placeholder} onChange={(e) => {this.handleInputChange(e)}}></input>
                    </span>
                </p>
            </div>
        );
    }
};

export default LabelAndInput;