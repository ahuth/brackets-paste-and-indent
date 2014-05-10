/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets */

// When code is pasted in the editor, re-indent the changed lines.
define(function (require, exports, module) {
    "use strict";

    var DocumentManger = brackets.getModule("document/DocumentManager"),
        EditorManager = brackets.getModule("editor/EditorManager"),
        PreferencesManager = brackets.getModule("preferences/PreferencesManager"),
        prefs = PreferencesManager.getExtensionPrefs("brackets-paste-and-indent");

    // Define the `enabled` preference, default is `true`.
    prefs.definePreference("enabled", "boolean", "true");

    // Re-indent the editor in between specific lines. These are batched into
    // one update.
    function reindentLines(codeMirror, lineFrom, lineTo) {
        codeMirror.operation(function () {
            codeMirror.eachLine(lineFrom, lineTo, function (lineHandle) {
                codeMirror.indentLine(lineHandle.lineNo(), "smart");
            });
        });
    }

    // When the Brackets document changes, attach an event listener for paste
    // events on its internal codeMirror object.
    $(DocumentManger).on("currentDocumentChange", function () {
        var editor = EditorManager.getCurrentFullEditor();

        if (!editor) {
            return;
        }

        var codeMirror = editor._codeMirror;

        // Listen for change events. If this change is not a 'paste', or the
        // extension is disabled, return early.
        codeMirror.on("change", function (codeMirror, change) {
            if (!prefs.get("enabled") || change.origin !== "paste") {
                return;
            }

            var lineFrom = change.from.line,
                lineTo = change.from.line + change.text.length;

            reindentLines(codeMirror, lineFrom, lineTo);
        });
    });
});
