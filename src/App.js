import React, { Component } from "react";
import Table from "./Table";


class App extends Component {

    state = {
        characters: [
            {
                name: 'Charlie',
                job: 'Janitor',
            },
            {
                name: 'Mac',
                job: 'Bouncer',
            },
            {
                name: 'Dee',
                job: 'Aspring actress',
            },
            {
                name: 'Dennis',
                job: 'Bartender',
            },
        ],
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

    render() {
        const { characters } = this.state;
        return (
            <div className='container'>
                {/* Bind removeCharacter to this to retain context */}
                <Table characters={characters} removeCharacter={this.removeCharacter.bind(this)} />
            </div>
        );
    }
}

export default App;