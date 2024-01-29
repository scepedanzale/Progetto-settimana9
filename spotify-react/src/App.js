import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HomePage from './pages/HomePage';
import SideBarComponent from './components/SideBarComponent';
import PlayerComponent from './components/PlayerComponent';
import TopNavbarComponent from './components/TopNavbarComponent';
import ArtistPage from './pages/ArtistPage';
import AlbumPage from './pages/AlbumPage';
import SearchResultPage from './pages/SearchResultPage';
import FavouritesPage from './pages/FavouritesPage';

function App() {
  return (
    <BrowserRouter>
      <Container fluid data-bs-theme='dark' id='box-container'>
        <Row id='box-row'>
          <SideBarComponent/>
          <Col id="main-container" className="bg-dark overflow-hidden p-0">
                <TopNavbarComponent/>
                <Col xs={12} id="main-col" className='overflow-auto pb-5 scroll-bar'>
                  <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/artist/:id' element={<ArtistPage/>}/>
                    <Route path='/album/:id'element={<AlbumPage/>}/>
                    <Route path='/search'element={<SearchResultPage/>}/>
                    <Route path='/favourites'element={<FavouritesPage/>}/>
                  </Routes>
                </Col>
          </Col>
        </Row>
        <PlayerComponent/>
      </Container>
    </BrowserRouter>
  );
}

export default App;