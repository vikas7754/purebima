import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";
// import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

function Editor({ onChange, value }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {loaded ? (
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
      ) : (
        <div>Loading editor...</div>
      )}
    </>
  );
}

export default Editor;
