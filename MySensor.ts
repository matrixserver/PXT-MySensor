/**
  * Coding for read analog sensor.
  */
   enum sensorSEL {
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

/**
 * Custom blocks
 */
//% weight=50 color=#006600 icon="\uf11e"
namespace MySensor {

     /**
     * Read Analog Sensor P0-P4,P10 
     * 
     */

    //% blockId="MySensor_readADC" block="analog sensor %readADC"
    //% weight=100
    export function readADC(readADC:sensorSEL): number{
	let readADC:number
	if(readADC == sensorSEL.S0){
	    return readADC = pins.analogReadPin(AnalogPin.P0)
        }
	if(readADC == sensorSEL.S1){
	    return readADC = pins.analogReadPin(AnalogPin.P1)
        }
	if(readADC == sensorSEL.S2){
	    return readADC = pins.analogReadPin(AnalogPin.P2)
        }
	if(readADC == sensorSEL.S3){
	    return readADC = pins.analogReadPin(AnalogPin.P3)
        }
	if(readADC == sensorSEL.S4){
	    return readADC = pins.analogReadPin(AnalogPin.P4)
        }
	if(readADC == sensorSEL.S10){
	    return readADC = pins.analogReadPin(AnalogPin.P10)
        }
    }
 }
