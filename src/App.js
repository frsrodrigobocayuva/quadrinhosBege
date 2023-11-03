import './App.css'
import HeaderButton from './Components/HeaderButton/HeaderButton';
import {AiOutlineSearch} from 'react-icons/ai'

function App() {
  return (
    <div className="App">
      <div className='uiBar'>
        <form className='formPesquisa'>
          <input type='text' className='inputPesquisa' placeholder='O que você deseja?'/>
          <button type='submit' className='botaoPesquisa'>
            <i><AiOutlineSearch id='iconePesquisa'/></i>
          </button>
        </form>
      </div>
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
