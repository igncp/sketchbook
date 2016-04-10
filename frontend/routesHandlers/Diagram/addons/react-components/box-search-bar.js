const SearchBar = React.createClass({
  getInitialState() {
    return {
      showChildren: false,
      str: "",
    }
  },
  onChangeFnFactory(stateProp, eventTargetAttr) {
    return (event) => {
      // Wait till the event loop finishes
      setTimeout(() => {
        const newState = {}
        const { diagram } = this.props

        newState[stateProp] = event.target[eventTargetAttr]
        this.setState(newState)
        diagram.filterByString(this.state, diagram.diagramId)
      }, 0)
    }
  },
  render() {
    return (
      <div>
        <p>Filter by regex</p>
        <p>
          <input type="text" onChange={this.onChangeFnFactory("str", "value")}/>
          <span>Show children of matches:</span>
          <input type="checkbox" onChange={this.onChangeFnFactory("showChildren", "checked")}/>
        </p>
      </div>)
  },
})

const searchBarFactory = function(diagram) {
  const searchBarContainer = diagrams.svg.insertInBodyBeforeSvg("div").attr({
    id: "box-search-bar-container",
  })[0][0]

  ReactDOM.render(<SearchBar diagram={diagram}/>, searchBarContainer)
}

export default searchBarFactory
