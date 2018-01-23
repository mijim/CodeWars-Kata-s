export function averages(numbers:number[]):number[] {
    if(numbers == null || numbers.length < 2) return [];
    var list:Array<number> = new Array<number>();
    for(var i=0; i<numbers.length-1;i++){
        list.push((numbers[i] + numbers[i+1]) / 2);
    }
    return list;
}