export default function CapitalizeWords(str: string) {
  return str.replace(/\b\w/g, function (char: string) {
    return char.toUpperCase();
  });
}
