import { start, registerApplication } from 'single-spa'

const hashPrefix = prefix => location => location.hash.startsWith(`#${prefix}`)

registerApplication('react', () => import('../react/index.js'), hashPrefix('/'))
registerApplication('angular', () => import('../angular/index.js'), hashPrefix('/'))

start()
