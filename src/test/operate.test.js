import operate from "../logic/operate";
const test = {total: '400', next: '200', operation: '+'}
describe ('operate test', () => {
it('2 + 4 = 6', () =>{
    expect(operate('2', '4', '+')).toStrictEqual('6')
})
}) 
