const { it, expect } = require("@jest/globals");
const { exitCode } = require("process");
const Math = require("../math.js");

describe("Math", () => {
  describe("init", () => {
    it("It should return an object with the num set to the first argument", () => {
      const obj = new Math(2);

      expect(obj.num).toEqual(2);
    });
    it("It should set num to arguement that was passed", () => {
      const obj = new Math();
      expect(obj.num).toEqual(0);
    });
    it("Should throw error if string is passed", () => {
      const cb = () => new Math("boop");
      expect(cb).toThrowError("Must pass a number or nothing at all");
    });
  });
  describe("methods", () => {
    describe("add", () => {
      it("Should return an object with its parent objects num plus zero", () => {
        const obj = new Math(10).add();
        expect(obj.num).toEqual(10);
      });
      it("Should return an object with its parent objects num plus the arguement that was passed", () => {
        const obj = new Math(10).add(5);
        expect(obj.num).toEqual(15);
      });
    });
    describe("sub", () => {
      it("Should return an object with its parent objects num minus zero", () => {
        const obj = new Math(10).sub();
        expect(obj.num).toEqual(10);
      });
      it("Should return an object with its parent objects num minus the arguement that was passed", () => {
        const obj = new Math(10).sub(5);
        expect(obj.num).toEqual(5);
      });
    });
    describe("multiply", () => {
      it("Should return an object with its parent objects num multiplied by zero", () => {
        const obj = new Math(10).multiply();
        expect(obj.num).toEqual(0);
      });
      it("Should return an object with its parent objects num multiplied by the arguement that was passed", () => {
        const obj = new Math(10).multiply(5);
        expect(obj.num).toEqual(50);
      });
    });
    describe("divide", () => {
      it("Should return an object with its parent objects num divided by zero", () => {
        const obj = new Math(10).divide();
        expect(obj.num).toEqual(Infinity);
      });
      it("Should return an object with its parent objects num divided by the arguement that was passed", () => {
        const obj = new Math(10).divide(5);
        expect(obj.num).toEqual(2);
      });
    });
  });
});
