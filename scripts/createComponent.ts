#!/usr/bin/env bun

import { mkdir, writeFile, access } from 'fs/promises'
import { constants } from 'fs'
import { join } from 'path'
import { toCamelCase, toPascalCase } from './utils'

const supportedStyles = ['css'] as const

async function componentExists(path: string): Promise<boolean> {
  try {
    await access(path, constants.F_OK) // Flag that the file is visible, but nothing about rwx permissions
    return true
  } catch {
    return false
  }
}

const args = process.argv.slice(2)
const [name, styling] = args

if (!name || !styling) {
  console.error('❓ Missing arguments! Usage: createComponent <name> <styling>')
  process.exit(1)
}

if (!supportedStyles.includes(styling as (typeof supportedStyles)[number])) {
  console.error(
    `🛑 Unsupported styling type. Supported types are: ${supportedStyles.join(', ')} 🎨`
  )
  process.exit(1)
}

async function createComponent(): Promise<void> {
  const componentName = toPascalCase(name)
  const stylingName = toCamelCase(name)
  const componentDir = `app/components/${styling}/${componentName}`

  if (await componentExists(componentDir)) {
    console.error(`🛑 Component ${componentName} already exists. 🙅`)
    process.exit(1)
  }

  await mkdir(componentDir, { recursive: true })

  const files = {
    [`${componentName}.tsx`]: `import './${stylingName}.${styling}'\nexport const ${componentName} = () => null\n`,
    [`${stylingName}.${styling}`]: `/* Add your styles here */\n`,
    ['index.ts']: `export { ${componentName} } from './${componentName}'\n`,
  }

  await Promise.all(
    Object.entries(files).map(([fileName, content]) =>
      writeFile(join(componentDir, fileName), content)
    )
  )

  console.log(`✅ Component ${componentName} created successfully!`)
}

createComponent().catch((error) => {
  console.error('❌ Error creating component:', error)
  process.exit(1)
})
