/*jslint vars: true, plusplus: true, nomen: true */
/*global define, $, brackets */

// When code is pasted in the editor, re-indent the changed lines.
define(function (require, exports, module) {
    "use strict";

    var AppInit = brackets.getModule("utils/AppInit"),
        EditorManager = brackets.getModule("editor/EditorManager");

    // Tell CodeMirror to re-indent the document between two lines.
    function reindentLines(codeMirror, lineFrom, lineTo) {
        codeMirror.operation(function () {
            codeMirror.eachLine(lineFrom, lineTo, function (lineHandle) {
                codeMirror.indentLine(lineHandle.lineNo(), "smart");
            });
        });
    }

    // Once the app is ready, listen for changes to the editor. If we get a
    // 'paste' change, re-indent the pasted lines.
    AppInit.appReady(function () {
        var editor = EditorManager.getFocusedEditor();
        if (!editor) {
            return;
        }

        var codeMirror = editor._codeMirror;

        codeMirror.on("change", function (codeMirror, change) {
            if (change.origin !== "paste") {
                return;
            }

            var lineFrom = change.from.line,
                lineTo = change.from.line + change.text.length;

            reindentLines(codeMirror, lineFrom, lineTo);
        });
    });
});
