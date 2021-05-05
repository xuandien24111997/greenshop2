import React from 'react'

export default function Products() {
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

    return (
        <div className="container   product">
        <h1>Product</h1>
        <div className="detaiproduct" >
          {products.map((product, idx) => (
            <div className="  " key={idx}>
              <img src={product.img} alt={product.tree} />
              <h3>{product.tree}</h3>
              <h3>{product.cost}</h3>
              <button onClick={() => addToCart(product)}> Add to cart</button>
            </div>
          ))}
        </div>
      </div>
    )
}
