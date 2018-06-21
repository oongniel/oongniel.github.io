import React from 'react';
import PropTypes from 'prop-types';
import { InputNumber, Form } from 'antd';
import _ from 'lodash';

class NumberInput extends React.Component {
  render() {
    const {
      form,
      name,
      label,
      required,
      sign,
      placeholder,
      initialValue,
      labelSpan,
      wrapperSpan,
      width,
      max,
      min,
      precision,
      step,
      size,
      extra,
      help,
      validateStatus,
      hasFeedback,
      disabled,
      error,
      onChange,
      parser,
      hasFormatter = true,
    } = this.props;
    const status = error ? 'error' : validateStatus;
    const helpMessage = error || help;
    const signFormat = sign || '$';
    const replaceRegEx = new RegExp(`\\${signFormat}\\s?|(,*)`, 'g');
    return (
      <Form.Item
        label={label}
        labelCol={{ span: labelSpan || null }}
        wrapperCol={{ span: wrapperSpan || null }}
        validateStatus={status}
        help={helpMessage}
        extra={extra}
        hasFeedback={hasFeedback}
        className="app-form-item"
      >
        {form.getFieldDecorator(name, {
          initialValue,
          rules: [{ required, message: `${label || placeholder} is required.` }],
        })(
          <InputNumber
            style={{ width }}
            placeholder={placeholder}
            parser={value => value.replace(replaceRegEx, '')}
            min={min}
            max={max}
            step={step}
            size={size}
            onChange={onChange}
            disabled={disabled}
            className="app-form-item-input"
          />,
        )}
      </Form.Item>
    );
  }
}

NumberInput.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  sign: PropTypes.string,
  placeholder: PropTypes.string,
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  help: PropTypes.string,
  extra: PropTypes.string,
  validateStatus: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  hasFeedback: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.number,
  min: PropTypes.number,
  precision: PropTypes.number,
  step: PropTypes.number,
  size: PropTypes.string,
  labelSpan: PropTypes.number,
  wrapperSpan: PropTypes.number,
};

export default NumberInput;
