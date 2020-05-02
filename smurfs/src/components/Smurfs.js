import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getSmurf, postSmurf } from "../actions";

const User = ({ getSmurf, postSmurf, isFetching, smurfs, error }) => {
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
    };

    return (
        <div className="row">
            <div className="col-sm-4">
                <form onSubmit={submitHander}>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="name.."
                        value={smurf.name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="age"
                        className="form-control"
                        placeholder="age.."
                        value={smurf.age}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="height"
                        className="form-control"
                        placeholder="height.."
                        value={smurf.height}
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="col-sm-8">
                {isFetching ? (
                    <p>Loading1...</p>
                ) : (
                    <div>
                        {smurfs
                            ? smurfs.map((smurf, index) => (
                                  <div className="smurf" key={index}>
                                      <p>{`${smurf.name}, ${smurf.age}, ${smurf.height}`}</p>
                                  </div>
                              ))
                            : `loading2...`}
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

export default connect(mapStateToProps, { getSmurf, postSmurf })(User);
