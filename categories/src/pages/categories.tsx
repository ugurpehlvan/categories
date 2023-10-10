import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../actions/categoryActions';

// styles
import styles from './categories.module.css';

type RootState = {
    data: {
        categories: string[],
        selectedCategories: string[],
    }
}

const Categories: React.FC = () => {
    const dispatch = useDispatch();
    const { categories, selectedCategories } = useSelector((state: RootState) => state.data);

    const [search, setSearch] = React.useState<string>('');
    const [renderCategories, setRenderCategories] = React.useState<string[]>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value === '') {
            setRenderCategories(categories);
        } else {
            setSearch(event.target.value);
        }
    };

    const handleItemSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            dispatch(selectCategories([...selectedCategories, event.target.value]));
        } else {
            dispatch(selectCategories(selectedCategories.filter((item) => item !== event.target.value)));
        }
    };

    const handleSearchClick = () => {
        const data = categories
            ?.filter((category) => !selectedCategories?.includes(category))
            ?.filter((category) => category?.toLowerCase()?.includes(search.toLowerCase()))
            ?.map((category) => category) || [];

        setRenderCategories(data);
    }

    useEffect(() => {
        setRenderCategories(categories);
    }, [categories]);

    if (!categories?.length) {
		return <div>Loading...</div>;
	}

    return (
        <div className={styles.categories_container}>
            <div className={styles.content}>
                <h3 className={styles.header}>Kategoriler</h3>
                <div className={styles.image_container}>
                    <input 
                        placeholder='kategori ara...' 
                        className={styles.search} 
                        type="search" 
                        onChange={handleChange} 
                    />
                    <img className={styles.image} src={process.env.PUBLIC_URL + '/assets/search.svg'} alt="search" />
                </div>
                <div className={styles.list}>
                    {
                        selectedCategories.map((category, index) => (
                            <div className={styles.list_item} key={index}>
                                <input onChange={handleItemSelect} checked={selectedCategories.includes(category)} value={category} className={styles.check_box} type="checkbox" />
                                <div>{category}</div>
                            </div>
                        ))
                    }
                    {renderCategories?.filter((category) => !selectedCategories?.includes(category))?.map((category:any, index:number) => (
                        <div className={styles.list_item} key={index}>
                            <input onChange={handleItemSelect} checked={selectedCategories.includes(category)} value={category} className={styles.check_box} type="checkbox" />
                            <div>{category}</div>
                        </div>
                    ))}
                </div>
                <button onClick={handleSearchClick} className={styles.button}>Ara</button>
            </div>
        </div>
    )
}

export default Categories;