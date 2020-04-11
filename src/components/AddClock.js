import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

export default function AddClock(props) {
  const [form, setForm] = useState({
    name: '',
    timeZone: '',
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (form.name !== '' && form.timeZone !== '') {
      const setClocks = {
        id: shortid.generate(),
        name: form.name,
        timeZone: form.timeZone,
      };

      props.onFormSubmit(setClocks);
      setForm({
        name: '',
        timeZone: '',
      });
    }
  };

  return (
    <form>
      <label>Название
        <input name='name' onChange={handleChange} value={form.name} />
      </label>
      <label>Временная зона
        <input name='timeZone' type='number' onChange={handleChange} value={form.timeZone} />
      </label>
      <input type='button' onClick={handleSubmit} value='Добавить' />
    </form>
  );
}

AddClock.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
