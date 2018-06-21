import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, Form } from 'antd';

class DatePickerInput extends React.Component {
  render() {
    const {
      form,
      name,
      label,
      required,
      placeholder,
      initialValue,
      labelSpan,
      wrapperSpan,
      extra,
      help,
      validateStatus,
      hasFeedback,
      error,
      onChange,
      format,
      showTime,
    } = this.props;
    const status = error ? 'error' : validateStatus;
    const helpMessage = error || help;
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
          <DatePicker
            placeholder={placeholder}
            onChange={onChange}
            format={format}
            showTime={showTime}
            className="app-form-item-datepicker"
          />,
        )}
      </Form.Item>
    );
  }
}

DatePickerInput.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  initialValue: PropTypes.object,
  help: PropTypes.string,
  extra: PropTypes.string,
  validateStatus: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  hasFeedback: PropTypes.bool,
  labelSpan: PropTypes.number,
  wrapperSpan: PropTypes.number,
};

export default DatePickerInput;
