export function toPascalCase(str: string): string {
  return str.replace(/(^\w|-\w)/g, (match) =>
    match.replace('-', '').toUpperCase()
  )
}

export function toCamelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase())
}
