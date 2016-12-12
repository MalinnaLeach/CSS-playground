import CSStoFile from '../src/CSStoFile';
import toCssStyle from '../src/CSStoFile';


describe("CCStoFile", () => {

  it("should correctly compile CSS formatted text", () => {
    var conversion = CSStoFile()
    expect(conversion).toEqual(".background {\n  background-color: white;\n  height: 100vh;\n}\n\n")
  })


})
