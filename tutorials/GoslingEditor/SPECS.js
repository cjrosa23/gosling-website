
const SPEC1 = `{
  "tracks": [{
    //*** specify the size of the visualization
    "width": 700,
    "height": 70,
    //*** Load a csv data file through URL
    "data": {
      "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
      "chromosomeField": "Chromosome",
      "type": "csv",
      "genomicFields": ["chromStart", "chromEnd"]
    },
    //*** specify the mark type
    "mark": "rect",
    //*** encoding data with visual channels
    "color": {
      "field": "Stain",
      "type": "nominal",
      "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
      "range": ["white", "#D9D9D9", "#979797", "#636363", "black", "#A0A0F2"]
    },
    "x": {
      "field": "chromStart",
      "type": "genomic",
      "domain": { "chromosome": "1" },
      "axis": "top"
    },
    "xe": { "field": "chromEnd", "type": "genomic" },
    //*** customize the style of the visual marks. 
    //*** default values will be used if not specifyed.
    "size": { "value": 20 },
    "stroke": { "value": "gray" },
    "strokeWidth": { "value": 0.5 }
  }]
}`

const SPEC_TRANSFORM_DATA = `{
  "tracks": [{
    "width": 700,
    "height": 70,
    "data": {
      "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
      "chromosomeField": "Chromosome",
      "type": "csv",
      "genomicFields": ["chromStart", "chromEnd"]
    },
    //*** we added a data transform here  
    "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["gpos25", "gpos50", "gpos75", "gpos100"] }],
    //*** end of the data transform
    "mark": "rect",
    "color": {
      "field": "Stain",
      "type": "nominal",
      "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
      "range": ["white", "#D9D9D9", "#979797", "#636363", "black", "#A0A0F2"]
    },
    "x": {
      "field": "chromStart",
      "type": "genomic",
      "domain": { "chromosome": "1" },
      "axis": "top"
    },
    "xe": { "field": "chromEnd", "type": "genomic" },
    "size": { "value": 20 },
    "stroke": { "value": "gray" },
    "strokeWidth": { "value": 0.5 }
  }]
}`

const SPEC_OVERLAP = `{
  "tracks": [{
    "width": 700,
    "height": 70,
    "data": {
      "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
      "type": "csv",
      "chromosomeField": "Chromosome",
      "genomicFields": ["chromStart", "chromEnd"]
    },
    //***** move the rect track to overlaid tracks
    //      "dataTransform": [{"type":"filter", "field": "Stain", "oneOf": ["acen"], "not": true}],
    //      "mark": "rect",
    //      "color": {
    //          "field": "Stain", 
    //          "type": "nominal",
    //          "domain": ["gpos25", "gpos50", "gpos75", "gpos100"],
    //          "range": ["#D9D9D9","#979797","#636363", "black"]
    //      },
    //***  
    "x": {
      "field": "chromStart",
      "type": "genomic",
      "domain": { "chromosome": "1" },
      "axis": "top"
    },
    "xe": { "field": "chromEnd", "type": "genomic" },
    "size": { "value": 20 },
    "stroke": { "value": "gray" },
    "strokeWidth": { "value": 0.5 },

    //****** overlay three tracks
    //****** the above visual properties are shared by the three tracks 
    "alignment": "overlay",
    "tracks": [
      //*** the first rect track
      {
        "mark": "rect",
        "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
        "color": {
          "field": "Stain",
          "type": "nominal",
          "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
          "range": ["white", "#D9D9D9", "#979797", "#636363", "black", "#A0A0F2"]
        }
      },
      //*** the second right triangle track 
      {
        "mark": "triangleRight",
        "dataTransform": [
          { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
          { "type": "filter", "field": "Name", "include": "q" }
        ],
        "color": { "value": "#B70101" }
      },
      //*** the thrid left triangle track
      {
        "mark": "triangleLeft",
        "dataTransform": [
          { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
          { "type": "filter", "field": "Name", "include": "p" }
        ],
        "color": { "value": "#B70101" }
      }
    ]
  }]
}`

