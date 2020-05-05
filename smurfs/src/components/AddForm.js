import React, { useState } from "react";

const AddForm = (props) => {
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
        props.addHandler(smurf);
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
                Submit
            </button>
        </form>
    );
};

export default AddForm;
