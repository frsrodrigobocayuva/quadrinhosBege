import './HeaderButton.css'

const HeaderButton = (props) => {
    return(
        <a className='ancora' href={props.link}>{props.nome}</a>
    )
}

export default HeaderButton