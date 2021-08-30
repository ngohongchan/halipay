import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CustomBanner from '../../components/Banner';
import Sort from '../SortContainer';
import { listProduct } from '../../actions/products.actions';

import './styles.scss';
import Loading from '../../components/Loading';
import List from '../../components/List';
import Product from '../../components/Product';
import FilterContainer from '../FilterContainer';
import ProductHorizotal from '../../components/ProductHorizontal';

type Props = {};

const ProductsList: React.FC<Props> = () => {
  const [page, setPage] = React.useState<number>(1);
  const [sort, setSort] = React.useState<string>('All');
  const [filterCategory, setFilterCategory] = React.useState<string>('');
  const [gridView, setGridView] = React.useState<boolean>(true);
  const dispatch = useDispatch();
  const productList = useSelector((state: any) => state.productList);
  const { loading, error, products } = productList;
  const pages = Math.ceil(products?.productsCount / products?.resPerPage) | 0;

  let listProducts = products?.products || [];
  let tempProducts = [...listProducts];

  React.useEffect(() => {
    dispatch(listProduct(page, filterCategory));
  }, [dispatch, page, filterCategory]);

  if (sort === 'All') {
    tempProducts = [...listProducts];
  }

  if (sort === 'price-lowest') {
    tempProducts = tempProducts.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }

      if (a.price > b.price) {
        return 1;
      }

      return 0;
    });
  }

  if (sort === 'price-highest') {
    tempProducts = tempProducts.sort((a, b) => b.price - a.price);
  }

  return (
    <div className='wrapper'>
      <div className='container'>
        <div className='customBanner'>
          <CustomBanner img='./images/banner-Categories.jpg' alt='banner' />
        </div>
        <Sort
          pages={pages}
          page={page}
          sort={sort}
          gridView={gridView}
          setSort={setSort}
          setPage={setPage}
          setGridView={setGridView}
        />
        <div className='filter-category'>
          <div className='row'>
            <div className='col-4'>
              <h3 className='title'>CATEGORIES</h3>
              <FilterContainer setFilterCategory={setFilterCategory} />
            </div>
            <div className='col-8'>
              <div className='row'>
                {products === null || loading ? (
                  <Loading />
                ) : error ? (
                  <h1>{error}</h1>
                ) : gridView ? (
                  <List component={Product} items={tempProducts} width='calc(100% / 4 - 30px)' />
                ) : (
                  <List component={ProductHorizotal} items={tempProducts} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