const SPEC_ZOOM = `{
  "tracks": [
    {
      "width": 700,
      "height": 70,
      "data": {
        "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
        "type": "csv",
        "chromosomeField": "Chromosome",
        "genomicFields": ["chromStart", "chromEnd"]
      },
      "x": {
        "field": "chromStart",
        "type": "genomic",
        "domain": { "chromosome": "1" },
        "axis": "top"
      },
      "xe": { "field": "chromEnd", "type": "genomic" },
      "alignment": "overlay",
      "size": { "value": 20 },
      "stroke": { "value": "gray" },
      "strokeWidth": { "value": 0.5 },
      "tracks": [
        {
          "mark": "rect",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
          "color": {
            "field": "Stain",
            "type": "nominal",
            "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
            "range": [
              "white",
              "#D9D9D9",
              "#979797",
              "#636363",
              "black",
              "#A0A0F2"
            ]
          }
        },
        {
          "mark": "triangleRight",
          "dataTransform": [
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "q" }
          ],
          "color": { "value": "#B40101" }
        },
        {
          "mark": "triangleLeft",
          "dataTransform": [
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "p" }
          ],
          "color": { "value": "#B40101" }
        },
        //*** add a text track  
        {
          "mark": "text",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
          "text": { "field": "Name", "type": "nominal" },
          "color": {
            "field": "Stain",
            "type": "nominal",
            "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
            "range": ["black", "black", "black", "black", "white", "black"]
          },
          //***  semantic zoom by controlling the visiblity of the text mark
          "visibility": [
            {
              "operation": "less-than",
              "measure": "width",
              "threshold": "|xe-x|",
              "target": "mark"
            }
          ],
          "style": { "textStrokeWidth": 0 }
        }
        //*** end of the added track
      ]
    }
  ]
}`


const SPEC_LINK = `{
  "spacing": 5,  // add space between tracks
  "tracks": [
    //******  add an area chart as a new track
    {
      "width": 700,
      "height": 40,
      "data": {
        "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
        "type": "multivec",
        "row": "sample",
        "column": "position",
        "value": "peak",
        "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
      },
      "mark": "area",
      "x": {
        "field": "position",
        "type": "genomic",
        "domain": { "chromosome": "1" },
        "axis": "top",
        "linkingId": "link-1"
      },
      "y": { "field": "peak", "type": "quantitative" },
      "color": { "field": "sample", "type": "nominal" }
    },
    //*** end of the added track
    {
      "width": 700,
      "height": 20, // reduce the track height
      "data": {
        "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
        "type": "csv",
        "chromosomeField": "Chromosome",
        "genomicFields": ["chromStart", "chromEnd"]
      },
      "x": {
        "field": "chromStart",
        "type": "genomic",
        "domain": { "chromosome": "1" },
        "linkingId": "link-1" // use linkingId to link tracks
      },
      "xe": { "field": "chromEnd", "type": "genomic" },
      "alignment": "overlay",
      "tracks": [
        {
          "mark": "text",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
          "text": { "field": "Name", "type": "nominal" },
          "color": {
            "field": "Stain",
            "type": "nominal",
            "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
            "range": ["black", "black", "black", "black", "white", "black"]
          },
          "visibility": [
            {
              "operation": "less-than",
              "measure": "width",
              "threshold": "|xe-x|",
              "transitionPadding": 10,
              "target": "mark"
            }
          ],
          "style": { "textStrokeWidth": 0 }
        },
        {
          "mark": "rect",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
          "color": {
            "field": "Stain",
            "type": "nominal",
            "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
            "range": [
              "white",
              "#D9D9D9",
              "#979797",
              "#636363",
              "black",
              "#A0A0F2"
            ]
          }
        },
        {
          "mark": "triangleRight",
          "dataTransform": [
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "q" }
          ],
          "color": { "value": "#B40101" }
        },
        {
          "mark": "triangleLeft",
          "dataTransform": [
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "p" }
          ],
          "color": { "value": "#B40101" }
        }
      ],
      "size": { "value": 20 },
      "stroke": { "value": "gray" },
      "strokeWidth": { "value": 0.5 }
    }
  ]
}`

