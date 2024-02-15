import { render, screen } from "@testing-library/react";    
import '@testing-library/jest-dom'   
import App from "./App";
import { Provider } from "react-redux";
import store from './Redux/store.js';


test('testing Navigation', ()=>{
    render(<Provider store={store}>
        <App/>
        </Provider>);

    const res2=screen.getAllByText('Log In');
    expect(res2);

})
test('testing Navigation', ()=>{
    render(<Provider store={store}>
        <App/>
        </Provider>);

    const res2=screen.getAllByText('Sign up');
    expect(res2);

})
test('testing Navigation1', ()=>{
    render(<Provider store={store}>
        <App/>
        </Provider>);

    const res2=screen.getAllByText('Not a member?');
    expect(res2);

})
test('testing Navigation2', ()=>{
    render(<Provider store={store}>
        <App/>
        </Provider>);

    const res3=screen.getAllByText('Forgot Password ?');
    expect(res3);

})
test('testing Navigation3', ()=>{
    render(<Provider store={store}>
        <App/>
        </Provider>);

    const res4=screen.getAllByText('Email address');
    expect(res4);

})
test('testing Navigation4', ()=>{
    render(<Provider store={store}>
        <App/>
        </Provider>);

    const res5=screen.getAllByText('Password');
    expect(res5);

})