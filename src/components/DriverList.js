import React from "react";
import { connect } from "react-redux";
import { fetchDrivers } from "../actions";

class DriverList extends React.Component {
  componentDidMount() {
    this.props.fetchDrivers();
  }
  
  renderList() {
    return this.props.drivers.map((driver) => {
      return (
        <li
          className="card col-3 card d-flex flex-column my-2  "
          key={driver.driverId}
        >
          <div className="card-body">
            <div>
              <div className="card-title lead d-flex w-100 justify-content-between">
                {driver.givenName} {driver.familyName}
                <small>{driver.permanentNumber}</small>
              </div>

              <div className="card-text mb-2">
                <p>
                  <small>Born: {driver.dateOfBirth}</small>
                </p>
                <p>
                <small>Nationality: {driver.nationality}</small>
                </p>
                <small>
                  <a href={driver.url}>{driver.url}</a>
                </small>
              </div>
            </div>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
        <div className="container">
        <h3 className="ml-4">F1 Drivers in 2020</h3>
          <ul className="row">{this.renderList()}</ul>
        </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return { drivers: state.drivers };
};
export default connect(mapStateToProps, { fetchDrivers })(DriverList);
