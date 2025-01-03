# Notes

```sh
# NOTE: must have rename installed
rename -v "icon-" "" icon-*.svg
```

```js
import fs from "node:fs";

// Read all SVG files from the current directory
const files = fs.readdirSync(".").filter((file) => file.endsWith(".svg"));

// Convert kebab-case to PascalCase and add Icon prefix
function toIconName(filename = "") {
  return `Icon${filename
    .replace(".svg", "")
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("")}`;
}

// Generate the export statements
const exports = files
  .map((file) => {
    const iconName = toIconName(file);
    return `export { default as ${iconName} } from './${file}'`;
  })
  .join("\n");

// Write to index.ts
fs.writeFileSync("index.ts", `${exports}\n`);

```

or

```sh
for f in *.svg; do echo "export { default as Icon$(echo "${f%.svg}" | sed -r 's/(^|-)([a-z])/\U\2/g')} from './$f'"; done > index.ts
```
