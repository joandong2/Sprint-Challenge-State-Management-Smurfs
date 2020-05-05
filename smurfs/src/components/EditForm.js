import React, { useState, useEffect } from "react";

const EditForm = (props) => {
    useEffect(() => {
        setSmurf(props.smurf);
    }, [props]);

    const [smurf, setSmurf] = useState({
        name: props.smurf.name ? props.smurf.name : "",
        age: props.smurf.age ? props.smurf.age : "",
        height: props.smurf.height ? props.smurf.height : "",
    });

    const handleChange = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value,
        });
    };

    const submitHander = (e) => {
        e.preventDefault();
        props.updateHandler(smurf);
        setSmurf({
            name: "",
            age: "",
            height: "",
        });
    };

    return (
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
            <button type="submit" className="btn btn-dark btn-sm">
                Update
            </button>
        </form>
    );
};

export default EditForm;
