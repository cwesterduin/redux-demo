import React from 'react'
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, fireEvent, screen } from '../../test/testUtils'
import DeleteButton from '.';


describe("DeleteButton", () => {
  test("it renders a delete button with a function", () => {
    const stubHandleClick = jest.fn();
    const initState = [{id:1, title: 'test', body: 'test', completed: true}]
    render(<DeleteButton todoId={1} handleClick={stubHandleClick} />, { initialState: initState })
    let btn = screen.getByRole("button");
    expect(btn.onclick).toBeInstanceOf(Function)
  });

  test("it does something on click", () => {
    const initState = [{id:1, title: 'test', body: 'test', completed: true}]
    const stubHandleClick = jest.fn();
    render(<DeleteButton todoId={1} handleClick={stubHandleClick}/>, { initialState: initState })
    let btn = screen.getByText(/delete/);
    fireEvent.click(btn)    
    expect(stubHandleClick).toHaveBeenCalledTimes(1);
  });
});
