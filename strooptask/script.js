// Define study
const study = lab.util.fromObject({
  "messageHandlers": {},
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "files": {},
  "metadata": {
    "title": "Stroop task",
    "description": "An implementation of the classic paradigm introduced by Stroop (1935).",
    "repository": "https:\u002F\u002Fgithub.com\u002Fjosh-siegel\u002Fjosh-siegel.github.io\u002Ftree\u002Fmaster\u002Fstrooptask",
    "contributors": ""
  },
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.PostMessage",
      "path": undefined
    }
  ],
  "responses": {},
  "content": [
    {
      "messageHandlers": {},
      "type": "lab.html.Screen",
      "responses": {
        "keypress(Space)": "continue"
      },
      "title": "Instruction",
      "parameters": {},
      "files": {},
      "content": "\u003Cheader class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Ch1\u003EStroop Task\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain\u003E\n  \u003Cp\u003E\n    Welcome to the \u003Cstrong\u003EStroop experiment\u003C\u002Fstrong\u003E TEST JOSH SIEGEL!\n  \u003C\u002Fp\u003E\n  \u003Cp\u003E\n    In this part of the study, your task will be to \n    \u003Cstrong\u003Eidentify the color of the word shown \n    on the screen\u003C\u002Fstrong\u003E.\u003Cbr\u003E\n    The word itself is not important &mdash; \n    you can safely ignore it.\n  \u003C\u002Fp\u003E\n  \u003Cp\u003E\n    To indicate the color of the word, \n    please use the keyboard keys \u003Cstrong\u003Er\u003C\u002Fstrong\u003E, \n    \u003Cstrong\u003Eg\u003C\u002Fstrong\u003E, \u003Cstrong\u003Eb\u003C\u002Fstrong\u003E and \n    \u003Cstrong\u003Eo\u003C\u002Fstrong\u003E for \n    \u003Cspan style=\"color: red;\"\u003Ered\u003C\u002Fspan\u003E, \n    \u003Cspan style=\"color: green;\"\u003Egreen\u003C\u002Fspan\u003E, \n    \u003Cspan style=\"color: blue;\"\u003Eblue\u003C\u002Fspan\u003E and \n    \u003Cspan style=\"color: orange;\"\u003Eorange\u003C\u002Fspan\u003E, \n    respectively.\u003Cbr\u003E\n    Please answer quickly, and as \n    accurately as you can.\n  \u003C\u002Fp\u003E\n\u003C\u002Fmain\u003E\n\u003Cfooter class=\"\"\u003E\n \n\u003Cstrong\u003EMake sure that the CAPS LOCK is turned off before you start.\u003C\u002Fstrong\u003E\n\n\u003Cbr\u003E\n\n  Please click here and then press the \u003Cstrong\u003E space bar \u003C\u002Fstrong\u003E when you're ready to begin.\n\n\u003C\u002Ffooter\u003E\n"
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cp\u003E\n    What's the \u003Cem\u003Ecolor\u003C\u002Fem\u003E of \n    the word shown above? \u003Cbr\u003E\n    Please press \u003Ckbd\u003Er\u003C\u002Fkbd\u003E for red,\n    \u003Ckbd\u003Eg\u003C\u002Fkbd\u003E for green,\n    \u003Ckbd\u003Eb\u003C\u002Fkbd\u003E for blue and \u003Ckbd\u003Eo\u003C\u002Fkbd\u003E for orange.\n  \u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E\n",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Practice frame",
      "content": {
        "messageHandlers": {},
        "type": "lab.flow.Loop",
        "responses": {},
        "templateParameters": [
          {
            "color": "red",
            "word": "red",
            "phase": "practice"
          },
          {
            "color": "green",
            "word": "green",
            "phase": "practice"
          },
          {
            "color": "blue",
            "word": "blue",
            "phase": "practice"
          },
          {
            "color": "orange",
            "word": "orange",
            "phase": "practice"
          }
        ],
        "title": "Practice task",
        "parameters": {},
        "files": {},
        "sample": {
          "mode": "draw-shuffle"
        },
        "shuffleGroups": [],
        "template": {
          "messageHandlers": {},
          "type": "lab.flow.Sequence",
          "responses": {},
          "title": "Trial",
          "parameters": {},
          "files": {},
          "content": [
            {
              "type": "lab.canvas.Screen",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation cross",
              "timeout": "500",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 18.69,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "72",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ]
            },
            {
              "type": "lab.canvas.Screen",
              "files": {},
              "parameters": {},
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stroop screen",
              "correctResponse": "${ this.parameters.color }",
              "responses": {
                "keydown(r,R)": "red",
                "keydown(g,G)": "green",
                "keydown(b,B)": "blue",
                "keydown(o,O)": "orange"
              },
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 331.08,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "${ this.parameters.color }",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "72",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ]
            },
            {
              "type": "lab.canvas.Screen",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Inter-trial interval",
              "timeout": "500",
              "content": []
            }
          ]
        }
      }
    },
    {
      "type": "lab.canvas.Frame",
      "context": "\u003Cmain class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Ccanvas \u002F\u003E\n\u003C\u002Fmain\u003E\n\n\u003Cfooter class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Cp\u003E\n    What's the \u003Cem\u003Ecolor\u003C\u002Fem\u003E of \n    the word shown above? \u003Cbr\u003E\n    Please press \u003Ckbd\u003Er\u003C\u002Fkbd\u003E for red,\n    \u003Ckbd\u003Eg\u003C\u002Fkbd\u003E for green,\n    \u003Ckbd\u003Eb\u003C\u002Fkbd\u003E for blue and \u003Ckbd\u003Eo\u003C\u002Fkbd\u003E for orange.\n  \u003C\u002Fp\u003E\n\u003C\u002Ffooter\u003E\n",
      "contextSelector": "canvas",
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "title": "Task frame",
      "content": {
        "messageHandlers": {},
        "type": "lab.flow.Loop",
        "responses": {},
        "title": "Stroop task",
        "parameters": {},
        "files": {},
        "templateParameters": [
          {
            "color": "blue",
            "word": "blue",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "blue",
            "word": "blue",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "blue",
            "word": "blue",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "blue",
            "word": "blue",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "green",
            "word": "green",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "green",
            "word": "green",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "green",
            "word": "green",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "green",
            "word": "green",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "orange",
            "word": "orange",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "orange",
            "word": "orange",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "orange",
            "word": "orange",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "orange",
            "word": "orange",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "orange",
            "word": "orange",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "red",
            "word": "red",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "red",
            "word": "red",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "red",
            "word": "red",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "red",
            "word": "red",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "red",
            "word": "red",
            "phase": "task",
            "congruent": "1",
            "incongruent": "0",
            "type": "congruent"
          },
          {
            "color": "blue",
            "word": "green",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "blue",
            "word": "green",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "blue",
            "word": "orange",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "blue",
            "word": "orange",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "blue",
            "word": "red",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "green",
            "word": "blue",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "green",
            "word": "blue",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "green",
            "word": "orange",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "green",
            "word": "red",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "green",
            "word": "red",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "orange",
            "word": "blue",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "orange",
            "word": "blue",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "orange",
            "word": "green",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "orange",
            "word": "red",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "red",
            "word": "blue",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "red",
            "word": "green",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "red",
            "word": "orange",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          },
          {
            "color": "red",
            "word": "orange",
            "phase": "task",
            "congruent": "0",
            "incongruent": "1",
            "type": "incongruent"
          }
        ],
        "sample": {
          "mode": "draw-shuffle",
          "n": ""
        },
        "shuffleGroups": [],
        "template": {
          "messageHandlers": {},
          "type": "lab.flow.Sequence",
          "responses": {},
          "title": "Trial",
          "parameters": {},
          "files": {},
          "content": [
            {
              "type": "lab.canvas.Screen",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Fixation cross",
              "timeout": "500",
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 18.69,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "black",
                  "text": "+",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "fontSize": "72",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ]
            },
            {
              "type": "lab.canvas.Screen",
              "files": {},
              "parameters": {},
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Stroop screen",
              "correctResponse": "${ this.parameters.color }",
              "responses": {
                "keydown(r,R)": "red",
                "keydown(g,G)": "green",
                "keydown(b,B)": "blue",
                "keydown(o,O)": "orange"
              },
              "content": [
                {
                  "type": "i-text",
                  "left": 0,
                  "top": 0,
                  "angle": 0,
                  "width": 331.08,
                  "height": 36.16,
                  "stroke": null,
                  "strokeWidth": 1,
                  "fill": "${ this.parameters.color }",
                  "text": "${ this.parameters.word }",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "fontSize": "72",
                  "fontFamily": "sans-serif",
                  "lineHeight": 1.16,
                  "textAlign": "center"
                }
              ]
            },
            {
              "type": "lab.canvas.Screen",
              "files": {},
              "parameters": {},
              "responses": {},
              "messageHandlers": {},
              "viewport": [
                800,
                600
              ],
              "title": "Inter-trial interval",
              "timeout": "500",
              "content": []
            }
          ]
        }
      }
    },
    {
      "messageHandlers": {},
      "type": "lab.html.Screen",
      "responses": {},
      "title": "Thanks",
      "timeout": "10",
      "files": {},
      "content": "\u003Cheader class=\"content-vertical-center content-horizontal-center\"\u003E\n  \u003Ch1\u003EThank you!\u003C\u002Fh1\u003E\n\u003C\u002Fheader\u003E\n\u003Cmain\u003E\n  \u003Cp\u003E\n    You did a great job, thanks for taking the time!\n  \u003C\u002Fp\u003E\n    \u003Cp\u003E\n    Please proceed to the next page.\n  \u003C\u002Fp\u003E\n\u003C\u002Fmain\u003E",
      "parameters": {}
    }
  ]
})

// Let's go!
study.run()