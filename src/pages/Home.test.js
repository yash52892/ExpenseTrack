import { render, screen } from "@testing-library/react";    
import '@testing-library/jest-dom'   
import Home from "./Home";
import { Provider } from "react-redux";
import {store } from '../Redux/store'
import App from "../App";


test('testing home verify email', async ()=>{
    window.fetch=jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async ()=> "",
    });
    render(<Provider store={store}><App/><Home/></Provider>);
    const liEl= await screen.getAllByRole('button');
    expect(liEl).toBeInTheDocument();
});