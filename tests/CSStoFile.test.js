import CSStoFile from '../src/CSStoFile';
import toCssStyle from '../src/CSStoFile';
import cssModule from '../src/cssModule';


describe("CCStoFile", () => {

  it("should correctly compile CSS formatted text", () => {
    cssModule["background"] = {"backgroundColor": "white", "height": "100vh"}
    var conversion = CSStoFile()
    expect(conversion).toEqual(".background {\n  background-color: white;\n  height: 100vh;\n}\n\n")
  })


})
