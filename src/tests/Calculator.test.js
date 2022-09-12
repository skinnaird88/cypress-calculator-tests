import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 to 4 and return 5', () => {
    // assign button number 1 to a variable
    const runningTotal = container.getByTestId('running-total');
    // const newTotal = container.calculatedTotal
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    // fire event click for each of 1, + and 4
    const addButton = container.getByTestId('operator-add');
    fireEvent.click(addButton);
    // assign button number 4 to a variable
    const button4 = container.getByTestId('number4')
    // call on the add function with operator add
    fireEvent.click(button4);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton)
    // declare the expected calculated total
    expect(runningTotal.textContent).toEqual('5');
    
  })

  it('should subtract 4 from 7 and return 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button7 = container.getByTestId('number7')
    fireEvent.click(button7);
    const minusButton = container.getByTestId('operator-subtract');
    fireEvent.click(minusButton)
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4)
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to multiply 3 by 5 and return 15', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3')
    fireEvent.click(button3);
    const multiplyButton = container.getByTestId('operator-multiply');
    fireEvent.click(multiplyButton);
    const button5 = container.getByTestId('number5')
    fireEvent.click(button5)
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('should be able to divide 21 by 7 and return 3', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const divideButton = container.getByTestId('operator-divide')
    fireEvent.click(divideButton);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('should be able to concatenate multiple number key clicks', () => {
    const runningTotal = container.getByTestId('running-total');
    const button2 = container.getByTestId('number2');
    fireEvent.click(button2);
    const button1 = container.getByTestId('number1');
    fireEvent.click(button1);
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    expect(runningTotal.textContent).toEqual('213')
  })

  it('should be able to chain multiple operations together', () => {
    const runningTotal = container.getByTestId('running-total');
    const button9 = container.getByTestId('number9');
    fireEvent.click(button9);
    const multiplyButton = container.getByTestId('operator-multiply');
    fireEvent.click(multiplyButton);
    const button7 = container.getByTestId('number7');
    fireEvent.click(button7);
    const minusButton = container.getByTestId('operator-subtract');
    fireEvent.click(minusButton)
    const button3 = container.getByTestId('number3');
    fireEvent.click(button3);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton)
    expect(runningTotal.textContent).toEqual('60')
  })

  it('should clear the running toal without affecting the calculaiton', () => {
    const runningTotal = container.getByTestId('running-total');
    const button3 = container.getByTestId('number3')
    fireEvent.click(button3);
    const multiplyButton = container.getByTestId('operator-multiply');
    fireEvent.click(multiplyButton);
    const button9 = container.getByTestId('number9')
    fireEvent.click(button9);
    const equalsButton = container.getByTestId('operator-equals');
    fireEvent.click(equalsButton);
    const addButton = container.getByTestId('operator-add');
    fireEvent.click(addButton);
    const button4 = container.getByTestId('number4')
    fireEvent.click(button4);
    const clearButton = container.getByTestId('clear')
    fireEvent.click(clearButton);
    const buttonEquals = container.getByTestId('operator-equals');
    fireEvent.click(buttonEquals);
    expect(runningTotal.textContent).toEqual('27')
  })
}
)
