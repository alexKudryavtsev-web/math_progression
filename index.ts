interface Progression {
    n: number,
    pr: number,
    firstElement: number,
    calcByIndex: Function,
    calcSum: Function
}

class ArifmProgression implements Progression {
    n = 0
    pr = 0
    firstElement = 0

    constructor(a1: number, d: number, n?: number) {
        this.firstElement = a1
        this.pr = d
        this.n = n || this.n
    }

    calcByIndex(index: number): number {
        return this.firstElement + this.pr * (index - 1)
    }

    calcSum(n?: number) {
        let size = n || this.n
        return (this.firstElement + this.calcByIndex(size))
            / 2
            * size
    }

    toString(n?: number): string {
        let size = (n || this.n)
        let arr = []
        for (let c = 1; c <= size; c++) {
            arr.push(this.calcByIndex(c))
        }
        return arr.join(', ')
    }
}

class GeomProgression implements Progression {
    n = 0
    pr = 0
    firstElement = 0

    constructor(b: number, q: number, n?: number) {
        this.firstElement = b
        this.pr = q,
            this.n = n || this.n
    }

    calcByIndex(index: number): number {
        return this.firstElement * Math.pow(this.pr, index - 1)
    }

    calcSum(n?: number): number {
        let size = n || this.n
        return (this.firstElement * (Math.pow(this.pr, size) - 1)) / (this.pr - 1)
    }

    toString(n?: number): string {
        let size = (n || this.n)
        let arr = []
        for (let c = 1; c <= size; c++) {
            arr.push(this.calcByIndex(c))
        }
        return arr.join(', ')
    }
}

let geom = {
    calculateDiv(b2, b1) {
        return b2 / b1
    },
    calculateValueByIndex(b1, q, n) {
        return b1 * Math.pow(q, n-1)
    },
    calculateSum(n, b1, q) {
        return (b1 * (Math.pow(q, n) - 1)) / (q - 1)
    }
}

let arifm = {
    calculateDiff(a2: number, a1: number): number {
        return a2 - a1
    },
    calculateSum(a1: number, an: number, n: number): number {
        return (a1 + an) / 2 * n
    },
    calculateFirstElement(an: number, d: number, n: number) {
        return (n - 1) * d - an
    },
    calculateSize(a1: number, an: number, d: number) {
        return (an - a1) / d + 1
    },
    calculateValueByIndex(a1: number, d: number, n: number): number {
        return a1 + d * (n - 1)
    }
}

export {
    arifm,
    geom,
    Progression,
    ArifmProgression,
    GeomProgression
}