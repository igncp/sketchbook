import {
  RouteHandler, Route, Router, Renderer, Selection, PathResolver
} from "frontend"
import Neo4jGraphFile from "./Neo4jGraphFile"

function getContent(common: any, renderer: Renderer, route: Route, router: Router): Selection {
  const content: Selection = renderer.create("div").attr({
    id: "alchemy",
    class: "alchemy",
  })
  content.text("")

  return content
}

export default class FilesExplorer implements RouteHandler {
  constructor(private common: any, private app: any) { }

  shouldHandleRoute(route: Route): boolean {
    return false
  }
  handleRoute(route: Route): void {
    const defaultLayout: any = this.common.layouts.defaultLayout
    const { renderer, router, pathResolver }:
      { renderer: Renderer, router: Router, pathResolver: PathResolver } = this.app
    const currentPath = router.getCurrentPath()
    const file = new Neo4jGraphFile(currentPath, route, pathResolver)

    defaultLayout.onRouteChange()
    renderer.setLayout(defaultLayout)

    const content: Selection = getContent(this.common, renderer, route, router)

    renderer.renderInLayout(content)
    file.load().then((result) => {
    function idIndex(a, id) {
      for (let i = 0; i < a.length; i++) {
         if (a[i].id === id) return i;
      }
       return null;
    }

    function draw_forced_directory(data) {
        let nodes = []
        let links = []
        data.forEach(function(row) {
            row.graph.nodes.forEach(function(n) {
                if (idIndex(nodes, n.id) == null)
                    nodes.push({ id: n.id, label: n.labels[0], title: n.properties.name });
            });
            links = links.concat(row.graph.relationships.map(function(r) {
                return { source: idIndex(nodes, r.startNode), target: idIndex(nodes, r.endNode), type: r.type, value: 1 };
            }));
        });
        const graph = { nodes: nodes, links: links };

        console.log('graph', graph)
        var width = 800, height = 800;
            var force = d3.layout.force()
            .charge(-300).linkDistance(50).size([width, height]);

            // setup svg div
            var svg = d3.select("#alchemy").append("svg")
            .attr("width", "100%").attr("height", "100%")
            .attr("pointer-events", "all");

            // load graph (nodes,links) json from /graph endpoint
            force.nodes(graph.nodes).links(graph.links).start();

            // render relationships as lines
            var link = svg.selectAll(".link")
                .data(graph.links).enter()
                .append("line").attr("class", "link");

            //color assignment
            var get_color = {"gpe": "#E81042", "person": "#80e810", "org": "#10DDE8"};

            // render nodes as circles, css-class from label
            var node = svg.selectAll(".node")
                .data(graph.nodes).enter()
                .append("circle")
                .attr("class", function (d) { return "node "+d.label })
                .attr("r", 10)
                .attr("fill", function (d){return get_color[d.label]})
                .call(force.drag);

            // html title attribute for title node-attribute
            node.append("title")
                .text(function (d) { return d.title; })

            // force feed algo ticks for coordinate computation
            force.on("tick", function() {
              link.attr("x1", function(d) { return d.source.x; })
                 .attr("stroke", "#999")
                 .attr("y1", function(d) { return d.source.y; })
                 .attr("x2", function(d) { return d.target.x; })
                 .attr("y2", function(d) { return d.target.y; });

              node.attr("cx", function(d) { return d.x; })
                 .attr("cy", function(d) { return d.y; });
            });
    }
    console.log('result', result)
    draw_forced_directory(result.data)
    })
  }
}
