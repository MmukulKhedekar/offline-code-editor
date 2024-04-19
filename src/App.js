import { React } from 'react';
import CodeEditor from './components/CodeEditor';

const App = () => {
    return (
        <div style={{height: "100vh", width: "100vw", display: "flex"}}>
            <div style={{height: "100vh", width: "20vw", backgroundColor: "#161716"}}>
                
            </div>
            <div style={{height: "100vh", width: "80vw"}}>
                <CodeEditor />
            </div>
        </div>
    );
}

export default App;
