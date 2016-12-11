import cssModule from './cssModule';

const CSStoFile = () => {
  var string = ""
  for (var name of Object.keys(cssModule)) {
    string += ("." + name + " {\n");
    for (var property of Object.keys(cssModule[name])) {
      string += ("  " + (toCssStyle(property)) + ": " + cssModule[name][property] + ";\n")
    }
    string += "}\n\n"
  }
  return string
}

const toCssStyle = (camelCase) => {
  return camelCase.replace(/\.?([A-Z]+)/g, function (x,y){return "-" + y.toLowerCase()}).replace(/^-/, "");
}

export default CSStoFile;
