var data = {
  countries: [
    {
      name: 'Canada',
      regions: [
        {
          name: 'Alberta',
          cities: [
            {
              name: 'Calgary'
            },
            {
              name: 'Edmonton'
            }
          ]
        },
        {
          name: 'British Columbia',
          cities: [
            {
              name: 'Vancouver'
            },
            {
              name: 'Victoria'
            }
          ]
        }
      ]
    },
    {
      name: 'USA',
      regions: [
        {
          name: 'Iowa',
          cities: [
            {
              name: 'Ames'
            },
            {
              name: 'Iowa City'
            }
          ]
        },
        {
          name: 'Minnesota',
          cities: [
            {
              name: 'Minneapolis'
            },
            {
              name: 'St. Paul'
            }
          ]
        }
      ]
    }
  ]
};

class City extends React.Component {
  render() {
    return (
      <div> {this.props.name} </div>
    )
  }
}

class Region extends React.Component {
  render() {
    return (
      <div className="region">
        <h2> {this.props.name} </h2>
        <div> {this.props.cities.map(function(city){
          return (
            <City name={city.name} />
          )
        })}
        </div>
      </div>
    )
  }
}

class Country extends React.Component {
  render() {
    return (        
      <div className="country">
          <h2> {this.props.name} </h2>
          <div>{this.props.regions.map(function(region){
            return (
              <Region name={region.name} cities={region.cities} />
            )
           })}
          </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.data.countries.map(function(country) {
          return (
            <Country name={country.name} regions={country.regions} />
          )
        })}
      </div>
    )
  }
 }

ReactDOM.render(
  <App data={data} />,
  document.getElementById('container')
);