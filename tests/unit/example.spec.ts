import { createWrapper, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import App from  "@/App.vue";
import { mount } from '@vue/test-utils';



/*
describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
*/
// The component to test

/* const MessageComponent = {
  template: '<p>{{ msg }}</p>',
  props: ['msg']
}


test('displays message', () => {
  // mount() returns a wrapped Vue component we can interact with
  const wrapper = mount(MessageComponent, {
    propsData: {
      msg: 'Hello world'
    }
  }) 

  // Assert the rendered text of the component
  expect(wrapper.text()).toContain('Hello world')
})*/

const add = require('@/main');
const tam = require('@/math');


describe('test add(),sub(),mul(),', ()=> {
  test('Addition', () =>{
    expect(add(1,2)).toBe(3);
 });

 test('Subtraktion',()=>{
   expect(tam.sub(5,2)).toBe(3);
 });

 test('Multiplikation',()=>{
   expect(tam.mul(3,3)).toBe(9);
 });

test('not',()=>{
  expect(tam.mul(2,2)).not.toBe(10);
});

test('Division', ()=>{
  expect(tam.div(4,2)).toBe(2);
});

});

test('Is a Vue instance', () => {
    const wrapper = mount(HelloWorld);
    expect(wrapper.isVueInstance()).toBeTruthy();
});

test('prüfen ob Hello im HTML bereich steht', () => {
  const name = "Hello"
  const wrapper = mount(HelloWorld);
  expect(wrapper.html()).toContain(name);
});


test('Testen ob  die Komponente ein p tag besitzt', () => {
  const wrapper = mount(HelloWorld);
  const p = wrapper.find('p')
  expect(p.exists()).toBe(true);
});

test('Testen ob die Klasse hello ein p tag besitzt', () => {
  const wrapper = mount(HelloWorld);
  const classe = wrapper.find('.hello');
  // const test = classe.html();
  // console.log(test);
  expect(classe.find('p').exists()).toBe(true);
});


test('Suche in der Klasse hello den Begriff guide', () => {
  const wrapper = mount(HelloWorld);
  const classe = wrapper.find('.hello');
  expect(classe.html()).toContain("guide");
});

test('resolves to lemon', () => {
  // Vergleich zweier Werte (bei gleichen Datentypen)
  return expect(Promise.resolve(123)).resolves.toBe(123);
});


/* test('Testen ob die Klasse hello ein p tag besitzt', () => {
  const wrapper = mount(HelloWorld);
  const classe = wrapper.find('.hello')
  const p = classe.find('p')
  expect(p.exists()).toBe(true);
});  */

