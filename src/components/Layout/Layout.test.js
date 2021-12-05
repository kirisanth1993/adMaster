import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './Layout';
import { Provider } from "react-redux";
import { render, cleanup } from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"
import store from "../../store";

import renderer from "react-test-renderer";

afterEach(cleanup);

it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Provider store={store}><Layout></Layout></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('Layout rendering correctly', () => {
    const {getByTestId} = render(<Provider store={store}><Layout></Layout></Provider>);
    expect(getByTestId('layout')).toHaveTextContent("Classified Ads")
});

it('Layout rendering correctly', () => {
    const {getByTestId} = render(<Provider store={store}><Layout></Layout></Provider>);
    expect(getByTestId('layout')).toHaveTextContent("Home")
});

it("it matches snapshot", () => {
    const tree = renderer.create(<Provider store={store}><Layout></Layout></Provider>).toJSON();
    expect(tree).toMatchSnapshot();
})