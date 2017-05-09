import React, { Component } from 'react';
import {
  Modal,
  FormGroup,
  FormControl,
  HelpBlock,
  ControlLabel,
  Button,
} from 'react-bootstrap';
import { isURL } from 'validator';

class NewDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      description: '',
      sent: false,
    };
  }

  clearState = () => {
    this.state = {
      url: '',
      description: '',
      sent: false,
    };
  };

  handleUrlChange = e => {
    this.setState({
      url: e.target.value,
    });
  };

  handleDescriptionChange = e => {
    this.setState({
      description: e.target.value,
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.handleAddPicture();
    }
  };

  handleAddPicture = () => {
    this.setState({ sent: true });
    const { url, description } = this.state;
    if (this.isFormValid()) {
      this.props.closeNewDialog();
      const picture = {
        url,
        description,
      };
      // Input Validation
      this.props.addPicture(picture);
      // The Timeout Prevents conflicting 'sent' state
      setTimeout(() => {
        this.clearState();
      }, 500);
    }
  };


  isFormValid = () => {
    if (isURL(this.state.url)) {
      return true;
    }
    return false;
  };

  getValidationState = () => {
    if (!this.isFormValid() && this.state.sent) {
      return 'error';
    }
  };

  handleClose = () => {
    this.props.closeNewDialog();
    this.clearState();
  };
  
  render() {
    const { displayNewDialog } = this.props;
    return (
      <Modal
        show={displayNewDialog}
        onHide={this.handleClose}
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
              <FormGroup
                controlId="new-picture"
                validationState={this.getValidationState()}
              >
                <ControlLabel>Picture URL</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.url}
                  onChange={this.handleUrlChange}
                  onKeyPress={this.handleKeyPress}
                  autoFocus
                  placeholder="Any valid URL works..."
                />
                <FormControl.Feedback />
                {this.state.sent
                  ? <HelpBlock>Please enter a valid URL</HelpBlock>
                  : null}
                <ControlLabel style={{ marginTop: 15 }}>
                  Description
                </ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange}
                  onKeyPress={this.handleKeyPress}
                  placeholder="Add a cool description..."
                />
              </FormGroup>
              <div style={{ width: '100%', height: 32, paddingTop: 5 }}>
                <Button
                  style={{ float: 'right' }}
                  bsStyle="primary"
                  onClick={this.handleAddPicture}
                >
                  Add
                </Button>
                <Button
                  style={{ float: 'right', marginRight: 7 }}
                  onClick={this.handleClose}
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
