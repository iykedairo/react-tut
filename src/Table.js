import React, { Component } from "react";

function TableBody(props) {
    const { characters } = props;
    const rows = characters.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        );
    });

    // Return if single line, needs not parenthenses
    return <tbody> {rows}</tbody>
}

function TableHeader() {
    // Return if single line, needs not parenthenses
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    );
}

class Table extends Component {
    // Return if single line, needs not parenthenses
    render() {
        const { characters, removeCharacter } = this.props;
        return (
            <table>
                <TableHeader />
                <TableBody characters={characters} removeCharacter={removeCharacter} />
            </table>
        );
    }
}

export default Table;
