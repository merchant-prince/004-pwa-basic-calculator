import { nextTick } from "vue";
import useCalculator from "../../../src/composables/calculator";

describe("useCalculator", () => {
  it("removes the last character from the expression", () => {
    const { expression, removeLastCharacterFromExpression } = useCalculator();

    expression.value = "1 + 1";

    removeLastCharacterFromExpression();

    expect(expression.value).toBe("1 +");
  });

  it('sets the expression to "0" if the expression is empty after removing the last characer in it', () => {
    const { expression, removeLastCharacterFromExpression } = useCalculator();

    expression.value = "1";

    removeLastCharacterFromExpression();

    expect(expression.value).toBe("0");
  });

  it("clears the expression", () => {
    const { expression, clearExpression } = useCalculator();

    expression.value = "44 + 332";

    clearExpression();

    expect(expression.value).toBe("0");
  });

  it("evaluates a correct expression", () => {
    const { expression, evaluateExpression } = useCalculator();

    expression.value = "1 + 1 * 3 + 3 * 10 + 1";

    evaluateExpression();

    expect(expression.value).toBe("35");
  });

  it("returns the result of the previous expression if the current expression is incorrect", () => {
    const { expression, result, evaluateExpression } = useCalculator();

    result.value = 44;
    expression.value = "1 + 5 + 44 * 2";

    evaluateExpression();

    expect(expression.value).toBe("94");
  });

  it("changes the result when the expression is mutated accordingly", async () => {
    const { expression, result } = useCalculator();

    expression.value = "44 + 3 - 2 * 3.5";

    await nextTick();

    expect(result.value).toBeCloseTo(40);
  });

  describe("expression", () => {
    it("adds a number (separated by a space) after an operator", () => {
      const { expression, addToExpression } = useCalculator();

      expression.value = "1 +";

      addToExpression(4);

      expect(expression.value).toBe("1 + 4");
    });

    it("adds a number after a number", () => {
      const { expression, addToExpression } = useCalculator();

      expression.value = "4 + 44";

      addToExpression(8);

      expect(expression.value).toBe("4 + 448");
    });

    it("adds a decimal point to a number", () => {
      const { expression, addToExpression } = useCalculator();

      expression.value = "84 - 32";

      addToExpression(".");

      expect(expression.value).toBe("84 - 32.");
    });

    it("can add a decimal point to the first token of an expression", () => {
      const { expression, addToExpression } = useCalculator();

      expression.value = "45";

      addToExpression(".");

      expect(expression.value).toBe("45.");
    });

    it("adds a number after a decimal", () => {
      const { expression, addToExpression } = useCalculator();

      expression.value = "235.";

      addToExpression(8);

      expect(expression.value).toBe("235.8");
    });

    it("does not add more than one decimal in a number token", () => {
      const { expression, addToExpression } = useCalculator();

      expression.value = "44.3";

      addToExpression(".");

      expect(expression.value).toBe("44.3");
    });

    it("adds an operator (separated by a space) after a number", () => {
      const { expression, addToExpression } = useCalculator();

      expression.value = "1 + 5 * 3";

      addToExpression("-");

      expect(expression.value).toBe("1 + 5 * 3 -");
    });

    it("displays an expression without prefixing its tokens with 0", () => {
      const { expression, addToExpression } = useCalculator();

      expression.value = "0";

      addToExpression(5);

      expect(expression.value).toBe("5");
    });
  });
});
