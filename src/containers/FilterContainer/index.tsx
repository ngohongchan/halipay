import axios from 'axios';
import React from 'react';

import './styles.scss';
import { Category } from './types';

type Props = {
  setFilterCategory: (name: string) => void;
};

const FilterContainer: React.FC<Props> = ({ setFilterCategory }) => {
  const [category, setCategory] = React.useState<Category[]>([]);

  const fetchAPi = async () => {
    try {
      const { data } = await axios.get('https://node-halipay.herokuapp.com/api/category');
      const categories = data.categories;
      setCategory(categories);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchAPi();
  }, []);

  React.useEffect(() => {
    window.scroll({
      top: 100,
      left: 100
    });
  }, []);

  return (
    <ul className='wideget-content'>
      {category.map((cate: Category) => {
        return (
          <li onClick={() => setFilterCategory(cate.name)} key={cate._id}>
            {cate.name}
          </li>
        );
      })}
    </ul>
  );
};

export default FilterContainer;
