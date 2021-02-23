"use strict";

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Activities extends _react.default.Component {
  constructor() {
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

  handleChange(event) {
    const {
      name,
      value,
      type,
      checked
    } = event.target;
    type === "checkbox" ? this.setState({
      [name]: checked
    }) : this.setState({
      [name]: value
    });
  }

  activityList() {
    switch (this.state.destination) {
      case 'Maldives':
        return /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "museums",
          onChange: this.handleChange,
          checked: this.state.museums
        }), "Museums", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "sailing",
          onChange: this.handleChange,
          checked: this.state.sailing
        }), "Sailing", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "beach",
          onChange: this.handleChange,
          checked: this.state.beach
        }), "Beach", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "hiking",
          onChange: this.handleChange,
          checked: this.state.hiking
        }), "Hiking", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "boating",
          onChange: this.handleChange,
          checked: this.state.boating
        }), "Boating");
        break;

      case 'New Zealand':
        return /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "cityTours",
          onChange: this.handleChange,
          checked: this.state.cityTours
        }), "City Tours", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "sports",
          onChange: this.handleChange,
          checked: this.state.sports
        }), "Sports", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "cycling",
          onChange: this.handleChange,
          checked: this.state.cycling
        }), "Cycling", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "museums",
          onChange: this.handleChange,
          checked: this.state.museums
        }), "Museums", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "boating",
          onChange: this.handleChange,
          checked: this.state.boating
        }), "Boating");
        break;

      case 'Venice':
        return /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "museums",
          onChange: this.handleChange,
          checked: this.state.museums
        }), "Museums", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "theatre",
          onChange: this.handleChange,
          checked: this.state.theatre
        }), "Theatre", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "parksAndRecreation",
          onChange: this.handleChange,
          checked: this.state.parksAndRecreation
        }), "Parks and Recreation", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "cityTours",
          onChange: this.handleChange,
          checked: this.state.cityTours
        }), "City Tours");
        break;

      case 'Cancun':
        return /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "parksAndRecreation",
          onChange: this.handleChange,
          checked: this.state.parksAndRecreation
        }), "Parks and Recreation", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "beach",
          onChange: this.handleChange,
          checked: this.state.beach
        }), "Beaches", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "boating",
          onChange: this.handleChange,
          checked: this.state.boating
        }), "Boating", /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
          type: "checkbox",
          name: "snorkeling",
          onChange: this.handleChange,
          checked: this.state.snorkeling
        }), "Snorkeling");
        break;

      default:
    }
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("main", null, /*#__PURE__*/_react.default.createElement("select", {
      value: this.state.destination,
      name: "destination",
      onChange: this.handleChange,
      required: true
    }, /*#__PURE__*/_react.default.createElement("option", {
      value: ""
    }, "Choose a Destination"), /*#__PURE__*/_react.default.createElement("option", {
      vlaue: "Maldives"
    }, "Maldives, South Asia"), /*#__PURE__*/_react.default.createElement("option", {
      vlaue: "New Zealand"
    }, "New Zealand"), /*#__PURE__*/_react.default.createElement("option", {
      vlaue: "Venice"
    }, "Venice, Italy"), /*#__PURE__*/_react.default.createElement("option", {
      vlaue: "Cancun"
    }, "Cancun, Mexico")), /*#__PURE__*/_react.default.createElement("br", null), this.activityList(), /*#__PURE__*/_react.default.createElement("br", null));
  }

}

ReactDOM.render( /*#__PURE__*/_react.default.createElement("form", {
  id: 'contact',
  method: 'post',
  action: ''
}, /*#__PURE__*/_react.default.createElement('h3', null, "Destination"), /*#__PURE__*/_react.default.createElement(Activities, null)), document.getElementById('activities'));