import './App.css'
import HeaderButton from './Components/HeaderButton/HeaderButton';
import {AiOutlineSearch} from 'react-icons/ai'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import {BsCart3} from 'react-icons/bs'
import {PiBooksDuotone} from 'react-icons/pi'

function App() {
  return (
    <div className="App">
      <div className='uiBar'>
        <div>
          <a href='www.link' className='logo'>
            <PiBooksDuotone className='iconeTitulo'/>
            <h1 className='titulo'>
              Quadrinhos<br/>bege
            </h1>
          </a>
        </div>
        <form className='formPesquisa'>
          <input type='text' className='inputPesquisa' placeholder='O que você deseja?'/>
          <button type='submit' className='botaoPesquisa'>
            <i><AiOutlineSearch id='iconePesquisa'/></i>
          </button>
        </form>
        <div className='iconesUi'>
          <a href='www.link'><FaUserCircle className='iconeUi'/></a>
          <a href='www.link'><MdOutlineFavoriteBorder className='iconeUi'/></a>
          <a href='www.link'><BsCart3 className='iconeUi'/></a>
        </div>
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
