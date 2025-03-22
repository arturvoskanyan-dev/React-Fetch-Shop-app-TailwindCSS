import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import {Layout} from "./components/index"
import { Home, Products, Product, Mens, Womens, Basket } from './pages/index';
import './App.css'

function App() {
  const [homedData, setHomeData] = useState([]);
  const [dataId, setDataId] = useState()

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=20&skip=80&select')
    .then(res => res.json())
    .then(res => setHomeData(res.products));
  }, [])

  useEffect(() => {
    if (dataId) {
      fetch(`https://dummyjson.com/products?limit=1&skip=${dataId - 1}&select`)
        .then(res => res.json())
        .then(res => {
          const prevData = JSON.parse(localStorage.getItem("data")) || []
          const isExist = prevData.some(elem => elem.id === res.products[0].id)
          
          if (!isExist) {
            const newData = [...prevData, res.products[0]];
            localStorage.setItem("data", JSON.stringify(newData));
          } 
        })
    }
  }, [dataId])
  
  const basketClick = (id) => {
    setDataId(id);
  }

  return (
    <div className='max-w-[1400px] mx-auto'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home onBasket={basketClick} />} />
          <Route path='/products' element={<Products data={homedData} onBasket={basketClick} />} />
          <Route path='/mens' element={<Mens onBasket={basketClick} />} />
          <Route path='/womens' element={<Womens onBasket={basketClick} />} />
          <Route path='/basket' element={<Basket />} />
          <Route path='/:id' element={<Product onBasket={basketClick} />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App