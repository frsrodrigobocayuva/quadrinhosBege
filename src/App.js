import './App.css'
import HeaderButton from './Components/HeaderButton/HeaderButton';

function App() {
  return (
    <div className="App">
      <section className='header'>
        <div className='headerButtons'>
          <HeaderButton link='#' nome='Gêneros'/>
          <HeaderButton link='#' nome='Mangás'/>
          <HeaderButton link='#' nome='Manhwas'/>
          <HeaderButton link='#' nome='Comics'/>
          <HeaderButton link='#' nome='Marvel'/>
          <HeaderButton link='#' nome='DC'/>
          <HeaderButton link='#' nome='Infantis'/>
          <HeaderButton link='#' nome='Importados'/>
          <HeaderButton link='#' nome='Raros'/>
        </div>
      </section>
      <section className='main'>

      </section>
      <section className='footer'>

      </section>
    </div>
  );
}

export default App;
