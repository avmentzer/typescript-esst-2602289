const ComplexFunction = () => {
  return () => {
    return [2, { courseName: "TypeScript" }];
  };
};

export function Challenge() {
  type ComplexFunctionType = typeof ComplexFunction;
  type innerFunctionType = ReturnType<ComplexFunctionType>;
  type innerFunctionReturn = ReturnType<innerFunctionType>
  type secondType = Exclude<innerFunctionReturn[number], number>;
  //type ReturnedObjectType = Exclude<secondType, number>;    
}
