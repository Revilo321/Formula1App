import React from "react";
import { connect } from "react-redux";
import { fetchStandings } from "../actions";
import "./Standings.css";

class Standings extends React.Component {
  componentDidMount() {
    this.props.fetchStandings(2020);
  }
  renderList() {
    return this.props.standings.map((standing, index) => {
      return (
        <div>
          <h3>Standings for the 2020 season</h3>
          <table className="table table-hover table-responsive-sm table-bordered ml-1 center">
            <thead key={index} className="table header">
              <tr>
                <th>Position</th>
                <th>Driver</th>
                <th>Constructor</th>
                <th>Points</th>
              </tr>
            </thead>
            {standing.DriverStandings.map((c, i) => (
              <tbody className="table standings">
                <tr key={i}>
                  <td>{c.position}</td>
                  <td>
                    {c.Driver.givenName} {c.Driver.familyName}
                  </td>
                  {c.Constructors.map((t, index) => {
                    if (index === 0) {
                      return <td>{t.name}</td>;
                    }
                  })}
                  <td>{c.points}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row ml-2">
          <div className="">{this.renderList()}</div>
  
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { standings: state.standings };
};
export default connect(mapStateToProps, { fetchStandings })(Standings);
