# math_progression
The library contains solutions for working with mathematical progressions.

### install

```
npm i math_progression
```

### use

```
const math = require('math_progression')

let res = math.arifm.calculateValueByIndex(10, 10, 10)
console.log(res)
```

### docs

- `arifm` includes functions for calculating arithmetic progressions.
- `geom` includes functions for calculating geometric progressions
- `Progression` - interface for ArifmProgression and GeomProgression
- `ArifmProgression` - the object is an arithmetic progression
- `GeomProgression` - the object is an geometric progression