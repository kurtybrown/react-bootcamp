import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

import { MyAwesomeComp } from "./MyAwesomeComp";


describe('MyAwesomeComp', () => {

  test('should render firstName and lastName', () => {

    // console.log(document.body);

    const { container } = render(<MyAwesomeComp></MyAwesomeComp>)
    // console.log(container.innerHTML);
    const h1 = container.querySelector('h1');
    const h3 = container.querySelector('h3');

    expect(h1?.innerHTML).toContain('Carlos')
    expect(h3?.innerHTML).toContain('Ocaña')

  })

  test('should render firstName and lastName - screen', () => {
    render(<MyAwesomeComp/>)
    screen.debug()
    // console.log(container.innerHTML);
    // const h1 = screen.getByRole('heading', {
    //   level: 1
    // })
    const h1 = screen.getByTestId('title-name')
    expect(h1.innerHTML).toContain('Carlos')

    console.log(h1.innerHTML);
  })
})