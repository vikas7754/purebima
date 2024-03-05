import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";
import Script from "next/script";
import { useEffect, useState } from "react";

function RenderStyleElements(editor) {
  const unsafeElements = editor.editing.view.domConverter.unsafeElements;
  const ele_to_remove = ["style", "script", "link", "meta"];
  ele_to_remove.forEach((ele) => {
    const indexOfEle = unsafeElements.indexOf(ele);
    if (indexOfEle > -1) {
      unsafeElements.splice(indexOfEle, 1);
    }
  });
}

function Editor({ onChange, value }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <Script
        async
        src="https://code.jquery.com/jquery-3.7.1.min.js"
        integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
        crossorigin="anonymous"
      />
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      />
      {loaded ? (
        <div>
          <CKEditor
            editor={ClassicEditor}
            config={{
              htmlSupport: {
                allow: [
                  {
                    name: /^[\w-]+$/,
                    attributes: true,
                    classes: true,
                    styles: true,
                  },
                ],
              },
              extraPlugins: [RenderStyleElements],
              simpleUpload: {
                uploadUrl: "http://localhost:8000/api/testimonial/upload-img",
              },
            }}
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
