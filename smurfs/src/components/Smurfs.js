import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf, postSmurf, deleteSmurf } from "../actions";

const User = ({
    getSmurf,
    postSmurf,
    deleteSmurf,
    isFetching,
    smurfs,
    error,
}) => {
    useEffect(() => {
        getSmurf();
    }, [getSmurf, postSmurf]);

    const [smurf, setSmurf] = useState({
        name: "",
        age: "",
        height: "",
    });

    const handleChange = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value,
        });
    };

    const submitHander = (e) => {
        e.preventDefault();
        postSmurf(smurf.name, smurf.age, smurf.height, smurfs.length);
        setSmurf({
            name: "",
            age: "",
            height: "",
        });
    };

    const deleteHandler = (e) => {
        deleteSmurf(e.target.getAttribute("data-id"));
    };

    return (
        <div className="row smurf-container">
            <div className="col-sm-3">
                <h4>Smurfs Form</h4>
                <form onSubmit={submitHander}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="name.."
                            value={smurf.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="age"
                            className="form-control"
                            placeholder="age.."
                            value={smurf.age}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="height"
                            className="form-control"
                            placeholder="height.."
                            value={smurf.height}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-dark">
                        Submit
                    </button>
                </form>
            </div>
            <div className="col-sm-9">
                {isFetching ? (
                    <p>Loading1...</p>
                ) : (
                    <div>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Age</th>
                                    <th scope="col">Height</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {smurfs
                                    ? smurfs.map((smurf, index) => (
                                          <tr className="smurf" key={smurf.id}>
                                              <td>{smurf.id}</td>
                                              <td>{smurf.name}</td>
                                              <td>{smurf.age} yrs. old</td>
                                              <td>{smurf.height}cm</td>
                                              <td>
                                                  <button
                                                      data-id={smurf.id}
                                                      onClick={deleteHandler}
                                                      className="btn btn-danger btn-sm"
                                                  >
                                                      Delete
                                                  </button>
                                              </td>
                                          </tr>
                                      ))
                                    : `loading2...`}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

// hook up the connect to our store
const mapStateToProps = (state) => {
    console.log("state", state);
    return {
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error,
    };
};

export default connect(mapStateToProps, { getSmurf, postSmurf, deleteSmurf })(
    User
);
