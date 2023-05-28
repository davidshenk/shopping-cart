import logo from './logo.svg';
import './App.css';
import AppShoppingCart from './comps/AppShoppingCart';
import ProductsContextProvider from './comps/ContextShoppingCart';

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <AppShoppingCart />
      </ProductsContextProvider>
    </div>
  );
}

export default App;
