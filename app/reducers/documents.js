import {
  LOAD_DOCS_REQUEST, LOAD_DOCS_SUCCESS, LOAD_DOCS_ERROR, EMPTY_DOCS,
  LOAD_SINGLE_DOC_REQUEST, LOAD_SINGLE_DOC_SUCCESS, LOAD_SINGLE_DOC_ERROR
} from '../constants/actionTypes';


const initialState = {
  isFetching: false,
  documents: [],
  selectedDocs: {}
};

const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DOCS_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_DOCS_SUCCESS:
      return { ...state, isFetching: false, documents: [...action.documents], lastKey: action.lastKey };
    case LOAD_DOCS_ERROR:
      return { ...state, isFetching: false, errorMessage: action.message };
    case LOAD_SINGLE_DOC_REQUEST:
      return { ...state, isFetching: true };
    case LOAD_SINGLE_DOC_SUCCESS:
      return { ...state, isFetching: false, selectedDocs: { ...state.selectedDocs, [action.data.uid]: action.data } };
    case LOAD_SINGLE_DOC_ERROR:
      return { ...state, isFetching: false, errorMessage: action.message };
    case EMPTY_DOCS:
      return { ...state, documents: [] };
    default:
      return state;
  }
};

export default documentReducer;
