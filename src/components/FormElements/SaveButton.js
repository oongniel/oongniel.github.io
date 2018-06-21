import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import Button from '../Button';

class SaveButton extends React.Component {
  render() {
    const { saveLabel, saving, disabled = false, size, style } = this.props;
    return (
      <Form.Item className="app-form-item">
        <Button type="primary" htmlType="submit" icon="save" disabled={disabled}>
          {saveLabel || 'Save'}
        </Button>
      </Form.Item>
    );
  }
}

SaveButton.propTypes = {
  cancelLink: PropTypes.string,
  span: PropTypes.number,
  offset: PropTypes.number,
  saveLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  saving: PropTypes.bool,
  disabled: PropTypes.bool,
};
export default SaveButton;
