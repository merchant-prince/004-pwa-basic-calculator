import { ref, watch } from "vue";

export default function useCalculator() {
  const expression = ref("0");
  const result = ref(0);

  const _isNumeric = (value: string) => !isNaN(Number(value));

  const addToExpression = (value: number | string) => {
    const tokens = expression.value.split(" ");
    const lastIndex = tokens.length - 1;

    if (typeof value === "number") {
      if (_isNumeric(tokens[lastIndex])) {
        tokens[lastIndex] += value.toString();
      } else {
        tokens.push(value.toString());
      }
    } else {
      if (_isNumeric(tokens[lastIndex])) {
        if (value === ".") {
          if (!tokens[lastIndex].includes(".")) {
            tokens[lastIndex] += value;
          }
        } else {
          tokens.push(value);
        }
      }
    }

    if (tokens.length === 1 && _isNumeric(tokens[0]) && value !== ".") {
      tokens[0] = Number(tokens[0]).toString();
    }

    expression.value = tokens.join(" ");
  };

  const removeLastCharacterFromExpression = () => {
    const tokens = expression.value.split(" ");
    const lastTokenCharacters = tokens[tokens.length - 1].split("");

    if (lastTokenCharacters.length === 1) {
      tokens.pop();
    } else {
      lastTokenCharacters.pop();

      tokens[tokens.length - 1] = lastTokenCharacters.join("");
    }

    const resultingExpression = tokens.join(" ");

    expression.value = resultingExpression === "" ? "0" : resultingExpression;
  };

  const clearExpression = () => {
    expression.value = "0";
  };

  const _safelyEvaluateExpression = () => {
    let safeResult: number;

    try {
      safeResult = eval(expression.value);
    } catch {
      safeResult = result.value;
    }

    return safeResult;
  };

  const evaluateExpression = () => {
    const resultOfExpression = _safelyEvaluateExpression();

    expression.value = resultOfExpression.toString();
  };

  watch(expression, () => (result.value = _safelyEvaluateExpression()));

  return {
    expression,
    result,
    addToExpression,
    removeLastCharacterFromExpression,
    clearExpression,
    evaluateExpression,
  };
}
