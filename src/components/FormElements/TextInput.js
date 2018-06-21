import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'antd';

class TextInput extends React.Component {
  render() {
    const {
      form,
      name,
      label,
      required,
      placeholder,
      initialValue,
      formItemLayout,
      whitespace,
      max,
      min,
      rows,
      extra,
      help,
      validateStatus,
      hasFeedback,
      error,
      onChange,
      onBlur,
      isEmail,
      disabled,
      type,
      className,
      validator,
      pattern,
      patternMessage,
      accept,
      style,
    } = this.props;
    const isWhitespace = whitespace === undefined ? true : whitespace;
    const maxLength = max || (name === '_id' ? 30 : 256);
    const status = error ? 'error' : validateStatus;
    const helpMessage = error || help;
    return (
      <Form.Item
        label={label}
        validateStatus={status}
        help={helpMessage}
        extra={extra}
        hasFeedback={hasFeedback}
        className={`${className} app-form-item`}
      >
        {form.getFieldDecorator(name, {
          initialValue,
          rules: [
            { required, message: `${label || placeholder} is required.` },
            {
              whitespace: isWhitespace,
              message: `${label || placeholder} is required.`,
            },
            { pattern, message: patternMessage },
            {
              max: maxLength,
              message: `${label} cannot exceed ${maxLength} characters`,
            },
            { min, message: `${label} must be at least ${min} characters` },
            { validator: validator },
          ],
        })(
          !rows ? (
            <Input
              placeholder={placeholder}
              maxLength={maxLength.toString()}
              onChange={onChange}
              onBlur={onBlur}
              disabled={disabled}
              type={type}
              accept={accept}
              style={style}
              className="app-form-item-input"
            />
          ) : (
            <Input.TextArea
              placeholder={placeholder}
              maxLength={maxLength.toString()}
              autosize={{ minRows: rows }}
              rows={rows}
              onChange={onChange}
              disabled={disabled}
              className="app-form-item-textarea"
            />
          ),
        )}
      </Form.Item>
    );
  }
}

TextInput.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  help: PropTypes.string,
  extra: PropTypes.string,
  validateStatus: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  whitespace: PropTypes.bool,
  hasFeedback: PropTypes.bool,
  isEmail: PropTypes.bool,
  disabled: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  rows: PropTypes.number,
  formItemLayout: PropTypes.object,
};

export default TextInput;
