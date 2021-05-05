import React, { useState } from 'react'

const PAGE_PRODUCT = 'products';
const PAGE_CART = 'cart';

function NewProduct() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCT);
  const [products] = useState([
    {
      img: './public_html/img/anh2.jpg',
      tree: 'Cay Kim Tien',
      cost: '100000'
    },
    {
      img: './public_html/img/cay4.jpg',
      tree: 'Cay Can',
      cost: '100000'
    },
    {
      img: './public_html/img/cay1.jpg',
      tree: 'Cay Canh',
      cost: '100000'
    },
    {
      img: './public_html/img/cay6.jpg',
      tree: 'Cay Lam Ngan',
      cost: '100000'
    },
    {
      img: './public_html/img/CayKimTien.jpg',
      tree: 'Cay Xuong Rong',
      cost: '100000'
    }
  ]);
  const addToCart = (product) => {
    console.log('cart')
    setCart([...cart, { ...product }]);
  };
  const removeProduct = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };
  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const renderProducts = () => (
    <div className="container   product">
      <h1>Product</h1>
      <div className="detaiproduct" >
        {products.map((product, idx) => (
          <div className="" key={idx}>
            <img src={product.img} alt={product.tree} />
            <h3>{product.tree}</h3>
            <h3>{product.cost}</h3>
            <button onClick={() => addToCart(product)}> Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
  const renderCart = () => (
    <div className="container  product ">
      <h1>Cart</h1>
      <div className=" detaiproduct" >
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Img</th>
              <th>Name</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, idx) => (
              <tr key={idx}>
                <td><img src={product.img} alt={product.tree} /></td>
                <td>   <h3>{product.tree}</h3></td>
                <td> <h3>{product.cost}</h3></td>
                <td> <button onClick={() => removeProduct(product)}> Remove Product</button> </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="container item d-flex ">
      <header>
        <button onClick={() => navigateTo(PAGE_CART)}>Go To Cart ({cart.length})</button>
        <button onClick={() => navigateTo(PAGE_PRODUCT)}>View Product </button>
      </header>
      { page === PAGE_PRODUCT && renderProducts()}
      { page === PAGE_CART && renderCart()}
    </div>
  )
}
export default NewProduct