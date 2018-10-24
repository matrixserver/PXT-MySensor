/**
 * support for read analog and digital sensor
 */
//% weight=10 icon="\uf11e" color=#339933 block="MySensor"
namespace MySensor {

   export enum analogPins {
        P0,
        P1,
        P2,
        P3,
        P4,
        P10
    }

    export enum digitalPins {
        P0,
        P1,
        P2,
        P3,
        P4,
        P10,
        P6,
        P7,
        P8,
        P9,
        P12,
        P5,
        P11
    }

    /**
     * read analog sensor value from P0 -P4 and P10
     * @param selectpin         select analog pin to read
     * @return number           returns analog value from 0 to 1023
     */
    //% blockId=MySensor_analogRead
    //% block="analog read sensor |%selectpin|"
    //% weight=80
    export function analogRead(selectpin: analogPins): number {
        switch (selectpin) {
            case analogPins.P0:
                return pins.analogReadPin(AnalogPin.P0);
            case analogPins.P1:
                return pins.analogReadPin(AnalogPin.P1);
            case analogPins.P2:
                return pins.analogReadPin(AnalogPin.P2);
            case analogPins.P3:
                return pins.analogReadPin(AnalogPin.P3);
            case analogPins.P4:
                return pins.analogReadPin(AnalogPin.P4);
            case analogPins.P10:
                return pins.analogReadPin(AnalogPin.P10);
            default:
                return 0;
        }
    }

    /**
     * read Digital sensor value from P0-P12
     * @param selectpins         select digital pin to read
     * @return number           returns analog value  0 or 1
     */
    //% blockId=MySensor_digitalRead
    //% block="digital read sensor |%selectpins|"
    //% weight=79
    export function digitalRead(selectpins:digitalPins): number {
        switch (selectpins) {
            case digitalPins.P0:
                return pins.digitalReadPin(DigitalPin.P0);
            case digitalPins.P1:
                return pins.digitalReadPin(DigitalPin.P1);
             case digitalPins.P2:
                return pins.digitalReadPin(DigitalPin.P2);
              case digitalPins.P3:
                return pins.digitalReadPin(DigitalPin.P3);
              case digitalPins.P4:
                return pins.digitalReadPin(DigitalPin.P4;
              case digitalPins.P10:
                return pins.digitalReadPin(DigitalPin.P10);
              case digitalPins.P6:
                return pins.digitalReadPin(DigitalPin.P6);
              case digitalPins.P7:
                return pins.digitalReadPin(DigitalPin.P7);
              case digitalPins.P8:
                return pins.digitalReadPin(DigitalPin.P8);
              case digitalPins.P9:
                return pins.digitalReadPin(DigitalPin.P9);
              case digitalPins.P12:
                return pins.digitalReadPin(DigitalPin.P12);
              case digitalPins.P5:
                return pins.digitalReadPin(DigitalPin.P5);
              case digitalPins.P11:
                return pins.digitalReadPin(DigitalPin.P11);
            default:
                return 0;
        }
    }
}
