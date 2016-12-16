import HTMLtoFile from '../src/HTMLtoFile';

describe("HTMLtoFile", () => {

  it("should correctly compile HTML formatted text", () => {
    var testData = [{type:"div", class: "first", children: [{type:"div", class: "firstchild", children: [{type:"div", class: "firstgrandchild", children: []}]}]}, {type:"div", class: "second", children: []}]
    var conversion = HTMLtoFile(testData)
    expect(conversion).toEqual("<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\">\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"yourCSS.css\">\n    <title></title>\n  </head>\n  <body class=\"background\">\n    <div class=\"first\">\n      <div class=\"firstchild\">\n        <div class=\"firstgrandchild\">\n        </div>\n      </div>\n    </div>\n    <div class=\"second\">\n    </div>\n  </body>\n</html>\n")
  })


})
