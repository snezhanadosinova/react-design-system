export function mergeDescribedBy(
  ...ids: Array<string | undefined>
): string | undefined {
  const merged = [...new Set(ids.flatMap((value) => value?.split(/\s+/) ?? []))]
    .filter(Boolean)
    .join(" ");

  return merged || undefined;
}
