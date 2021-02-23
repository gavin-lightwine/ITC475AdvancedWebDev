//Activities for contact agent section

import React from 'react';


class Activities extends React.Component{
    constructor(){
        super();
        this.state = {
            destination: "",
            cityTours: false,
            sports: false,
            cycling: false,
            museums: false,
            boating: false,
            sailing: false,
            beach: false,
            hiking: false,
            theatre: false,
            parksAndRecreation: false,
            snorkeling: false

        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(event){
        const {name, value, type, checked} = event.target;
        type === "checkbox" ?
        this.setState({[name]:checked}) : this.setState({[name]: value});
    }


    activityList(){
        switch(this.state.destination){
            case 'Maldives':
                return(
                    React.createElement("label", null,
                    React.createElement("input", {
                        type: "checkbox",
                        name: "museums",
                        onChange: this.handleChange,
                        checked: this.state.museums
                    }),
                    "Museums",
                    
                    React.createElement("br", null),

                    React.createElement("input", {
                        type: "checkbox",
                        name: "sailing",
                        onChange: this.handleChange,
                        checked: this.state.sailing
                    }),
                    "Sailing",

                    React.createElement("br", null),

                    React.createElement("input", {
                        type: "checkbox",
                        name: "beach",
                        onChange: this.handleChange,
                        checked: this.state.beach
                    }),
                    "Beach",

                    React.createElement("br", null),

                    React.createElement("input", {
                        type: "checkbox",
                        name: "hiking",
                        onChange: this.handleChange,
                        checked: this.state.hiking
                    }),
                    "Hiking",

                    React.createElement("br", null),

                    React.createElement("input", {
                        type: "checkbox",
                        name: "boating",
                        onChange: this.handleChange,
                        checked: this.state.boating
                    }),
                    "Boating",

                    
                    ));

                    break;


                    case 'New Zealand':
                        return(
                            React.createElement("label", null,
                            React.createElement("input", {
                                type: "checkbox",
                                name: "museums",
                                onChange: this.handleChange,
                                checked: this.state.museums
                            }),
                            "Museums",
                            
                            React.createElement("br", null),
        
                            React.createElement("input", {
                                type: "checkbox",
                                name: "sailing",
                                onChange: this.handleChange,
                                checked: this.state.sailing
                            }),
                            "Sailing",
        
                            React.createElement("br", null),
        
                            React.createElement("input", {
                                type: "checkbox",
                                name: "beach",
                                onChange: this.handleChange,
                                checked: this.state.beach
                            }),
                            "Beach",
        
                            React.createElement("br", null),
        
                            React.createElement("input", {
                                type: "checkbox",
                                name: "hiking",
                                onChange: this.handleChange,
                                checked: this.state.hiking
                            }),
                            "Hiking",
        
                            React.createElement("br", null),
        
                            React.createElement("input", {
                                type: "checkbox",
                                name: "boating",
                                onChange: this.handleChange,
                                checked: this.state.boating
                            }),
                            "Boating",
        
                            
                            ));
              
        }
    }

}
