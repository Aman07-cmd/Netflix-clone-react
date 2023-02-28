import Banner from './components/Banner';
import './App.css';
import Row from './components/Row';
import request from './request'
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner/>
      
      <Row isPoster={true} title='Netflix Originals' fetchUrl={request.fetchNetflixOriginals}/>
      <Row title='Trending' fetchUrl={request.fetchTrending}/>
      <Row title='Top Rated' fetchUrl={request.fetchTopRated}/>
      <Row title='Action Movies' fetchUrl={request.fetchActionMovies}/>
      <Row title='Comedy Movies' fetchUrl={request.fetchComedyMovies}/>
      <Row title='Horror Movies' fetchUrl={request.fetchHorrorMovies}/>
      <Row title='Romance Movies' fetchUrl={request.fetchRomanceMovies}/>
      <Row title='Documentaries' fetchUrl={request.fetchDocumentaries}/>

    
    </div>
  );
}

export default App;
