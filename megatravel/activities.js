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

                    
                    ))

                    break;


                    case 'New Zealand':
                        return(
                            React.createElement("label", null,
                            React.createElement("input", {
                                type: "checkbox",
                                name: "cityTours",
                                onChange: this.handleChange,
                                checked: this.state.cityTours
                            }),
                            "City Tours",
                            
                            React.createElement("br", null),
        
                            React.createElement("input", {
                                type: "checkbox",
                                name: "sports",
                                onChange: this.handleChange,
                                checked: this.state.sports
                            }),
                            "Sports",
        
                            React.createElement("br", null),
        
                            React.createElement("input", {
                                type: "checkbox",
                                name: "cycling",
                                onChange: this.handleChange,
                                checked: this.state.cycling
                            }),
                            "Cycling",
        
                            React.createElement("br", null),
        
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
                                name: "boating",
                                onChange: this.handleChange,
                                checked: this.state.boating
                            }),
                            "Boating",
        
                            
                            ))

                            break;

                            case 'Venice':
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
                                        name: "theatre",
                                        onChange: this.handleChange,
                                        checked: this.state.theatre
                                    }),
                                    "Theatre",
                
                                    React.createElement("br", null),
                
                                    React.createElement("input", {
                                        type: "checkbox",
                                        name: "parksAndRecreation",
                                        onChange: this.handleChange,
                                        checked: this.state.parksAndRecreation
                                    }),
                                    "Parks and Recreation",
                
                                    React.createElement("br", null),
                
                                    React.createElement("input", {
                                        type: "checkbox",
                                        name: "cityTours",
                                        onChange: this.handleChange,
                                        checked: this.state.cityTours
                                    }),
                                    "City Tours",
                
                
                                    
                                    ))

                                    break;


                                    case 'Cancun':
                                return(
                                    React.createElement("label", null,
                                    React.createElement("input", {
                                        type: "checkbox",
                                        name: "parksAndRecreation",
                                        onChange: this.handleChange,
                                        checked: this.state.parksAndRecreation
                                    }),
                                    "Parks and Recreation",
                                    
                                    React.createElement("br", null),
                
                                    React.createElement("input", {
                                        type: "checkbox",
                                        name: "beach",
                                        onChange: this.handleChange,
                                        checked: this.state.beach
                                    }),
                                    "Beaches",
                
                                    React.createElement("br", null),
                
                                    React.createElement("input", {
                                        type: "checkbox",
                                        name: "boating",
                                        onChange: this.handleChange,
                                        checked: this.state.boating
                                    }),
                                    "Boating",
                
                                    React.createElement("br", null),
                
                                    React.createElement("input", {
                                        type: "checkbox",
                                        name: "snorkeling",
                                        onChange: this.handleChange,
                                        checked: this.state.snorkeling
                                    }),
                                    "Snorkeling")
                                )

                                    break;

                                    default:


              
        }
    }

    render(){
        return(
            React.createElement("main", null,
            React.createElement("select",{
            value: this.state.destination,
                name: "destination",
                onChange: this.handleChange,
                required: true
            },

            React.createElement("option", {value: ""}, "Choose a Destination"),
            React.createElement("option", {vlaue: "Maldives"}, "Maldives, South Asia"),
            React.createElement("option", {vlaue: "New Zealand"}, "New Zealand"),
            React.createElement("option", {vlaue: "Venice"}, "Venice, Italy"),
            React.createElement("option", {vlaue: "Cancun"}, "Cancun, Mexico")),

            React.createElement("br", null),

            this.activityList(),

            React.createElement("br", null),


            )
        );
        
    }

}

ReactDOM.render(
    React.createElement("form", {id: 'contact', method: 'post', action:''},
       React.createElement('h3', null, "Destination"),
       React.createElement(Activities, null),
        ),
        document.getElementById('activities')
);