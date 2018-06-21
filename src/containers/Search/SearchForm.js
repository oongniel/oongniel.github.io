import React, { Component } from 'react';
import { Form } from 'antd';
import moment from 'moment';
import { TextInput, DatePickerInput, SaveButton, NumberInput } from '../../components/FormElements';

class SearchForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const { form, handleSearch } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
        values.departure = moment(values.departure).format('YYYY-MM-DD');
        // Format return date if it exists
        if (values.returnDeparture) {
          values.returnDeparture = moment(values.returnDeparture).format('YYYY-MM-DD');
        }
        handleSearch(values);
      }
    });
  }

  render() {
    const { form, selectedType, searching } = this.props;
    return (
      <Form layout="vertical" className="app-form app-search-form " onSubmit={this.handleSubmit.bind(this)}>
        <TextInput form={form} name={'origin'} label="" required={true} placeholder="Origin" />
        <TextInput form={form} name={'destination'} label="" required={true} placeholder="Destination" />
        <DatePickerInput
          form={form}
          label=""
          name="departure"
          placeholder="Departure Date"
          required={true}
          format={'ll'}
        />
        {selectedType === 'return' ? (
          <DatePickerInput
            form={form}
            label=""
            name="returnDeparture"
            placeholder="Returning Date"
            required={true}
            format={'ll'}
          />
        ) : null}
        <NumberInput form={form} label="" placeholder="Passengers" name="passenger" required={true} />
        <SaveButton saveLabel="SEARCH" disabled={searching} />
      </Form>
    );
  }
}

export default Form.create()(SearchForm);
