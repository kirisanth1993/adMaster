import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './ListView';
import { Provider } from "react-redux";
import { cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import store from "../../store";

import renderer from "react-test-renderer";

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Provider store={store}><ListView></ListView></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});


it("it matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><ListView></ListView></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
})