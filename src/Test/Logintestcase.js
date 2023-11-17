import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Components/Login';

test('renders login inputs and button',()=>{
    const {getByPlaceholderText,getByText}=render(<Login/>);

    const usernameInput=getByPlaceholderText('Email');
    const passwordInput=getByPlaceholderText('Password');
    const loginButton=getByText('Login');

    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
});

test('calls onLogin prop when login button is clicked with valid credentials',()=>{
    const {getByPlaceholderText,getByText}=render(<Login onLogin={mockOnLogin}/>);

    const usernameInput=getByPlaceholderText('Email');
    const passwordInput=getByPlaceholderText('Password');
    const loginButton=getByText('Login');

    
    fireEvent.change(usernameInput,{target:{value:'user@gmail.com'}});
    fireEvent.change(passwordInput,{target:{value:'password'}});
    fireEvent.click(loginButton);

    expect(mockOnLogin).toHaveBeenCalled();
});

test('does not call onLogin prop when login button is clicked with invalid credentials',()=>{
    const {getByPlaceholderText,getByText}=render(<Login onLogin={mockOnLogin}/>);

    const usernameInput=getByPlaceholderText('Email');
    const passwordInput=getByPlaceholderText('Password');
    const loginButton=getByText('Login');

    
    fireEvent.change(usernameInput,{target:{value:'invaliduser@gmail.com'}});
    fireEvent.change(passwordInput,{target:{value:'invlalidpassword'}});
    fireEvent.click(loginButton);

    expect(mockOnLogin).not.toHaveBeenCalled();
});