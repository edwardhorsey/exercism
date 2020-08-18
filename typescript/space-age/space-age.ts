export interface SpaceAge {
  seconds: number;
}

export class SpaceAge {
  constructor(seconds: number) {
    this.seconds = seconds;
  }

  onEarth = (): number => Math.round((this.seconds/31557600)*100)/100;

  onMercury = (): number => Math.round(((this.seconds/31557600)/0.2408467)*100)/100;

  onVenus = (): number => Math.round(((this.seconds/31557600)/0.61519726)*100)/100;

  onMars = (): number => Math.round(((this.seconds/31557600)/1.8808158)*100)/100;

  onJupiter = (): number => Math.round(((this.seconds/31557600)/11.862615)*100)/100;

  onSaturn = (): number => Math.round(((this.seconds/31557600)/29.447498)*100)/100;

  onUranus = (): number => Math.round(((this.seconds/31557600)/84.016846)*100)/100;

  onNeptune = (): number => Math.round(((this.seconds/31557600)/164.79132)*100)/100;

}