import HelloWorld from '../utils/HelloWorld';


it ("Should return 'Hello Benjamin'", ()=>{

    const result = HelloWorld();

    expect(result).toBe("Hello Benjamin");
});