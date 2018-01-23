export const findOdd = (xs: number[]): number => {
    var map:Map<number,number> = new Map<number,number>();
    xs.forEach(element => {
      if(!map.has(element)){
        map.set(element,1);
      }else{
        map.set(element,map.get(element)+1);
      }
    });
    

    for(let key of map.keys()){
        if(map.get(key) % 2 != 0)
            return key;
    }
    return 0;
};