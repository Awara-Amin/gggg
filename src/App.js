import React, {useState} from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// const allCategories = items.map((item) => item.category);
// const allCategories = new Set(items.map((item) => item.category));
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories,setCategories] = useState([allCategories]);


const filterItems = (category) => {
  if (category === 'all') {
    setMenuItems(items);


  }
  const newItems = items.filter((item) => item.category === category);
  setMenuItems(newItems);
};
    return (<section className="menu section">
      <div className= 'title'>
        <h2>Our menu</h2>

      <Categories
        categories = {categories}
        filterItems={filterItems}/>

      <Menu
      items={menuItems}/>
      </div>
    </section>
  )
}

export default App;
