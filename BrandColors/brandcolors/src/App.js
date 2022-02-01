import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import MainContext from './MainContext';
import BrandsData from './brand.json'
import { useEffect, useState } from 'react';
import Copied from './components/Copied';

function App() {

  const brandsArray = []
  Object.keys(BrandsData).map(key => {
    brandsArray.push(BrandsData[key])
  })

  const [brands, setBrands] = useState(brandsArray)
  const [selectedBrands, setSelectedBrands] = useState([])
  const [copied, setCopied] = useState(false)
  const [search, setSearch] = useState('')

  const data = {
    brands,
    selectedBrands,
    setSelectedBrands,
    setCopied,
    search,
    setSearch
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setCopied(false)
    }, 1500
    )
    return () => { clearTimeout(timeout) }
  }
  )

  useEffect(() => {
    setBrands(brandsArray.filter(brand=> brand.title.toLowerCase().includes(search)))
  }, [search]

  )

  return (
    <>
      <MainContext.Provider value={data}>
        {copied && <Copied color={copied} />}
        <Sidebar />
        <Content />

      </MainContext.Provider>
    </>
  );
}

export default App;
