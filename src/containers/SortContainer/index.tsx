import React from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';
// import Loading from '../../components/Loading';

import './styles.scss';

type Props = {
  pages: number;
  page: number;
  sort: string;
  gridView: boolean;
  setSort: (s: string) => void;
  setPage: (index: number) => void;
  setGridView: (toggle: boolean) => void;
};

const data = ['All', 'price-lowest', 'price-highest', 'name-a', 'name-z'];

const Sort: React.FC<Props> = ({ pages, setPage, page, sort, setSort, setGridView, gridView }) => {
  const [state, seState] = React.useState<any>(false);

  const myChangeHandler = (e: any) => {
    const id = e.target.name;
    seState((prevState: any) => {
      return { [id]: !prevState[id] };
    });
  };

  React.useEffect(() => {
    window.scroll({
      top: 0,
      left: 0
    });
  }, [page]);

  return (
    <div className='appendTo-toolbar'>
      <div className='tool-bar'>
        <div className='column-left'>Home / Bibendum</div>
        <div className='column-right'>
          <div className='filters-toolbar-page'>
            <label htmlFor='page' className='label-page'>
              Items per page
            </label>
            <div className='custom-dropdown'>
              <button
                onClick={myChangeHandler}
                type='button'
                name='paginate'
                className='label-tab'
                aria-expanded='false'
              >
                <span className='label-text'>{page}</span>
                <span className='icon-dropdown'>
                  <i className='fa fa-angle-down' aria-hidden='true' />
                </span>
              </button>
              <ul className={state.paginate === true ? `dropdown-menu show` : `dropdown-menu`}>
                {[...Array(pages).fill(0)].map((_, idx) => {
                  return (
                    <li key={idx + 1}>
                      <span onClick={() => setPage(idx + 1)} data-value={idx + 1}>
                        {idx + 1}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='filters-toolbar-page'>
            <label htmlFor='page' className='label-page'>
              Sort by
            </label>
            <div className='custom-dropdown'>
              <button onClick={myChangeHandler} type='button' name='sort' className='label-tab' aria-expanded='false'>
                <span className='label-text'>{sort}</span>
                <span className='icon-dropdown'>
                  <i className='fa fa-angle-down' aria-hidden='true' />
                </span>
              </button>
              <ul className={state.sort === true ? `dropdown-menu show` : `dropdown-menu`}>
                {data.map((s, idx) => {
                  return (
                    <li key={idx}>
                      <span onClick={() => setSort(s)} data-value={s}>
                        {s}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className='filters-toolbar-page'>
            <div className='gridContainer'>
              <div className='btn-container'>
                <button type='button' className={gridView ? `active` : 'button'}>
                  <BsFillGridFill onClick={() => setGridView(true)} />
                </button>
                <button type='button' className={!gridView ? `active` : 'button'}>
                  <BsList onClick={() => setGridView(false)} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Sort);
