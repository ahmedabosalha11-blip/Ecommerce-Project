import { useState } from 'react'
import './App.css'
import { TopHeader , BottomHeader , ScrollTop, Sidebar, Overlay } from './components';
import { Home , ProDetails , Cart , Fav, ConfirmPros , CatePage, SearchPage, About, Help } from './pages';
import { Routes , Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
function App() {


  return (
    <>
      <Sidebar/>
      <Overlay/>
      <header>
        <TopHeader/>
        <BottomHeader/>
      </header>
      <Toaster position="bottom-right" toastOptions={{style:{
        background :'#efefef' ,
        boxShadow : '0 0 15px #ccccccaa',
      }}}/>
      <ScrollTop />
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product/:id' element={<ProDetails/>} />
        <Route path='/cart' element={<Cart />}/>
        <Route path='/fav' element={<Fav />}/>
        <Route path='/search' element={<SearchPage />}/>
        <Route path='/confirm' element={<ConfirmPros/>} />
        <Route path='/category/:category' element={<CatePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/help' element={<Help/>} />
      </Routes>
    </>
  )
}

export default App
