'use strict'

import h2b from '../src'

console.info('1.5KB   →  %s', h2b('1.5KB'))
console.info('1.5 K   →  %s', h2b('1.5 K'))
console.info('1.5 KB  →  %s', h2b('1.5 KB'))

console.info('1.5Kb   →  %s', h2b('1.5Kb'))
console.info('1.5 Мb  →  %s', h2b('1.5 Kb'))
console.info('1.5 Kb  →  %s', h2b('1.5 Kb'))

console.info('1       →  %s', h2b('1'))
console.info('1B      →  %s', h2b('1B'))
console.info('1 B     →  %s', h2b('1 B'))

console.info('1KB 1   →  %s', h2b('1KB 1'))
console.info('1M 1K   →  %s', h2b('1M 1K'))
