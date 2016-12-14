import htmlModule from './htmlModule';

const HTMLtoFile = () => {
  var string = "";
  string += "<!DOCTYPE html>\n";
  string += "<html>\n";
  string += "  <head>\n";
  string += "    <meta charset=\"utf-8\">\n";
  string += "    <link rel=\"stylesheet\" type=\"text/css\" href=\"yourCSS.css\">\n";
  string += "    <title></title>\n";
  string += "  </head>\n";
  string += "  <body class=background>\n";
  string += "  </body>\n";
  string += "</html>\n";

  return string;
};

export default HTMLtoFile;
