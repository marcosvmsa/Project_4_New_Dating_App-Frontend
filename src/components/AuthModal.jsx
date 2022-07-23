import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from '@mantine/form';
import {
  TextInput, PasswordInput, Group, Button, Box,
} from '@mantine/core';
import axios from 'axios';

const AuthModal = ({setShowRegisterForm, isSignUp}) => {
  const handleClick = () => {
    setShowRegisterForm(false);
  };

  const handleSubmit = (values) => {
    console.log(values);
    // try {
    //   const res = axios.post('http://localhost:4000/');
    //   // console.log(res);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      confirmPassword: (value, values) => (value !== values.password ? 'Passwords did not match' : null),
    },
  });

  return (
    <Box sx={{maxWidth: 340}} mx="auto">

      <h2>{isSignUp ? 'Create Account' : 'SignUp'}</h2>
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          required
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <PasswordInput
          label="Password"
          required
          placeholder="Password"
          {...form.getInputProps('password')}
        />

        {isSignUp && <PasswordInput
          mt="sm"
          label="Confirm password"
          required
          placeholder="Confirm password"
          {...form.getInputProps('confirmPassword')}
        />}

        <Group position="right" mt="md">
          <Button type="submit">Submit</Button>
          <Button type="submit" onClick={handleClick}>Exit</Button>
        </Group>
      </form>
    </Box>
  );
};

AuthModal.propTypes = {
  setShowRegisterForm: PropTypes.func,
};
export default AuthModal;
