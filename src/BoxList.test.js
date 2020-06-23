import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';
import Box from './Box';

it('should render successfully', function () {
  render(<BoxList />);
});

it('should match snapshot', function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it('should contain all form inputs', function () {
  const { getByLabelText } = render(<BoxList />);
  const color = getByLabelText('Color:');
  const height = getByLabelText('Height:');
  const width = getByLabelText('Width:');

  expect(color).toBeInTheDocument();
  expect(height).toBeInTheDocument();
  expect(width).toBeInTheDocument();
});

it('should make a new box', function () {
  const { getByLabelText, getByText } = render(<BoxList />);
  const color = getByLabelText('Color:');
  const height = getByLabelText('Height:');
  const width = getByLabelText('Width:');

  fireEvent.change(color, { target: { value: 'blue' } });
  fireEvent.change(height, { target: { value: '50px' } });
  fireEvent.change(width, { target: { value: '50px' } });

  const button = getByText('Add a new Box');
  fireEvent.click(button);

  //   find box & remove btn in the dom
  const box = getByText('box');
  expect(box).toBeInTheDocument();

  const rmBtn = getByText('Remove', { exact: false });
  expect(rmBtn).toBeInTheDocument();
});
