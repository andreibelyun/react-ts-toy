type Mods = Record<string, boolean | string>;

export function classNames(
  mainClass: string,
  additional: string[],
  mods: Mods = {}
): string {
  return [
    mainClass,
    ...additional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className, _]) => className),
  ].join(" ");
}
