import { useState, useEffect } from 'react';
import { motoko_project_backend } from '../../declarations/motoko_project_backend';

function App() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  // List Products
  useEffect(() => {
    fetchProducts();
  }, []);

  function fetchProducts() {
    motoko_project_backend.getAllProducts().then((productList) => {
      setProducts(productList);
    });
  }

  // Add Product
  function handleAddProduct(event) {
    event.preventDefault();
    if (editingProduct) {
      motoko_project_backend
        .updateProduct(editingProduct.id, productName, parseInt(productPrice), productDescription, editingProduct.inStock)
        .then(() => {
          fetchProducts();
          setEditingProduct(null);
          setProductName('');
          setProductPrice('');
          setProductDescription('');
        });
    } else {
      motoko_project_backend
        .addProduct(productName, parseInt(productPrice), productDescription)
        .then(() => {
          fetchProducts();
          setProductName('');
          setProductPrice('');
          setProductDescription('');
        });
    }
  }

  // Delete product
  function handleDeleteProduct(id) {
    motoko_project_backend.deleteProduct(id).then(() => {
      fetchProducts();
    });
  }

  // Edit Product
  function handleEditProduct(product) {
    setEditingProduct(product);
    setProductName(product.name);
    setProductPrice(product.price.toString());
    setProductDescription(product.description);
  }

  // Update product stock status
  function handleUpdateStockStatus(productId, inStock) {
    motoko_project_backend.updateStockStatus(productId, inStock).then(() => {
      fetchProducts();
    });
  }

  return (
    <main>
      <h1>Ürün Yönetimi</h1>

      <section>
        <h2>{editingProduct ? "Ürünü Düzenle" : "Yeni Ürün Ekle"}</h2>
        <form onSubmit={handleAddProduct}>
          <input
            type="text"
            placeholder="Ürün Adı"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Ürün Fiyatı"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Ürün Açıklaması"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
            required
          />
          <button type="submit">{editingProduct ? "Güncelle" : "Ürün Ekle"}</button>
        </form>
      </section>

      <section>
        <h2>Ürün Listesi</h2>
          <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>Fiyat: {product.price.toString()}</p>
              <p>Açıklama: {product.description}</p>
              <p>Stok Durumu: {product.inStock ? 'Mevcut' : 'Stokta Yok'}</p>
              <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <button onClick={() => handleUpdateStockStatus(product.id, !product.inStock)}>
                  {product.inStock ? 'Stoktan Çıkar' : 'Stoğa Ekle'}
                </button>
                <button onClick={() => handleEditProduct(product)}>Düzenle</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Sil</button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
