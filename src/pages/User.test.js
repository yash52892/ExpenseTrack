import { render, screen } from "@testing-library/react";    
import '@testing-library/jest-dom'    
import User from "./User";  


test('test for username', ()=>{
    render(<User/>);

    const out1=screen.getByText('Natalie Paisley');
    expect(out1).toBeInTheDocument();
})
test('test for gender 1', ()=>{
    render(<User/>);

    const out2=screen.getByText('Female');
    expect(out2).toBeInTheDocument();
})
test('test for age', ()=>{
    render(<User/>);

    const out3=screen.getByText('Age: 12');
    expect(out3).toBeInTheDocument();
})
test('test for Gender', ()=>{
    render(<User/>);

    const out4=screen.getByText('female', {exact:false});
    expect(out4).toBeInTheDocument();
})
test('test for Gender', ()=>{
    render(<User/>);

    const out5=screen.getByText('female', {exact:true});
    expect(out5).toBeInTheDocument();
})
test('test for username', ()=>{
    render(<User/>);

    const out1=screen.getByText('Natalie paisley', {exact:true});
    expect(out1).toBeInTheDocument();
})

