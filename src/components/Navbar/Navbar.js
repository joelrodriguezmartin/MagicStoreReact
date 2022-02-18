import React from 'react'
//Lista de urls de la api.
const urls = {
    "ugin": "https://api.scryfall.com/cards/search?order=set&q=e%3Augin&unique=prints",
    "2016": "https://api.scryfall.com/cards/search?order=set&q=e%3Aw16&unique=prints",
    "2017": "https://api.scryfall.com/cards/search?order=set&q=e%3Aw17&unique=prints",
    "zendikar": "https://api.scryfall.com/cards/search?order=set&q=e%3Azne&unique=prints",
    "twoplayer": "https://api.scryfall.com/cards/search?order=set&q=e%3Aitp&unique=prints"
};
/**
 * Componente Navbar. Recibe por props el método setUrl del padre App y lo utiliza en el onClick del dropdown
 * para cambiar la url de la api y utilizar un deck diferente.
 * @param {*} props 
 * @returns 
 */
export default function Navbar(props) {

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <div className="navbar-brand rounded-3 bg-secondary p-2">
                    <img src="logo.png" alt="" width="30" height="30" className="align-text-center" />
                    Magic Decks
                </div>
                <div className="dropstart ">
                    <button className="btn btn-secondary dropdown-toggle p-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Set
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><button className="dropdown-item" value="ugin" onClick={() => props.setUrl(urls["ugin"])}>Ugin's Fate</button>
                        </li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><button className="dropdown-item" value="2016" onClick={() => props.setUrl(urls["2016"])}>Welcome Deck
                            2016</button></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><button className="dropdown-item" value="2017" onClick={() => props.setUrl(urls["2017"])}>Welcome Deck
                            2017</button></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><button className="dropdown-item" value="zendikar" onClick={() => props.setUrl(urls["zendikar"])}>Zendikar
                            Rising Expeditions</button></li>
                        <li>
                            <hr className="dropdown-divider" />
                        </li>
                        <li><button className="dropdown-item" value="twoplayer"
                            onClick={() => props.setUrl(urls["twoplayer"])}>Introductory Two-Player</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
