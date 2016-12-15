import HTMLtoFile from '../src/HTMLtoFile';

describe("HTMLtoFile", () => {

  it("should correctly compile HTML formatted text", () => {
    var testData = [{type:"div", class: "first", children: [{type:"div", class: "firstchild", children: [{type:"div", class: "firstgrandchild", children: []}]}]}, {type:"div", class: "second", children: []}]
    var conversion = HTMLtoFile(testData)
    expect(conversion).toEqual("what?")
  })


})
