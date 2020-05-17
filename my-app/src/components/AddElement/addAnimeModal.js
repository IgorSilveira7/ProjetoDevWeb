import React, {useState} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import api from '../../service/index';


function AddAnimeModal(props) {
    
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [fav, setFav] = useState(false);

  const handlerSubmit = async (e)=> {
    e.preventDefault();
    const response = await api.post('/users/1/animes', {name, description, fav});
    setName('');
    setDescription('');
    setFav(false);
    props.onHide();
    props.loadAnimes();
    
  }
  
  
  
  
  return(
    <Modal
      {...props}
      dialogClassName="modal-90w"
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered='true'
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Adicionar Anime
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form onSubmit={handlerSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Nome do Anime</Form.Label>
          <Form.Control required value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder="Informe o nome do Anime" />
          <Form.Text className="text-muted">
            Sinta-se livre para nomear esse anime do seu jeito e fazer sua organização!
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Descrição</Form.Label>
          <Form.Control required value={description} onChange={(e)=> setDescription(e.target.value)} type="text" placeholder="Você pode dar uma breve Descrição" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
          <Form.Check value={fav} onChange={(e)=> setFav(!fav) } type="switch" id="fav-switch" label="Favorito" />
        </Form.Group>

        <Modal.Footer>
          <Button variant="primary" type="submit">Submit</Button>
          <Button variant='danger' onClick={props.onHide}>Close</Button>
        </Modal.Footer>
          
      </Form>

      </Modal.Body>
      
    </Modal>
    );

}

export default AddAnimeModal;