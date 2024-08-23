import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Accordian from './components/accordian';
import Randomcolor from './components/Random-color';
import Starrating from './components/Star-rating';
import ImageSlider from './components/Image-sliders';
import Loadmoreproducts from './components/Load-more';
import Treeview from './components/Tree-veiw';
import QRcodegeneretor from './components/qr-code-generator';
import Toggletheme from './components/light-dark-mode';
import Scrollindicator from './components/scroll-indicator';
import Customtabs from './components/custom-tabs';
import Githubprofile from './components/github-profiles';
import Searchautocomplate from './components/search-auto-complate';
import Tictacktoe from './components/tic-tack-toe';
import Testhooks from './components/test-hooks';
import Weather from './pages/Weather';
import Header from './components/header';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Editor from './pages/Editor';
import Testpage from './pages/Testpage'


const App = () => {
  return <Router>
    <div>
      <Header />
      <Routes>
        <Route path='/' element={
          <div className="min-h-screen w-full pt-20 ">
            {/* accordian component */}
            <Accordian />
            {/* random color component */}
            <Randomcolor />
            {/* star rating component */}
            <Starrating />
            {/* image slider component */}
            <ImageSlider url={'https://picsum.photos/v2/list?page=1&limit=10'} />
            {/* load more products component */}
            <Loadmoreproducts url={'https://dummyjson.com/products'} />
            {/* recursive tree view component */}
            <Treeview />
            {/* QR code generetor component */}
            <QRcodegeneretor type='' />
            {/* light and dark theme component */}
            <Toggletheme />
            {/* scroll indicator component */}
            <Scrollindicator url={'https://dummyjson.com/products'} />
            {/* customtabs  component */}
            <Customtabs />
            {/* github profile component */}
            <Githubprofile />
            {/* search auto complate component */}
            <Searchautocomplate url={'https://dummyjson.com/users'} />
            {/* tic tack toe component */}
            <Tictacktoe />
            {/* test hooks component */}
            <Testhooks url={'https://dummyjson.com/products'} />
          </div>
        } />
        <Route path='/weather' element={
          <Weather />
        } />
        <Route path='/products' element={
          <Products />
        } />
        <Route path='/cart' element={
          <Cart />
        } />
        <Route path='/editor' element={
          <Editor />
        } />
        <Route path='/test' element={<Testpage />} />

      </Routes>

    </div>


  </Router>
};

export default App;
