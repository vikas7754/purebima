"use client";
import { useEffect, useRef, useState } from "react";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import FroalaEditorComponent from "react-froala-wysiwyg";
import "froala-editor/js/plugins.pkgd.min.js";
import "froala-editor/js/third_party/embedly.min.js";
import "froala-editor/css/plugins.pkgd.min.css";
// Codemirror from Froala
import "froala-editor/js/plugins/code_view.min.js";
import "froala-editor/css/plugins/code_view.min.css";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "swiper/css";

function CodeEditor({ code, onChange }) {
  const [content, setContent] = useState("");

  useEffect(() => {
    setContent(code);
  }, []);

  const handleChanges = (content) => {
    setContent(content);
    onChange(content);
  };

  return (
    <FroalaEditorComponent
      tag="textarea"
      model={content}
      onModelChange={handleChanges}
      config={{
        imageUpload: true,
        imageUploadURL: `${process.env.NEXT_PUBLIC_API_URL}/testimonial/upload-img`,
        imageUploadMethod: "POST",
        imageUploadParam: "upload",
        allowScriptTags: true,
        htmlAllowComments: true,
        pasteDeniedTags: [],
        htmlExecuteScripts: true,
        htmlRemoveTags: [],
        htmlDoNotWrapTags: ["script", "style", "img"],
        htmlAllowedTags: [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "big",
          "base",
          "bdi",
          "bdo",
          "blockquote",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "header",
          "hgroup",
          "hr",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "pre",
          "progress",
          "queue",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "style",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strike",
          "strong",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ],
        htmlAllowedEmptyTags: [
          "textarea",
          "a",
          "iframe",
          "object",
          "video",
          "style",
          "script",
          ".fa",
          ".fr-emoticon",
          ".fr-inner",
          "path",
          "line",
          "hr",
          "i",
          "span",
          "button",
        ],
        codeMirrorOptions: {
          lineNumbers: true,
          tabSize: 2,
          mode: "htmlmixed",
          theme: "dracula",
          lineWrapping: true,
        },
        height: 500,
      }}
    />
  );
}

export default CodeEditor;
