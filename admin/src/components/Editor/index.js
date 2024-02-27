import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";

function Editor({ onChange, value }) {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(e, editor) => {
          const data = editor.getData();
          onChange(data);
        }}
      />
    </div>
  );
}

export default Editor;
