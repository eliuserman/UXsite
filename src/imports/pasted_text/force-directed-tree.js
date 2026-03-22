<div class="codepen" data-height="300" data-pen-title="Force-Directed Tree with Animated Bullets" data-prefill='{"title":"Force-Directed Tree with Animated Bullets","description":"<!-- wp:paragraph -->\n<p>A force-directed chart is a visual tool used to depict networks by simulating physical forces on nodes (entities) and edges (connections) between them. Nodes repel each other while edges act like springs, pulling connected nodes closer. This simulation arranges the nodes in a layout that intuitively displays clusters and connections, simplifying the understanding of complex relationships.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:paragraph -->\n<p>This demo features animated bullets, added to node links.</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:heading -->\n<h2 class=\"wp-block-heading\">Related tutorials</h2>\n<!-- /wp:heading -->\n\n<!-- wp:list -->\n<ul><!-- wp:list-item -->\n<li><a href=\"https://www.amcharts.com/docs/v5/charts/hierarchy/force-directed/\">Force-Directed Tree</a></li>\n<!-- /wp:list-item -->\n\n<!-- wp:list-item -->\n<li><a href=\"https://www.amcharts.com/docs/v5/charts/hierarchy/hierarchy-link-bullets/\">Hierarchy link bullets</a></li>\n<!-- /wp:list-item --></ul>\n<!-- /wp:list -->","tags":[],"scripts":[],"stylesheets":[]}'>
  <pre data-lang="html">&lt;script src="https://cdn.amcharts.com/lib/5/index.js">&lt;/script>
&lt;script src="https://cdn.amcharts.com/lib/5/hierarchy.js">&lt;/script>
&lt;script src="https://cdn.amcharts.com/lib/5/themes/Animated.js">&lt;/script>
&lt;div id="chartdiv">&lt;/div></pre>
  <pre data-lang="css">body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}

#chartdiv {
  width: 100%;
  height: 600px;
}</pre>
  <pre data-lang="js">/**
 * ---------------------------------------
 * This demo was created using amCharts 5.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v5/
 * ---------------------------------------
 */

// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);


var zoomableContainer = root.container.children.push(
  am5.ZoomableContainer.new(root, {
    width: am5.p100,
    height: am5.p100,
    wheelable: true,
    pinchZoom: true
  })
);

var zoomTools = zoomableContainer.children.push(am5.ZoomTools.new(root, {
  target: zoomableContainer
}));

// Create series
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Adding
var series = zoomableContainer.contents.children.push(am5hierarchy.ForceDirected.new(root, {
  singleBranchOnly: false,
  downDepth: 1,
  initialDepth: 10,
  nodePadding: 20,
  valueField: "value",
  categoryField: "name",
  childDataField: "children"
}));

series.linkBullets.push(function(root, source, target) {
  const bullet = am5.Bullet.new(root, {
    locationX: 0.5,
    autoRotate: true,
    autoRotateAngle: 180,
    sprite: am5.Graphics.new(root, {
      fill: source.get("fill"),
      centerY: am5.percent(50),
      centerX: am5.percent(50),
      draw: function(display) {
        display.moveTo(0, -6);
        display.lineTo(16, 0);
        display.lineTo(0, 6);
        display.lineTo(3, 0);
        display.lineTo(0, -6);
      }
    })
  });

  bullet.animate({
    key: "locationX",
    to: -0.1,
    from: 1.1,
    duration: Math.random() * 500 + 1000,
    loops: Infinity,
    easing: am5.ease.quad
  });

  return bullet;
});

series.labels.template.set("minScale", 0);

// Generate and set data
// https://www.amcharts.com/docs/v5/charts/hierarchy/#Setting_data
var maxLevels = 1;
var maxNodes = 3;
var maxValue = 100;

var data = {
  name: "Root",
  children: []
}
generateLevel(data, "", 0);

series.data.setAll([data]);
series.set("selectedDataItem", series.dataItems[0]);

function generateLevel(data, name, level) {
  for (var i = 0; i &lt; Math.ceil(maxNodes * Math.random()) + 1; i++) {
    var nodeName = name + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i];
    var child;
    if (level &lt; maxLevels) {
      child = {
        name: nodeName + level
      }

      if (level > 0 && Math.random() &lt; 0.5) {
        child.value = Math.round(Math.random() * maxValue);
      }
      else {
        child.children = [];
        generateLevel(child, nodeName + i, level + 1)
      }
    }
    else {
      child = {
        name: name + i,
        value: Math.round(Math.random() * maxValue)
      }
    }
    data.children.push(child);
  }

  level++;
  return data;
}


// Make stuff animate on load
series.appear(1000, 100);</pre></div>
<script async src="https://public.codepenassets.com/embed/index.js"></script>