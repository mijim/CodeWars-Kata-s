export function getLengthOfMissingArray(arrayOfArrays:any[]):number {
    var set:Set<number> = new Set<number>();
    var max:number = 0;
    var min:number = arrayOfArrays.length;

    for(let i = 0; i<arrayOfArrays.length;i++ ){
        let len = arrayOfArrays[i].length;
        if(len == 0) return 0;
        if(len > max) max = len;
        if(len < min) min = len;
        set.add(len);
    }
    
    for(let i = min;i<=max;i++){
        if(!set.has(i)) return i;
    }
    
    return 0;
}