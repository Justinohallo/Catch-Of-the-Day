import React from 'react';
import {getFunName} from "../helpers"
import PropTypes from 'prop-types';


class StorePicker extends React.Component{

    goToStore(event){
        event.preventDefault()
        // Grab Text From Input Box
        console.log(this.storeInput.value)
        // Transition from / to /store/:storeId
        this.context.router.history.push(`/store/${this.storeInput.value}`)
    }

    render(){
        return (
            <form className='store-selector' onSubmit={this.goToStore.bind(this)}>
            <h2> Please Enter a Store Name</h2>
            <input type='text' required placeholder='Store Name' defaultValue={getFunName()}
            ref={(input)=> {this.storeInput = input}}/>
            <button type='submit'> Visit Store -></button>
            </form>
        )
    }

}

StorePicker.contextTypes = {
    router: PropTypes.object
}

export default StorePicker

