function pipesInPool (input) {
    let p1=Number (input[1])
    let p2=Number (input[2])
    let v=Number (input [0])
    let time=Number (input [3])

    let p1V=p1*time
    let p2V=p2*time

    let p1P=(p1V/v)*100
    let p2P=(p2V/v)*100

    if (p1V+p2V<=v) {
        console.log (`The pool is ${(p1P+p2P).toFixed (2)}% full. Pipe 1: ${(p1V/(p1V+p2V)*100).toFixed(2)}%. Pipe 2: ${(p2V/(p1V+p2V)*100).toFixed(2)}%`)
    }
    else if (p1V+p2V>v) {
        console.log (`For ${time} hours the pool overflows with ${(p1V + p2V) - v}`)
    }

}
pipesInPool (["1000", "100", "120", "3"])