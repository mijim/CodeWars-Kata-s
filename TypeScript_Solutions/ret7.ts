export class G964 {

    public static perimeter = (n) => {
        return (fib(n) * 4)-4;
    }
}

function fib(n:number){
    var n0:number = 0;
    var n1:number = 1;

    for(var i=0; i<n+2 ; i++){
        let nOld:number = n1;
        n1 = n1 + n0;
        n0 = nOld;
    }

    return n1;
}