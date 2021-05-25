import React from 'react'
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';

export const TextEditor = React.forwardRef(({ onChange, onBlur, name, label, onSave, placeholder, setValue="" }, ref) => (
  <>
    <SunEditor
      setContents={setValue}
      ref={ref}
      placeholder={placeholder}
      name={name}
      onBlur={onBlur}
      onChange={onSave}
      width="100%"
      setOptions={{ buttonList: [['undo', 'redo'], ['fontColor', 'hiliteColor', 'removeFormat']] }} />
  </>
));
