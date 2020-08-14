import React from "react"

class BeerDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      beer: null,
    }
  }

  async componentDidMount() {
    try {
      const url = `https://api.punkapi.com/v2/beers/${this.props.match.params.id}`
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      this.setState({ beer: data })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const beer = this.state.beer && this.state.beer[0]
    return (
      <div>
        {!this.state.beer ? (
          <div>Loading</div>
        ) : (
          <div>
            <h1>{beer.name} beer detail</h1>
            <div>Description: {beer.description}</div>
            <div>Contributed By: {beer.contributed_by}</div>
          </div>
        )}
      </div>
    )
  }
}

export default BeerDetail
