function getAssignment(code, variable, op) {
  return code.match(variable + "\\s*" + op + "\\s*([^;]*);");
}

module.exports = { getAssignment };
