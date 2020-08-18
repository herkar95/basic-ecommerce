import React, { useState } from 'react';
import Header from './js/components/Header';
import Slideshow from './js/components/Slideshow';
import Products from './js/components/Products';
import Navigation from './js/components/Navigation';
import prod from './resources/products.json';
import { v4 as uuid } from 'uuid';

function App() {
  // State
  const [slides, setSlides] = useState([
    'https://source.unsplash.com/RyRpq9SUwAU/1600x900',
    'https://source.unsplash.com/ggZuL3BTSJU/1600x900',
    'https://source.unsplash.com/TMOeGZw9NY4/1600x900',
    'https://source.unsplash.com/yXpA_eCbtzI/1600x900',
    'https://source.unsplash.com/ULmaQh9Gvbg/1600x900',
  ]);
  const [products, setProducts] = useState(prod);
  const [navLinks, setNavLinks] = useState([
    {
      text: 'Show All',
      class: 'all',
      active: true,
    },
    {
      text: 'Shoes',
      class: 'shoes',
      active: false,
    },
    {
      text: 'Socks',
      class: 'socks',
      active: false,
    },
    {
      text: 'T-shirts',
      class: 't-shirts',
      active: false,
    },
    {
      text: 'Hats',
      class: 'hats',
      active: false,
    },
  ]);
  const [cart, setCart] = useState({
    items: [],
    total: 0,
    count: 0,
  });
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  // Shows the mobile menu on smaller screens
  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  // Display products depending on active category
  function handleFilterProducts(target) {
    if (!target.classList.contains('active')) {
      // Applies active class to target element (removes active from other links)
      const links = navLinks.map((link) => {
        link.class === target.className
          ? (link.active = true)
          : (link.active = false);
        return link;
      });
      setNavLinks(links);
    }

    // Contains the filtered products
    let filteredProd = [];

    if (!target.classList.contains('active')) {
      // Filter products matching target element
      target.classList.contains('all')
        ? (filteredProd = prod)
        : (filteredProd = prod.filter(
            (prod) => prod.category === target.className
          ));

      setProducts(filteredProd);
    }
  }

  // Displays the contents of the cart
  function handleOpenCart() {
    setOpen(!open);
  }

  // Adds a product to the cart
  function handleAddToCart(newProduct) {
    // Used to check if product already exists in cart
    let exists = false;

    // If product already exists in cart, add count instead
    let items = cart.items.map((item) => {
      if (item.name === newProduct.name) {
        exists = true;
        item = {
          ...item,
          count: item.count + 1,
        };
      }
      return item;
    });

    // It it's a new product being added
    if (!exists) {
      // Add ID and count props to item
      let cartItem = { ...newProduct, id: uuid(), count: 1 };
      items = [...cart.items, cartItem];
    }

    // Cart with updated values
    const updatedCart = {
      items,
      total: cart.total + newProduct.price,
      count: cart.count + 1,
    };
    setCart(updatedCart);
  }

  // Removes a product from the cart
  function handleRemoveFromCart(id) {
    let items = cart.items.filter((item) => item.id !== id);
    let total = items.reduce((t, currentItem) => {
      return t + currentItem.price * currentItem.count;
    }, 0);
    let count = items.length;

    const updatedCart = {
      items,
      total,
      count,
    };
    setCart(updatedCart);
  }

  return (
    <div className='container'>
      <Header
        open={open}
        onOpenCart={handleOpenCart}
        cart={cart}
        showMenu={showMenu}
        onShowMenu={handleShowMenu}
        onRemoveFromCart={handleRemoveFromCart}
      />
      <div className='main-content'>
        <div className='left-nav'>
          <Navigation
            navLinks={navLinks}
            onFilterProducts={handleFilterProducts}
          />
        </div>
        <div className='right-content'>
          {/* <Slideshow slides={slides} /> */}
          <Products products={products} onAddToCart={handleAddToCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
