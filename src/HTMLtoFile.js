import htmlModule from './htmlModule';

const HTMLtoFile = (array=htmlModule[0].children) => {
  var string = "";
  string += "<!DOCTYPE html>\n";
  string += "<html>\n";
  string += "  <head>\n";
  string += "    <meta charset=\"utf-8\">\n";
  string += "    <link rel=\"stylesheet\" type=\"text/css\" href=\"yourCSS.css\">\n";
  string += "    <title></title>\n";
  string += "  </head>\n";
  string += "  <body class=\"background\">\n";
  string += moduleLoop(array)
  string += "  </body>\n";
  string += "</html>\n";
  return string;
};

const moduleLoop = (array, results=[], indent="  ") => {
  indent += "  "
  for (var element of array) {
    results.push(indent)
    results.push("<" + element.type + " class=\"" + element.class + "\">\n")
    if (element.children !== []) {
      moduleLoop(element.children, results, indent)
    }
    results.push(indent)
    results.push("</" + element.type + ">\n")
  }
  return results.join("");
}

export default HTMLtoFile;
