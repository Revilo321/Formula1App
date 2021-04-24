import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchRaces } from "../actions";
import { fetchResult } from "../actions";

class RaceList extends React.Component {
  componentDidMount() {
    this.props.fetchRaces();
  }

  renderList() {
    return this.props.races.map((race) => {
      return (
        <div className="card col-sm-4 my-1 " key={race.round}>
          <div className="card-body">
            <h5 className="card-title">{race.raceName}</h5>
          </div>
          <div>
            <div className="card-text ml-4">
              <p className="">
                {race.Circuit.circuitName} - {race.Circuit.Location.country}
              </p>
            </div>
            <div className="card-footer">
              <div className="text-center text-muted d-flex justify-content-between">
                <strong>Race date:{race.date}</strong>
                <span>
                  <strong>Round {race.round}</strong>
                </span>
              </div>

              <Link to={"/RaceResults"}>
                <button
                  className="btn btn-outline-secondary w-100 align-self-end"
                  onClick={() =>
                    this.props.fetchResult(race.season, race.round)
                  }
                >
                  Show results
                </button>
              </Link>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <h3 className="mx-md-n3">All races of 2020</h3>
        <div className="row">{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { races: state.races };
};
export default connect(mapStateToProps, { fetchRaces, fetchResult })(RaceList);
