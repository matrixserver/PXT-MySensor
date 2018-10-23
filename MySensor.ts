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

//% weight=100 color=#ff9933 icon="\uf11e"
namespace MySensor {

    /**
     * read analog light sensor's value
     * @return number   returns analog value from 0 to 1023
     */
    //% blockId="Mysensor_analog"  block="read analog sensor |%AnalogSensor|"
    //% weight=90
   export function analogREAD(analogSelect:AnalogSensor): number {
 	let ADCValue:number
	  if (analogSelect==AnalogSensor.S0) {
          	return pins.analogReadPin(AnalogPin.P0)
	  }
	  if (analogSelect==AnalogSensor.S1) {
          	return pins.analogReadPin(AnalogPin.P1)
	  }
	  if (analogSelect==AnalogSensor.S2) {
          	return pins.analogReadPin(AnalogPin.P2)
	  }
	  if (analogSelect==AnalogSensor.S3) {
          	return pins.analogReadPin(AnalogPin.P3)
	  }
	  if (analogSelect==AnalogSensor.S4) {
          	return pins.analogReadPin(AnalogPin.P4)
	  }
	  if (analogSelect==AnalogSensor.S10) {
          	return pins.analogReadPin(AnalogPin.P10)
	  }
  }
}
