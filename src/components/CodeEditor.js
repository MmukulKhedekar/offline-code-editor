import Editor from '@monaco-editor/react';
import { useRef, useState } from 'react';

const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState('');

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    }

    return (
        <Editor
            height="100vh"
            theme="vs-dark"
            defaultLanguage="cpp"
            defaultValue=""
            value={value}
            onMount={onMount}
            onChange={(value) => setValue(value)}
        />
    );
};

export default CodeEditor;