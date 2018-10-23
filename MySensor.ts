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

//% weight=50 color=#cc6600 icon="\uf11e"
namespace MySensor {

    /**
     * read analog light sensor's value
     * @return number   returns analog value from 0 to 1023
     */
    //% blockId="Mysensor_analog"  block="read analog sensor |%AnalogSensor|"
    //% weight=90
   export function analogREAD(analogSelect:AnalogSensor): number {
	  if (analogSelect==AnalogSensor.S0) {
          	return analogREAD = pins.analogReadPin(AnalogPin.P0)
	  }
	  if (analogSelect==AnalogSensor.S1) {
          	return analogREAD = pins.analogReadPin(AnalogPin.P1)
	  }
	  if (analogSelect==AnalogSensor.S2) {
          	return analogREAD = pins.analogReadPin(AnalogPin.P2)
	  }
	  if (analogSelect==AnalogSensor.S3) {
          	return analogREAD = pins.analogReadPin(AnalogPin.P3)
	  }
	  if (analogSelect==AnalogSensor.S4) {
          	return analogREAD = pins.analogReadPin(AnalogPin.P4)
	  }
	  if (analogSelect==AnalogSensor.S10) {
          	return analogREAD = pins.analogReadPin(AnalogPin.P10)
	  }
  }
}
