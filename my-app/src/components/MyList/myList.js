import React, {useEffect, useState} from 'react';
import api from '../../service/index';
import AddElement from '../AddElement/addElement';

const data = [{name:'Dragon Ball Z'},{name:'Pokemon'}, 
                {name:'Digimon'}, {name:'Cavaleiros do Zodiaco'}];

function MyList() {
    const [animes, setAnimes] = useState([]);
    useEffect(async ()=> {
        await loadAnimes()
    }, []);

    async function loadAnimes() {
        const response = await api.get('/users/1/animes');
        setAnimes(response.data);
    }



    return(
        <>
        <AddElement loadAnimes={loadAnimes}/>
        <hr/>
    
        <div id="myList">
        <h3>Minha lista</h3>
        <input id="search" type="text"/>
        <button id="searchBtn">Buscar</button>

       

        <ul>
            {
                animes.map((anime) => (
                    <li>{anime.name}</li>
                ))
            }
        </ul>

    </div>
    </>
    );

}

export default MyList;