import React from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function AddAnimeModal(props) {
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
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nome do Anime</Form.Label>
          <Form.Control type="text" placeholder="Informe o nome do Anime" />
          <Form.Text className="text-muted">
            Sinta-se livre para nomear esse anime do seu jeito e fazer sua organização!
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicDescription">
          <Form.Label>Descrição</Form.Label>
          <Form.Control type="text" placeholder="Você pode dar uma breve Descrição" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="switch" id="fav-switch" label="Favorito" />
        </Form.Group>
        
      </Form>

      </Modal.Body>
      <Modal.Footer>
      <Button variant="primary" type="submit">Submit</Button>
        <Button variant='danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    );

}

export default AddAnimeModal;