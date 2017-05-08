import React, { Component } from 'react';
import {
  Modal,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
} from 'react-bootstrap';

class NewDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pictureURL: '',
    };
  }

  render() {
    const { displayDialog, closeDialog } = this.props;
    return (
      <Modal
        show={displayDialog}
        onHide={closeDialog}
        style={{ 
          width: '100vw',
          height: '100vh',
        }}
      >
        <Modal.Dialog
          style={{
            width: '100%',
            height: '100vh',
            marginTop: 100,
          }}
        >
          <Modal.Body>
            <Modal.Title style={{ marginBottom: 20 }}>Add New Snap</Modal.Title>
            <form>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Picture URL</ControlLabel>
                <FormControl type="text" placeholder="Any valid URL works..." />
                <ControlLabel style={{ marginTop: 15 }}>
                  Description
                </ControlLabel>
                <FormControl
                  type="text"
                  placeholder="Add a cool description..."
                />
              </FormGroup>
              <div style={{ width: '100%', height: 32, paddingTop: 5 }}>
                <Button style={{ float: 'right' }} bsStyle="primary">
                  Add
                </Button>
                <Button
                  style={{ float: 'right', marginRight: 7 }}
                  onClick={closeDialog}
                >
                  Close
                </Button>
              </div>
            </form>
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    );
  }
}

export default NewDialog;
