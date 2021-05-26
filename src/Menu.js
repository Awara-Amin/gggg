import React from 'react';


const Menu = ({items}) => {
  return <div className="section-center">{
        items.map((menuItems) => {
          // deconstruct
          const {id, title, img, desc, price} = menuItems;

          return <article key={id} className="menu-item">
            <img src={img} alt={title} className='photo'/>

            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='proce'>{price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        })
      }</div>
    {/* <h2>menu component</h2>; */
  }
};

export default Menu;
