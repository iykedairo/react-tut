import React, { Component } from "react";

class Form extends Component {
    initialState = {
        name: '',
        job: '',
    };

    state = this.initialState;

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    submitForm() {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name, job } = this.state;

        return (
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name} onChange={this.handleChange.bind(this)} />
                <label htmlFor="job">Job</label>
                <input type="text" id="job" name="job" value={job} onChange={this.handleChange.bind(this)} />
                <input type="button" value="Add Character" onClick={this.submitForm.bind(this)} />
            </form>
        );
    }
}

export default Form;
