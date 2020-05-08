export class Project {
  public name: string;
  public description: string;
  public imagePath: string;
  public demoPath: string;
  public clientGithubPath: string;
  public backendGithubPath: string;

  constructor(name: string, desc: string, imagePath: string, demoPath: string, clientGithubPath: string, backendGithubPath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.demoPath = demoPath;
    this.clientGithubPath = clientGithubPath;
    this.backendGithubPath = backendGithubPath;
  }
}
