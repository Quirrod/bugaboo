import { EditorView, gutter, GutterMarker } from "@codemirror/view"
import { Extension, Line } from '@codemirror/state';

function addPlusGutter(onClickPlusGutter: (line: Line) => void, styleGlutter: {}) {
  const pluspointMarker = new class extends GutterMarker {
    toDOM() { return document.createTextNode("\u{2795}") }
  }


  const breakpointGutter = [
    gutter({
      class: "cm-breakpoint-gutter",
      lineMarker: () => pluspointMarker,
      initialSpacer: () => pluspointMarker,
      domEventHandlers: {
        mousedown(view, line, event) {
          // console.log(view.state.sliceDoc(line.from, line.to)) // !INFO: get line text
          const lineClicked = view.state.doc.lineAt(line.from)// !INFO: get line text and position
          onClickPlusGutter(lineClicked)

          return true
        }
      }
    }),
    EditorView.baseTheme({
      ".cm-breakpoint-gutter .cm-gutterElement": {
        cursor: "pointer",
        ...styleGlutter
      }
    })
  ]


  return breakpointGutter;
}

export const linesAddPlusGutter: (onClickPlusGutter: (line: Line) => void, styleGlutter: {}) => Extension = (onClickPlusGutter, styleGlutter) => [addPlusGutter(onClickPlusGutter, styleGlutter)];