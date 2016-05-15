import {ajax} from "zepto"
import {promise} from "when"

import {Route, PathResolver, Promise, File as fFile} from "frontend"

import File from "./File"

// https://davidwalsh.name/convert-xml-json
function xmlToJson(xml: any): any {
  let obj = {};

  if (xml.nodeType === 1) {
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (let j = 0; j < xml.attributes.length; j++) {
        const attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) {
    obj = xml.nodeValue;
  }

  if (xml.hasChildNodes()) {
    for (let i = 0; i < xml.childNodes.length; i++) {
      const item = xml.childNodes.item(i);
      const nodeName = item.nodeName;
      if (typeof (obj[nodeName]) === "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof (obj[nodeName].push) === "undefined") {
          const old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }
  return obj;
};

export default class ProjectsFile implements fFile {
  public file: File
  constructor(protected path: string, protected route: Route, pathResolver: PathResolver) {
    this.path = pathResolver.resolve(`/projects${path}`, { withRoot: true })
    this.file = new File(this.path)
  }
  load(): Promise {
    return this.file.load()
  }

  loadXML(): Promise {
    return <any>promise(resolve => ajax({
      url: this.path,
      dataType: "xml",
      success: (data: any): any => {
        const parsedData = xmlToJson(data)
        resolve(parsedData)
      },
      error: (err: any): any => {
        console.log("err", err)
      }
    }))
  }

  loadScript(): Promise {
    return this.file.loadScript()
  }
}
