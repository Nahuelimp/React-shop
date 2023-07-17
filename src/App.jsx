import { useContext, useState } from 'react'
import Products from "./componentes/products"
import { products as initialProducts } from "./mocks/productos.json"
import Header from './componentes/Header'
import { useFilters } from './hooks/useFilters'
import { Cart } from './componentes/Cart.jsx'
import { CartProvider } from './context/CartContext'







function App() {
  const [products, setProducts] = useState(initialProducts)
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
    </CartProvider>
  )
}

export default App
