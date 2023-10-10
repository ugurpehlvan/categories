import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

const store = configureStore({
  reducer: rootReducer,
});

const saveState = (state:any) => {
  try {
    const serializedState = JSON.stringify({
      selectedCategories: state.data.selectedCategories,
    });
    localStorage.setItem('selectedCategories', serializedState);
  } catch (err) {
    console.error('Error saving state to local storage:', err);
  }
};

store.subscribe(() => {
  saveState(store.getState());
});

export default store;