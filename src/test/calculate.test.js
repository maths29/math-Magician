import calculate from "../logic/calculate";
const test = {total: '400', next: '200', operation: '+'}
describe ('operate test', () => {
it('400 + 200 = 600', () =>{
   const {total} = calculate(test, '=')
   expect(total).toStrictEqual('600')
})
}) 