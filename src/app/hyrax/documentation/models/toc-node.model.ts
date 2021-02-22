export class TocNode {
  level: number;
  levelNum: string;
  id: string;
  text: string;
  displayText: string;
  children: Array<TocNode>;

  constructor(level: number, id: string, text: string, children = new Array<TocNode>(), levelNum?: string) {
    this.level = level;
    this.id = id;
    this.text = text;
    this.children = children;
    this.levelNum = levelNum;

    const spaceIndex = text.indexOf(' ');
    this.displayText = (spaceIndex > 0 && text.split(' ')[0].includes('.')) ?
      text.substr(spaceIndex, text.length) : text;
  }
}
