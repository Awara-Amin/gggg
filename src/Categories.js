import React from 'react';

const Categories = ({categories, filterItems}) => {
  return (
  <div className ="btn-container">
    {categories.map((category, index) =>{
      <button
        type="button"
        className="filter-btn"
        key={index}
        onClick{() => filterItems(category)}
        >
      {category}
      </button>
    })}

  </div>
)
};

export default Categories;


{/* <button className='filter-btn' onClick={() =>
filterItems('all')}>all</button>

<button className='filter-btn' onClick={() =>
filterItems('breakfast')}>Breakfast</button> */}
