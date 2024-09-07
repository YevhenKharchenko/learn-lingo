export function addComma(languages) {
  if (languages.length < 2) return languages;

  return languages.join(', ');
}
