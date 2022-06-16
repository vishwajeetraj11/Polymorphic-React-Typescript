type Vowels = {
  a: 'a';
  e: 'e';
  i: 'i';
  o: 'o';
  u: 'u';
};
type VowelInOhansObject = Pick<Vowels, 'a' | 'o'>;
type VowelNotInOhansObject = Omit<Vowels, 'a'>;
type VowelsInOhans = keyof Vowels;

const favVowels: VowelsInOhans = 'i';
