import React from "react";
import { render, fireEvent } from "@testing-library/react";
// import App from './App';
import Login from "./Components/Login";
jest.mock('./Components/Login');
// test('renders learn react link', () => {
//   render(<Login />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("renders login inputs and button", () => {
  const { getByLabelText, getByText,getByPlaceholderText,container } = render(<Login />);

  const usernameInput = getByPlaceholderText("Email");
  const passwordInput = getByPlaceholderText("Password");
  const loginButton = getByText("Login");

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});

test("calls onLogin prop when login button is clicked with valid credentials", () => {
    // const mockOnLogin = jest.fn();
  const { getByLabelText, getByText } = render(
    <Login  />
  );

  const usernameInput = getByLabelText("Email address");
  const passwordInput = getByLabelText("Password");
  const loginButton = getByText("Login");

  fireEvent.change(usernameInput, { target: { value: "user@gmail.com" } });
  fireEvent.change(passwordInput, { target: { value: "User@123" } });
  fireEvent.click(loginButton);
 
  expect(mockOnLogin).toHaveBeenCalled();
});

test("does not call onLogin prop when login button is clicked with invalid credentials", () => {
    // const mockOnLogin = jest.fn();
  const { getByLabelText, getByText } = render(
    <Login  />
  );

  const usernameInput = getByLabelText("Email address");
  const passwordInput = getByLabelText("Password");
  const loginButton = getByText("Login");
  
  fireEvent.change(usernameInput, {target: { value: "invaliduser@gmail.com" },});
  fireEvent.change(passwordInput, { target: { value: "invLalidpAssword@123" } });
  fireEvent.click(loginButton);
 
  expect(mockOnLogin).not.toHaveBeenCalled();
});
