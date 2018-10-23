/**
 * support for Sensor
 */

enum AnalogSensor {
        //% block="P0"
        S0,
        //% block="P1"
        S1,
        //% block="P2"
        S2,
        //% block="P3"
        S3,
        //% block="P4"
        S4,
        //% block="P10"
        S10
    }

//% weight=50 color=#ff9933 icon="\uf11e"
namespace MySensor {

    /**
     * read analog light sensor's value
     */
    //% blockId="Mysensor_analog"  block="analog read|%AnalogSensor|"
    //% weight=90
   export function analogREAD(analogSelect:AnalogSensor): number {
	   let analogREAD = 0
	  if (analogSelect==AnalogSensor.S0) {
          	analogREAD = pins.analogReadPin(AnalogPin.P0)
		return analogREAD
	  }
	  if (analogSelect==AnalogSensor.S1) {
          	analogREAD = pins.analogReadPin(AnalogPin.P1)
		return analogREAD
	  }
	  if (analogSelect==AnalogSensor.S2) {
          	analogREAD = pins.analogReadPin(AnalogPin.P2)
		return analogREAD
	  }
	  if (analogSelect==AnalogSensor.S3) {
          	analogREAD = pins.analogReadPin(AnalogPin.P3)
		return analogREAD
	  }
	  if (analogSelect==AnalogSensor.S4) {
          	analogREAD = pins.analogReadPin(AnalogPin.P4)
		return analogREAD
	  }
	  if (analogSelect==AnalogSensor.S10) {
          	analogREAD = pins.analogReadPin(AnalogPin.P10)
		return analogREAD
	  }
  	}
}
