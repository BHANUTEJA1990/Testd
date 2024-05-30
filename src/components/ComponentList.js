import React, { useEffect, useState } from "react";
import { Background } from "reactflow";


const ComponentList = () => {
    const [components, setComponents] = useState([])
    useEffect(() => {
        setComponents(JSON.parse(localStorage.getItem("component_info")))
    }, [components])

    const renderComponentList = components.length > 0 ? components.map((component) => {
        return (
            <div className="item">
                <div className="component">
                    <div className="header">{component.name}</div>
                    <div>{component.memory}</div>
                    <div>{component.microcontroler}</div>
                    <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }} onClick={() => {
                        const existingComponents = JSON.parse(localStorage.getItem('component_info')) || [];
                        const filter = existingComponents.filter(item => {
                            return item.id !== component.id
                        })
                        console.log(filter)
                        // Add the new component to the array
                        localStorage.setItem('component_info', JSON.stringify(filter))
                        alert(`component deleted successfully ,Component Id :  ${component.id} ,Component Name : ${component.name}`)

                    }}></i>
                </div>
            </div>
        )
    }) : <p>No components .please add components</p>
    return (
        <div className="ui called list">{renderComponentList}</div>
    );

};
export default ComponentList;