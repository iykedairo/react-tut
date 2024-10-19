import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";


class App extends Component {

    state = {
        characters: [],
    };

    removeCharacter(index) {
        console.log(this);
        const { characters } = this.state;
        this.setState({
            characters: characters.filter((character, i) => {
                return index !== i;
            })
        });
    }

    handleSubmit(character) {
        this.setState({
            characters: [...this.state.characters, character],
        });
    }

    render() {
        const { characters } = this.state;
        return (
            <div className='container'>
                {/* Bind removeCharacter to this to retain context */}
                <Table characters={characters} removeCharacter={this.removeCharacter.bind(this)} />
                <Form handleSubmit={this.handleSubmit.bind(this)} />
            </div>
        );
    }
}

export default App;