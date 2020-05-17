import React from 'react';
import AddAnime from './addAnime';

function AddElement(props) {
    return(
        <div className="addElement">
            <AddAnime loadAnimes={props.loadAnimes}/>
          </div>
    );
}

export default AddElement;