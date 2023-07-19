import { Abstract } from "./Abstract";

export class Template extends Abstract {
  private element: HTMLHeadingElement;

  constructor(id: string) {
    super();

    this.element = document.getElementById(id) as HTMLHeadingElement;
  }

  public doSomething(): void {
    this.element.innerText = "Template environment is working...";
  }
}
