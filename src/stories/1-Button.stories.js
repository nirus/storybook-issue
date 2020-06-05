import React from 'react';
import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';
import Button from '../library/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')} />;

