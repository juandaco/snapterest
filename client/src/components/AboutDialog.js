import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const AboutDialog = ({ displayAboutDialog, closeAboutDialog }) => (
  <Modal
    show={displayAboutDialog}
    onHide={closeAboutDialog}
    dialogClassName="about-dialog"
  >
    <Modal.Body>
      <p style={{ marginTop: 20 }}>
        Created by
      </p>
      <a
        href="https://www.freecodecamp.com/juandaco"
        target="_blank"
        id="syntart-logo"
      >
        <h1>
          Synt4rt
        </h1>
      </a>
      <p>for</p>
      <a
        href="https://www.freecodecamp.com"
        target="_blank"
        id="freecodecamp-logo"
      >
        <h2>
          freeCodeCamp
          <i className="fa fa-free-code-camp" aria-hidden="true" />
        </h2>
      </a>
      <Button
        bsStyle="primary"
        onClick={closeAboutDialog}
        style={{
          float: 'right',
        }}
      >
        OK
      </Button>
      <div style={{ clear: 'both' }} />
    </Modal.Body>
  </Modal>
);

export default AboutDialog;
