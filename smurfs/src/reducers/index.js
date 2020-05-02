import {
    QUERY_START,
    QUERY_FETCH_SUCCESS,
    QUERY_POST_SUCCESS,
    QUERY_DELETE_SUCCESS,
    QUERY_FAILURE,
} from "../actions";

const initialState = {
    smurfs: [],
    isFetching: false,
    error: "",
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case QUERY_START:
            return {
                ...state,
                isFetching: true,
            };
        case QUERY_FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
            };
        case QUERY_POST_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
            };
        case QUERY_DELETE_SUCCESS:
            return {
                ...state,
                isFetching: false,
                smurfs: action.payload,
            };
        case QUERY_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: "api fetch fail",
            };
        default:
            return state;
    }
};
