import React, { useState, useEffect } from 'react';
import { fetchProducts } from './services/woocommerce';
import { useNavigate } from 'react-router-dom';
import './Shop.css';

const Shop = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        console.log('Fetched Products:', data);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Invalid data format:', data);
          setProducts([]); // Fallback to an empty array
        }
      } catch (err) {
        setError(err.message || 'Failed to fetch products.');
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleAddToCart = async (productId) => {
    try {
      await fetch('https://alterationsbyalma.com/wp-admin/admin-ajax.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          action: 'woocommerce_add_to_cart',
          product_id: productId,
          quantity: 1,
        }).toString(),
      });

      window.location.href = '/cart';
    } catch (error) {
      console.error('Error adding product to cart:', error);
      setError('An error occurred while adding the product to the cart.');
    }
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="shop-container">
      <h1>Our Products</h1>
      <div className="product-list">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="image-container" onClick={() => openModal(product.images[0]?.src)}>
                <img
                  src={product.images[0]?.src}
                  alt={product.name}
                />
              </div>
              <h3>{product.name}</h3>
              <div className="product-description">
                <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
              </div>
              <p dangerouslySetInnerHTML={{ __html: product.price_html }}></p>
              <button onClick={() => handleAddToCart(product.id)}>Add to Cart</button>
            </div>
          ))
        )}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Enlarged" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop;
