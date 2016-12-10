import cssModule from './cssModule';

const CSStoFile = (context) => {
  var string = ""
  Object.keys(cssModule).forEach(function(name) {
    string += ("." + name + " {\n");
    Object.keys(cssModule[name]).forEach(function(property) {
      string += ("  " + (toCssStyle(property)) + ": " + cssModule[name][property] + ";\n")
    })
    string += "}\n\n"
  })
  return string
}

const toCssStyle = (camelCase) => {
  return camelCase.replace(/\.?([A-Z]+)/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "");
}

export default CSStoFile;
