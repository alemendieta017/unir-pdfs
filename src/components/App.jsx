import React, {useState} from 'react'
import merge from '../utils/pdfmerger'
import Styles from '../styles/styles.css'

const App = () => {
    const [files, setFiles] = useState([])

    const filesToMerge = files.map((file) => 
    <li key={file.name.toString()}>
    {file.name}
    </li>)

    const handleSubmit = async (evt) => {
        evt.preventDefault()
        merge(files)
    }

    const handleChange = (evt) => {{
        setFiles([...evt.target.files])
    }}

    return (
        <main>
        <img src="https://i0.wp.com/logoroga.com/wp-content/uploads/2013/03/Sudameris-demo.png?w=1000&ssl=1" alt="Logo Sudameris"/>
        <h1>Unificador de PDFs</h1>
        <p>Adjuntar PDFs y serán unificados en un solo archivo</p>
        <form action="#" onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} multiple></input>
            <input type="submit" value="Unificar" />
        </form>
        <ul>
            {filesToMerge}
        </ul>
        </main>
    )
}

export default App