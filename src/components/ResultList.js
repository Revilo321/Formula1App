import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchResult } from "../actions";

class ResultList extends React.Component {

  renderList() {
    return this.props.results.map((result, index) => {
      return (
        <div>
          <h3>Results for race {result.round}</h3>
          <small className="ml-1">On the {result.Circuit.circuitName} in {result.Circuit.Location.country}</small>
          <div>
          <Link to={"/Races"}>
            <button className="btn btn-outline-secondary w-10 btn-sm align-self-end ml-1 py-1 mb-1">
              Back
            </button>
          </Link>
          
          </div>
          <table className="table table-hover table-responsive-sm table-bordered ml-1 w-100">
            <thead key={index} className="table header">
              <tr>
                <th>Position</th>
                <th>Number</th>
                <th>Driver</th>
                <th>Constructor</th>
                <th>Laps</th>
                <th>Grid</th>
                <th>Time</th>
                <th>Status</th>
                <th>Points</th>
              </tr>
            </thead>
            {/* Problem with the api, it seems like as soon as a driver gets lapped they remove the Time property from that driver. So i have to default the value of Time to 0 */}
            {result.Results.map((c, i) => (
              <tbody className="table standings">
                <tr key={i}>
                  <td>{c.position}</td>
                  <td>{c.Driver.permanentNumber}</td>
                  <td>
                    {c.Driver.givenName} {c.Driver.familyName}
                  </td>
                  <td>{c.Constructor.name}</td>
                  <td>{c.laps}</td>
                  <td>{c.grid}</td>
                  <td>{c.Time !== undefined ? c.Time.time : 0} </td>
                  <td>{c.status}</td>
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
    return(
      <div className="container-fluid">
        <div className="row ml-2">
        {this.renderList()}
        </div>
        
      </div>
    ) 
  }
}

const mapStateToProps = (state) => {
  return { results: state.results };
};
export default connect(mapStateToProps, { fetchResult })(ResultList);
