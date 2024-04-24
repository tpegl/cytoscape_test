var styles = [ {
  "format_version" : "1.0",
  "generated_by" : "cytoscape-3.10.2",
  "target_cytoscapejs_version" : "~2.1",
  "title" : "galFiltered Style",
  "style" : [ {
    "selector" : "node",
    "css" : {
      "border-width" : 2.0,
      "background-opacity" : 1.0,
      "background-color" : "rgb(255,255,255)",
      "color" : "rgb(247,252,253)",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-valign" : "center",
      "text-halign" : "center",
      "font-size" : 16,
      "shape" : "ellipse",
      "border-color" : "rgb(204,204,204)",
      "width" : 50.0,
      "height" : 50.0,
      "border-opacity" : 1.0,
      "text-opacity" : 1.0,
      "content" : "data(COMMON)"
    }
  }, {
    "selector" : "node[Degree > 18]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[Degree = 18]",
    "css" : {
      "font-size" : 40
    }
  }, {
    "selector" : "node[Degree > 1][Degree < 18]",
    "css" : {
      "font-size" : "mapData(Degree,1,18,10,40)"
    }
  }, {
    "selector" : "node[Degree = 1]",
    "css" : {
      "font-size" : 10
    }
  }, {
    "selector" : "node[Degree < 1]",
    "css" : {
      "font-size" : 1
    }
  }, {
    "selector" : "node[gal1RGexp > 2.058]",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "node[gal1RGexp = 2.058]",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "node[gal1RGexp > 0.00000012][gal1RGexp < 2.058]",
    "css" : {
      "background-color" : "mapData(gal1RGexp,0.00000012,2.058,rgb(255,255,255),rgb(255,255,0))"
    }
  }, {
    "selector" : "node[gal1RGexp > -2.426][gal1RGexp < 0.00000012]",
    "css" : {
      "background-color" : "mapData(gal1RGexp,-2.426,0.00000012,rgb(0,102,204),rgb(255,255,255))"
    }
  }, {
    "selector" : "node[gal1RGexp = -2.426]",
    "css" : {
      "background-color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node[gal1RGexp < -2.426]",
    "css" : {
      "background-color" : "rgb(0,102,204)"
    }
  }, {
    "selector" : "node[ id = '1568' ]",
    "css" : {
      "shape" : "octagon",
      "content" : "Story",
      "background-color" : "rgb(254,153,41)"
    }
  }, {
    "selector" : "node[ id = '1600' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "font-size" : 11,
      "shape" : "diamond",
      "content" : "Forensics",
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[ id = '1570' ]",
    "css" : {
      "background-color" : "rgb(116,196,118)",
      "font-size" : 14,
      "shape" : "hexagon",
      "content" : "Antagonist",
      "width" : 80.0,
      "height" : 80.0
    }
  }, {
    "selector" : "node[ id = '1602' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "font-size" : 10,
      "shape" : "diamond",
      "content" : "Atmosphere\nSimulation",
      "width" : 80.0,
      "height" : 80.0
    }
  }, {
    "selector" : "node[ id = '1572' ]",
    "css" : {
      "shape" : "octagon",
      "content" : "Story",
      "background-color" : "rgb(254,153,41)"
    }
  }, {
    "selector" : "node[ id = '1604' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "font-size" : 10,
      "shape" : "diamond",
      "content" : "Communication",
      "width" : 80.0,
      "height" : 80.0
    }
  }, {
    "selector" : "node[ id = '1574' ]",
    "css" : {
      "background-color" : "rgb(116,196,118)",
      "shape" : "hexagon",
      "content" : "Security",
      "width" : 75.0,
      "height" : 75.0
    }
  }, {
    "selector" : "node[ id = '1606' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "font-size" : 11,
      "shape" : "diamond",
      "content" : "Chemistry",
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[ id = '1576' ]",
    "css" : {
      "background-color" : "rgb(116,196,118)",
      "shape" : "hexagon",
      "content" : "Engineer",
      "width" : 75.0,
      "height" : 75.0
    }
  }, {
    "selector" : "node[ id = '1608' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "font-size" : 11,
      "shape" : "diamond",
      "content" : "Antagonists",
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[ id = '1578' ]",
    "css" : {
      "shape" : "rectangle",
      "content" : "Depth",
      "background-color" : "rgb(107,174,214)"
    }
  }, {
    "selector" : "node[ id = '1610' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "font-size" : 11,
      "shape" : "diamond",
      "content" : "Game-feel",
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[ id = '1580' ]",
    "css" : {
      "background-color" : "rgb(203,24,29)",
      "shape" : "roundrectangle",
      "content" : "History",
      "width" : 60.0,
      "height" : 60.0
    }
  }, {
    "selector" : "node[ id = '1612' ]",
    "css" : {
      "shape" : "octagon",
      "content" : "Story",
      "background-color" : "rgb(254,153,41)"
    }
  }, {
    "selector" : "node[ id = '1582' ]",
    "css" : {
      "background-color" : "rgb(203,24,29)",
      "shape" : "roundrectangle",
      "content" : "Relevance\nto\nDHIT",
      "width" : 90.0,
      "height" : 90.0
    }
  }, {
    "selector" : "node[ id = '1614' ]",
    "css" : {
      "background-color" : "rgb(116,196,118)",
      "font-size" : 14,
      "shape" : "hexagon",
      "content" : "Scientist",
      "width" : 80.0,
      "height" : 80.0
    }
  }, {
    "selector" : "node[ id = '1584' ]",
    "css" : {
      "background-color" : "rgb(203,24,29)",
      "font-size" : 13,
      "shape" : "roundrectangle",
      "content" : "What Is\nSS13?",
      "width" : 80.0,
      "height" : 80.0
    }
  }, {
    "selector" : "node[ id = '1616' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "shape" : "diamond",
      "content" : "Mechanic",
      "width" : 85.0,
      "height" : 85.0
    }
  }, {
    "selector" : "node[ id = '1586' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "font-size" : 11,
      "shape" : "diamond",
      "content" : "Social\nStructure",
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[ id = '1618' ]",
    "css" : {
      "background-color" : "rgb(199,233,180)",
      "shape" : "octagon",
      "content" : "Relation",
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[ id = '1588' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "font-size" : 11,
      "shape" : "diamond",
      "content" : "Engineering",
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[ id = '1620' ]",
    "css" : {
      "background-color" : "rgb(199,233,180)",
      "font-size" : 13,
      "shape" : "octagon",
      "content" : "Inspiration",
      "width" : 70.0,
      "height" : 70.0
    }
  }, {
    "selector" : "node[ id = '1590' ]",
    "css" : {
      "background-color" : "rgb(158,154,200)",
      "font-size" : 14,
      "shape" : "hexagon",
      "content" : "Essential \nMechanics",
      "width" : 95.0,
      "height" : 95.0
    }
  }, {
    "selector" : "node[ id = '1622' ]",
    "css" : {
      "background-color" : "rgb(127,205,187)",
      "shape" : "hexagon",
      "content" : "Player\nInterest",
      "width" : 90.0,
      "height" : 90.0
    }
  }, {
    "selector" : "node[ id = '1560' ]",
    "css" : {
      "border-width" : 4.0,
      "background-color" : "rgb(8,69,148)",
      "content" : "Findings",
      "border-color" : "rgb(37,37,37)",
      "width" : 140.0,
      "height" : 140.0
    }
  }, {
    "selector" : "node[ id = '1592' ]",
    "css" : {
      "background-color" : "rgb(201,148,199)",
      "font-size" : 14,
      "shape" : "hexagon",
      "content" : "Favourite\nMechanics",
      "width" : 95.0,
      "height" : 95.0
    }
  }, {
    "selector" : "node[ id = '1562' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "shape" : "diamond",
      "content" : "Mechanic",
      "width" : 85.0,
      "height" : 85.0
    }
  }, {
    "selector" : "node[ id = '1594' ]",
    "css" : {
      "shape" : "octagon",
      "content" : "Story",
      "background-color" : "rgb(254,153,41)"
    }
  }, {
    "selector" : "node[ id = '1564' ]",
    "css" : {
      "shape" : "octagon",
      "content" : "Story",
      "background-color" : "rgb(254,153,41)"
    }
  }, {
    "selector" : "node[ id = '1596' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "shape" : "diamond",
      "content" : "Mechanic",
      "width" : 85.0,
      "height" : 85.0
    }
  }, {
    "selector" : "node[ id = '1566' ]",
    "css" : {
      "background-color" : "rgb(221,52,151)",
      "shape" : "diamond",
      "content" : "Mechanic",
      "width" : 85.0,
      "height" : 85.0
    }
  }, {
    "selector" : "node[ id = '1598' ]",
    "css" : {
      "background-color" : "rgb(66,146,198)",
      "shape" : "rectangle",
      "content" : " Replicable\nStories?",
      "width" : 90.0,
      "height" : 90.0
    }
  }, {
    "selector" : "node:selected",
    "css" : {
      "background-color" : "rgb(255,255,0)"
    }
  }, {
    "selector" : "edge",
    "css" : {
      "font-size" : 10,
      "target-arrow-shape" : "none",
      "color" : "rgb(0,0,0)",
      "line-color" : "rgb(208,209,230)",
      "line-style" : "solid",
      "target-arrow-color" : "rgb(0,0,0)",
      "opacity" : 0.6666666666666666,
      "source-arrow-color" : "rgb(166,189,219)",
      "font-family" : "Dialog.plain",
      "font-weight" : "normal",
      "text-opacity" : 1.0,
      "width" : 2.0,
      "source-arrow-shape" : "none",
      "content" : ""
    }
  }, {
    "selector" : "edge[ id = '1636' ]",
    "css" : {
      "color" : "rgb(116,196,118)"
    }
  }, {
    "selector" : "edge[ id = '1642' ]",
    "css" : {
      "color" : "rgb(116,196,118)"
    }
  }, {
    "selector" : "edge[ id = '1644' ]",
    "css" : {
      "color" : "rgb(116,196,118)"
    }
  }, {
    "selector" : "edge:selected",
    "css" : {
      "line-color" : "rgb(255,0,0)"
    }
  } ]
} ]

module.exports = styles;