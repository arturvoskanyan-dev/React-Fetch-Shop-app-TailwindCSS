import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import {Layout} from "./components/index"
import { Home, Products, Product, Mens, Womens } from './pages/index';
import './App.css'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=20&skip=80&select')
    .then(res => res.json())
    .then(res => setData(res.products));
  }, [])

  return (
    <div className='max-w-[1400px] mx-auto'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products data={data} />} />
          <Route path='/mens' element={<Mens />} />
          <Route path='/womens' element={<Womens />} />
          <Route path='/:id' element={<Product />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
