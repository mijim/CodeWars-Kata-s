export class Kata {
    static validatePin(pin: string): boolean {
      if(pin.length < 4 || pin.length > 6 || pin.length == 5) return false;
      if(isNaN(Number(pin))) return false;
      if(Number(pin) != 0 && (Number(pin) < 1 || Number(pin) > 999999)) return false;
      return true; 
    }
}