const SPEC_CIRCULAR = `{
  //*** you only need to add two lines to change the layout
  "layout": "circular", // specify the circular layout
  "centerRadius": 0.6, // set radius of the center white space
  "spacing": 5,
  "tracks": [
    {
      "width": 500,
      "height": 40,
      "data": {
        "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
        "type": "multivec",
        "row": "sample",
        "column": "position",
        "value": "peak",
        "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
      },
      "mark": "area",
      "x": {
        "field": "position",
        "type": "genomic",
        "domain": { "chromosome": "1" },
        "axis": "top",
        "linkingId": "link-1"
      },
      "y": { "field": "peak", "type": "quantitative" },
      "color": { "field": "sample", "type": "nominal" }
    },
    {
      "width": 500,
      "height": 20,
      "data": {
        "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
        "type": "csv",
        "chromosomeField": "Chromosome",
        "genomicFields": ["chromStart", "chromEnd"]
      },
      "x": {
        "field": "chromStart",
        "type": "genomic",
        "domain": { "chromosome": "1" },
        "linkingId": "link-1"
      },
      "xe": { "field": "chromEnd", "type": "genomic" },
      "alignment": "overlay",
      "tracks": [
        {
          "mark": "text",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
          "text": { "field": "Name", "type": "nominal" },
          "color": {
            "field": "Stain",
            "type": "nominal",
            "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
            "range": ["black", "black", "black", "black", "white", "black"]
          },
          "visibility": [
            {
              "operation": "less-than",
              "measure": "width",
              "threshold": "|xe-x|",
              "transitionPadding": 10,
              "target": "mark"
            }
          ],
          "style": { "textStrokeWidth": 0 }
        },
        {
          "mark": "rect",
          "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
          "color": {
            "field": "Stain",
            "type": "nominal",
            "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
            "range": [
              "white",
              "#D9D9D9",
              "#979797",
              "#636363",
              "black",
              "#A0A0F2"
            ]
          }
        },
        {
          "mark": "triangleRight",
          "dataTransform": [
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "q" }
          ],
          "color": { "value": "#B40101" }
        },
        {
          "mark": "triangleLeft",
          "dataTransform": [
            { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
            { "type": "filter", "field": "Name", "include": "p" }
          ],
          "color": { "value": "#B40101" }
        }
      ],
      "size": { "value": 20 },
      "stroke": { "value": "gray" },
      "strokeWidth": { "value": 0.5 }
    }
  ]
}`

const SPEC_DETAIL = `{
  "layout": "linear",
  "tracks": [{
    "row": { "field": "sample", "type": "nominal" },
    "width": 240,
    "height": 200,
    "data": {
      "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
      "type": "multivec",
      "row": "sample",
      "column": "position",
      "value": "peak",
      "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
    },
    "mark": "area",
    "x": {
      "field": "position",
      "type": "genomic",
      "domain": { "chromosome": "2" },
      "axis": "top"
    },
    "y": { "field": "peak", "type": "quantitative" },
    "color": { "field": "sample", "type": "nominal" }
  }]
}`

