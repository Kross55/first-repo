import React from "react";
import { create } from "react-test-renderer";
import ProfileStatusWithHooks from "./ProfileStatus";

describe("ProfileStatus component", () => {

  test("status from the props should be in the state", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("it-kamasutra.com");
  });

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span")
    expect(span.children.length).toBe(1);//у span внутри массив с детьми - в нашем случае вот ["it-kamasutra.com"] массив с одним обьектом
  });

  test("after creation <span> should be displayed with correct status", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span")
    expect(span.children[0]).toBe("it-kamasutra.com");//проверка на внутренность массива в span
  });

  
  test("after creation <input> shouldn`t be displayed", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    const root = component.root;
    
    expect( () => {                       //пока мы не кликнули по статусу - <input> не существует
      let input = root.findByType("input")//помещаем в ф-цию т.к. findByType может найти только то, что существует
    }).toThrow();                         //проверяет на правильность ошибки того что внутри ф-ции
  });

  test("after clicking on <span> it shouldn`t be displayed", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();          //мы кликнули по статусу - <span> перестал существовать  
    
    expect( () => {                      //проверяем тоб что <span> не существует
      let span = root.findByType("span") //помещаем в ф-цию т.к. findByType может найти только то, что существует
    }).toThrow();
    
  });

  test("<input> should be displayed in editMode instead of <span>", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();               //мы кликнули по статусу - <span> перестал существовать 
    let input = root.findByType("input");
    expect(input.children[0]).toBe(undefined);//проверка на внутренность массива в input - пустая строка, что есть undefined
  });

  test("<input> should be displayed in editMode with value={status}", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");
    span.props.onDoubleClick();               //мы кликнули по статусу - <span> перестал существовать  
    let input = root.findByType("input");
    expect(input.props.value).toBe("it-kamasutra.com");//проверка значения value
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();           //ф-ция шпион для проверки работы callback-ов в компонентах
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" updateStatus={ mockCallback }/>);
    const instance = component.getInstance();
    instance.deActivateEditeMode()
    expect(mockCallback.mock.calls.length).toBe(1);//проверка на то, что функция была вызвана ровно один раз
  });

});