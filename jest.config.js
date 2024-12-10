/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {
      tsconfig: {
        target: "ESNext",
        experimentalDecorators: true,
        emitDecoratorMetadata: true
      }
    }],
  },
};