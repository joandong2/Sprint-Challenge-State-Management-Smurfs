import axios from "axios";

export const QUERY_START = "QUERY_START";
export const QUERY_POST_SUCCESS = "QUERY_POST_SUCCESS";
export const QUERY_FETCH_SUCCESS = "QUERY_FETCH_SUCCESS";
export const QUERY_FETCH_SINGLE_SUCCESS = "QUERY_FETCH_SINGLE_SUCCESS";
export const QUERY_UPDATE_SUCCESS = "QUERY_UPDATE_SUCCESS";
export const QUERY_DELETE_SUCCESS = "QUERY_DELETE_SUCCESS";
export const QUERY_FAILURE = "QUERY_FAILURE";

export const getSmurfs = () => (dispatch) => {
    dispatch({ type: QUERY_START });
    axios
        .get(`http://localhost:3333/smurfs`)
        .then((res) => {
            dispatch({ type: QUERY_FETCH_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({
                type: QUERY_FAILURE,
                payload: "Uh oh, something has gone wrong, Error in API call.",
            });
        });
};

export const getSmurf = (id) => (dispatch) => {
    dispatch({ type: QUERY_START });
    axios
        .get(`http://localhost:3333/smurfs`)
        .then((res) => {
            dispatch({
                type: QUERY_FETCH_SINGLE_SUCCESS,
                payload: {
                    smurfs: res.data,
                    id: id,
                },
            });
        })
        .catch((err) => {
            dispatch({
                type: QUERY_FAILURE,
                payload: "Uh oh, something has gone wrong, Error in API call.",
            });
        });
};

export const postSmurf = (name, age, height, id) => (dispatch) => {
    dispatch({ type: QUERY_START });
    axios
        .post(`http://localhost:3333/smurfs`, {
            name,
            age,
            height,
            id,
        })
        .then((res) => {
            dispatch({ type: QUERY_POST_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({
                type: QUERY_FAILURE,
                payload: "Uh oh, something has gone wrong, Error in API call.",
            });
        });
};

export const updateSmurf = (id, name, age, height) => (dispatch) => {
    axios
        .put(`http://localhost:3333/smurfs/${id}`, {
            name,
            age,
            height,
        })
        .then((res) => {
            dispatch({ type: QUERY_UPDATE_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({
                type: QUERY_FAILURE,
                payload: "Uh oh, something has gone wrong, Error in API call.",
            });
        });
};

export const deleteSmurf = (id) => (dispatch) => {
    dispatch({ type: QUERY_START });
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then((res) => {
            dispatch({ type: QUERY_DELETE_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({
                type: QUERY_FAILURE,
                payload: "Uh oh, something has gone wrong, Error in API call.",
            });
        });
};
