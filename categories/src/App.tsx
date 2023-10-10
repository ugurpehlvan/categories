import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectCategories, fetchCategories } from './actions/categoryActions';
import './App.css';
// pages
import Categories from './pages/categories';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const { selectedCategories } = localStorage.getItem('selectedCategories') ? JSON.parse(localStorage.getItem('selectedCategories') || '') : { selectedCategories: [] };
        dispatch(selectCategories([...selectedCategories]));
		dispatch(fetchCategories() as any);
    }, [dispatch]);

	return (
		<div className="App">
			<Categories />
		</div>
	);
}

export default App;
