import Editor from '@monaco-editor/react';
import { useRef, useState, useEffect } from 'react';

const CodeEditor = () => {
    const editorRef = useRef();
    const [value, setValue] = useState(() => {
        const storedValue = localStorage.getItem('code');
        return storedValue ? storedValue : '';
    });

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('code', value);
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [value]);

    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    return (
        <Editor
            height="100vh"
            theme="vs-dark"
            defaultLanguage="cpp"
            defaultValue={value}
            value={value}
            onMount={onMount}
            onChange={(value) => setValue(value)}
        />
    );
};

export default CodeEditor;