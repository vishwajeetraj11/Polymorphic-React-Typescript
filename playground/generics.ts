const echo = <T>(value: T): T => {
  console.log(value);
  return value;
};

echo<number>(1);
echo<string>('string');
echo<object>({});

// constraints
// Type having a length property always
const echoLength = <T extends { length: number }>(value: T): T => {
  console.log(value.length);
  return value;
};
