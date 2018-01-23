export class Kata {
  static dnaStrand(dna: string) {
    var ret:string = "";
    for(var i:number = 0;i<dna.length;i++){
      switch(dna.charAt(i)){
        case "A":
           ret+="T";
           break;
        case "T":
           ret+="A";
           break;
        case "C":
           ret+="G";
           break;
        case "G":
           ret+="C";
           break;
        default:
          ret+=dna.charAt(i);
      }
    }
    return ret;
  }
}