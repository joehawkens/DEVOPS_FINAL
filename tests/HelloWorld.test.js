import HelloWorld from '../utils/HelloWorld';


it ("Should return 'Hello Benjamin'", ()=>{

    result = HelloWorld();

    expect(result).toBe("Hello Benjamin");
})