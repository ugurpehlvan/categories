import { FETCH_CATEGORIES, SELECT_CATEGORIES } from '../actions/actionTypes';

interface StateProps {
  categories: string[];
  selectedCategories: string[];
}

const initialState: StateProps = {
  categories: [],
  selectedCategories: [],
};

const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SELECT_CATEGORIES:
      return {
        ...state,
        selectedCategories: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;