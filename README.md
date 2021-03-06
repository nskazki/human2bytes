# human2bytes

> h2b('1K') → 1024
> <br>[filesize.js](https://github.com/avoidwork/filesize.js) inverter.

```
npm i -S human2bytes
```

### Example

```js
import h2b from 'human2bytes'

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

/*
1.5KB   →  1536
1.5 K   →  1536
1.5 KB  →  1536
1.5Kb   →  192
1.5 Мb  →  192
1.5 Kb  →  192
1       →  1
1B      →  1
1 B     →  1
1KB 1   →  1025
1M 1K   →  1049600
*/
```

### Debug and other

* More examples are available in the `/test` folder
* Run the test: `npm test`
* To display the debugging messages: 
```bash
DEBUG=libs-human2debug npm test
DEBUG=libs-human2debug $(npm bin)/babel-node example
```
