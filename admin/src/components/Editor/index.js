import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";
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
                uploadUrl: `${process.env.NEXT_PUBLIC_API_URL}/testimonial/upload-img`,
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
