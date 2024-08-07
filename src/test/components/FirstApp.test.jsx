import { render } from "@testing-library/react";
import { FirstApp } from "../../FirstApp";


describe('Pruebas en <FirstApp />' ,()=>{
    test('Debe de hacer match con el snapshot', ()=>{
        const {container} = render(<FirstApp title="First App Running" message="Hello Edwin" name="Edwin Ayala"/>);

        expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrar el titulo en H1', ()=>{

        const title = 'First App Running';

        const {container, getByText } = render(<FirstApp title="First App Running" message="Hello Edwin" name="Edwin Ayala"/>);

        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        console.log( h1.innerHTML );

        expect( container ).toMatchSnapshot();
    });
});