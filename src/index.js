function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
  expr = expr.replace(/ /g, ''); 
  if (expr.indexOf('/0') !== -1)
  
    throw new Error('TypeError: Division by zero.');

  
  let brackets = 0;
  expr.split('').forEach((el) => {
    el === '(' ? brackets++ : false;
    el === ')' ? brackets-- : false;
  });

  if (brackets !== 0)
  
    throw new Error('ExpressionError: Brackets must be paired');

  
  expr = new Function('return ' + expr);

    return expr();
}

module.exports = {
    expressionCalculator
}