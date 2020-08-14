import React from "react"
import BeerList from "./BeerList"

class Beer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      beers: null,
    }
  }

  async componentDidMount() {
    try {
      const url = "https://api.punkapi.com/v2/beers"
      const response = await fetch(url)
      const data = await response.json()
      this.setState({ beers: data, loading: false })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        {this.state.loading ? (
          <div>Loading</div>
        ) : (
          <div>
            <h1>List of Beers</h1>
            {this.state.beers.map((beer) => (
              <BeerList key={beer.id} beer={beer} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default Beer
