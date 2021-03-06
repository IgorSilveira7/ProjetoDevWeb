import React from 'react';
import AddAnimeModal from './addAnimeModal';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function AddAnime(props) {
const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Adicionar Anime
      </Button>

      <AddAnimeModal
        loadAnimes={props.loadAnimes}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );

}

export default AddAnime;