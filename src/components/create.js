import React from "react";

class CreateComponent extends React.Component {
    state = {
        name: "",
        memory: "",
        microcontroler: ""
    };


    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.memory === "" || this.state.microcontroler === "") {
            alert("All fields are mandatory!");
            return;
        }

        const newComponent = {
            id: this.generateUniqueId(),
            name: this.state.name,
            memory: this.state.memory,
            microcontroler: this.state.microcontroler
        };

        // Retrieve existing components from local storage
        const existingComponents = JSON.parse(localStorage.getItem('component_info')) || [];

        // Add the new component to the array
        existingComponents.push(newComponent);

        // Store the updated array back in local storage
        localStorage.setItem('component_info', JSON.stringify(existingComponents));

        this.setState({ name: "", memory: "", microcontroler: "", ReactFlow: "" });
    };

    // Function to generate a unique ID
    generateUniqueId = () => {
        return Math.random().toString(36).substr(2, 9); // Example of generating a random ID
    };



    render() {
        return (
            <div className="ui main" style={{ marginLeft: '5px' }}>
                <h2 style={{ marginTop: '40px' }}>Model View</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" style={{ width: "25%" }} placeholder="Name"
                            value={this.state.name}
                            onChange={(e) => this.setState({ name: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Memory</label>
                        <input type="text" name="memory" style={{ width: "25%" }} placeholder="Memory"
                            value={this.state.memory}
                            onChange={(e) => this.setState({ memory: e.target.value })} />
                    </div>
                    <div className="field">
                        <label>Microcontroller</label>
                        <input type="text" name="microcontroller" style={{ width: "25%" }} placeholder="Microcontroller"
                            value={this.state.microcontroler}
                            onChange={(e) => this.setState({ microcontroler: e.target.value })} />
                    </div>
                    <button className="ui button blue" type="submit">Create Component</button>
                </form>
            </div>
        );
    }
}

export default CreateComponent;
