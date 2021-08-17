import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

// import { Categories } from './data';
import axios from 'axios';

type Category = {
  image: string;
  name: string;
};

type Props = {};

const SideBar: React.FC<Props> = () => {
  const [category, setCategory] = React.useState([]);

  const fetchApi = async () => {
    const data: any = await axios.get('https://node-halipay.herokuapp.com/api/category');
    console.log(data);

    setCategory(data.data.categories);
  };

  React.useEffect(() => {
    fetchApi();
  }, []);

  console.log({ category });

  return (
    <div className='sidebarContainer'>
      <div className='sidebar'>
        <div className='sidebar-header'>
          <p>shop by categories</p>
        </div>
        <ul className='sidebar-body'>
          {category.map((category: Category, idx: number) => (
            <li key={idx}>
              <img src={category?.image} alt={category?.name} />
              <Link to='/'>{category?.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
