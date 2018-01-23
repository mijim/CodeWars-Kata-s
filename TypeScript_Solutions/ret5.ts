export class G964 {
    public static evaporator(content: number, evap_per_day: number, threshold: number): number {
        var cantidad_util:number = (content * threshold) / 100;
        var num_dias:number = 0;
        while(content > cantidad_util){
            content -= (content * evap_per_day) / 100;
            num_dias += 1;
        }
        return num_dias;
    }
}