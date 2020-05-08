export class Project {
  public name: string;
  public description: string;
  public imagePath: string;
  public demoPath: string;
  public githubPath: string;

  constructor(name: string, desc: string, imagePath: string, demoPath: string, githubPath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.demoPath = demoPath;
    this.githubPath = githubPath;
  }
}