const SPEC_MULTI_VIEW = `{
  "arrangement": "vertical",
  "views": [
  //*** the circular overview
    {
      "layout": "circular",
      "centerRadius": 0.6,
      "spacing": 5,
      "tracks": [
        {
          "width": 500,
          "height": 40,
          "data": {
            "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
            "type": "multivec",
            "row": "sample",
            "column": "position",
            "value": "peak",
            "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
          },
          "mark": "area",
          "x": {
            "field": "position",
            "type": "genomic",
            "axis": "top",
            "linkingId": "link-1"
          },
          "y": { "field": "peak", "type": "quantitative" },
          "color": { "field": "sample", "type": "nominal" },
          "alignment": "overlay",
          "tracks": [
            { "mark": "area" },
            {
              "mark": "brush",
              "x": { "linkingId": "detail-1" },
              "color": { "value": "blue" }
            },
            {
              "mark": "brush",
              "x": { "linkingId": "detail-2" },
              "color": { "value": "red" }
            }
          ]
        },
        {
          "width": 500,
          "height": 20,
          "data": {
            "url": "https://raw.githubusercontent.com/sehilyi/gemini-datasets/master/data/UCSC.HG38.Human.CytoBandIdeogram.csv",
            "type": "csv",
            "chromosomeField": "Chromosome",
            "genomicFields": ["chromStart", "chromEnd"]
          },
          "x": {
            "field": "chromStart",
            "type": "genomic",
            "linkingId": "link-1"
          },
          "xe": { "field": "chromEnd", "type": "genomic" },
          "alignment": "overlay",
          "tracks": [
            {
              "mark": "text",
              "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
              "text": { "field": "Name", "type": "nominal" },
              "color": {
                "field": "Stain",
                "type": "nominal",
                "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
                "range": ["black", "black", "black", "black", "white", "black"]
              },
              "visibility": [
                {
                  "operation": "less-than",
                  "measure": "width",
                  "threshold": "|xe-x|",
                  "transitionPadding": 10,
                  "target": "mark"
                }
              ],
              "style": { "textStrokeWidth": 0 }
            },
            {
              "mark": "rect",
              "dataTransform": [{ "type": "filter", "field": "Stain", "oneOf": ["acen"], "not": true }],
              "color": {
                "field": "Stain",
                "type": "nominal",
                "domain": ["gneg", "gpos25", "gpos50", "gpos75", "gpos100", "gvar"],
                "range": [
                  "white",
                  "#D9D9D9",
                  "#979797",
                  "#636363",
                  "black",
                  "#A0A0F2"
                ]
              }
            },
            {
              "mark": "triangleRight",
              "dataTransform": [
                { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
                { "type": "filter", "field": "Name", "include": "q" }
              ],
              "color": { "value": "#B40101" }
            },
            {
              "mark": "triangleLeft",
              "dataTransform": [
                { "type": "filter", "field": "Stain", "oneOf": ["acen"] },
                { "type": "filter", "field": "Name", "include": "p" }
              ],
              "color": { "value": "#B40101" }
            }
          ],
          "size": { "value": 20 },
          "stroke": { "value": "gray" },
          "strokeWidth": { "value": 0.5 }
        }
      ]
    },
    //*** the two detail views
    {
      "arrangement": "serial",
      "spacing": 20,
      "views": [
        //*** detail view 1
        {
          "layout": "linear",
          "tracks": [
            {
              "row": { "field": "sample", "type": "nominal" },
              "width": 240,
              "height": 200,
              "data": {
                "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
                "type": "multivec",
                "row": "sample",
                "column": "position",
                "value": "peak",
                "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
              },
              "mark": "area",
              "x": {
                "field": "position",
                "type": "genomic",
                "domain": { "chromosome": "2" },
                "linkingId": "detail-1",
                "axis": "top"
              },
              "y": { "field": "peak", "type": "quantitative" },
              "color": { "field": "sample", "type": "nominal" },
              "style": { "background": "blue", "backgroundOpacity": 0.1 }
            }
          ]
        },
        //*** detail view 2
        {
          "layout": "linear",
          "tracks": [{
            "row": { "field": "sample", "type": "nominal" },
            "width": 240,
            "height": 200,
            "data": {
              "url": "https://resgen.io/api/v1/tileset_info/?d=UvVPeLHuRDiYA3qwFlm7xQ",
              "type": "multivec",
              "row": "sample",
              "column": "position",
              "value": "peak",
              "categories": ["sample 1", "sample 2", "sample 3", "sample 4"]
            },
            "mark": "area",
            "x": {
              "field": "position",
              "type": "genomic",
              "domain": { "chromosome": "5" },
              "linkingId": "detail-2",
              "axis": "top"
            },
            "y": { "field": "peak", "type": "quantitative" },
            "color": { "field": "sample", "type": "nominal" },
            "style": { "background": "red", "backgroundOpacity": 0.1 }
          }]
        }
      ]
    }
  ]
}`

export { SPEC1, SPEC_TRANSFORM_DATA, SPEC_OVERLAP, SPEC_ZOOM, SPEC_LINK, SPEC_CIRCULAR, SPEC_DETAIL, SPEC_MULTI_VIEW }