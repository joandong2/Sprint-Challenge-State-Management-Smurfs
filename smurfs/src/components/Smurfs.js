import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSmurfs, getSmurf, postSmurf, deleteSmurf } from "../actions";
import AddForm from "./AddForm.js";
import EditForm from "./EditForm.js";

const User = ({
    getSmurfs,
    getSmurf,
    postSmurf,
    deleteSmurf,
    isFetching,
    activeSmurf,
    smurfs,
    error,
}) => {
    useEffect(() => {
        getSmurfs();
    }, [getSmurfs, postSmurf]);

    const addHandler = (smurf) => {
        postSmurf(smurf.name, smurf.age, smurf.height, smurfs.length);
    };

    const [editState, setEditState] = useState(false);

    const editHandler = (e) => {
        setEditState(true);
        getSmurf(e.target.getAttribute("data-id"));
    };

    // const updateHandler = (e) => {
    //     editSmurf(e.target.getAttribute("data-id"));
    // };

    const deleteHandler = (e) => {
        deleteSmurf(e.target.getAttribute("data-id"));
    };

    return (
        <div className="row smurf-container">
            <div className="col-sm-3">
                {editState ? (
                    <div>
                        <p>Edit</p>
                        {isFetching ? (
                            <p>Loading...</p>
                        ) : (
                            <EditForm
                                editHandler={editHandler}
                                smurf={activeSmurf}
                            />
                        )}
                    </div>
                ) : (
                    <>
                        <p>Add</p>
                        <AddForm addHandler={addHandler} />
                    </>
                )}
            </div>
            <div className="col-sm-9">
                {isFetching ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <table className="table table-hover">
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
                                                      onClick={editHandler}
                                                      className="btn btn-warning btn-sm"
                                                  >
                                                      Edit
                                                  </button>
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
    return {
        activeSmurf: state.smurf[0],
        smurfs: state.smurfs,
        isFetching: state.isFetching,
        error: state.error,
    };
};

export default connect(mapStateToProps, {
    getSmurfs,
    getSmurf,
    postSmurf,
    deleteSmurf,
})(User);
