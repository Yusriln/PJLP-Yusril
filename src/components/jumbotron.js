import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import landingphoto from '../landing.png';
import donephoto from '../done.png';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Jumbotron() {
  const [showModal, setShowModal] = useState(false);

  const handleModalShow = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img
            src={landingphoto}
            className="d-block mx-lg-auto img-fluid"
            alt="Landing Image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold lh-1 mb-3">Yusril NR</h1>
          <p className="lead">
            Halo semuanya, perkenalkan saya Yusril, Saat ini saya adalah <i>fresh graduate</i> jurusan S1 Teknik Informatika.
            Saya adalah salah satu peserta PJLP Kominfo 2024.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2" onClick={handleModalShow}>
              Informasi!
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Halo!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Halo, status anda saat ini telah terdaftar sebagai peserta di PJLP Kominfo 2024</p>
          <img
            src={donephoto}
            className="d-block mx-lg-auto img-fluid"
            alt="Images"
            width="700"
            height="500"
            loading="lazy"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Jumbotron;
