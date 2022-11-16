import React, { useState } from 'react'
import merge from '../utils/pdfmerger'
import Styles from '../styles/styles.css'
import logo from '../../public/logo-sudameris.svg'

const App = () => {
    const [files, setFiles] = useState([])
    const [error, setError] = useState(null)

    const filesToMerge = files.map((file) => (
        <li key={file.name.toString()}>{file.name}</li>
    ))

    function setErrorMessage(error) {
        const emptyFileMsg = 'Cannot read properties of undefined'
        const notPDFFileMsg = 'No PDF header found'
        if (error.message.includes(emptyFileMsg)) {
            setError('Adjuntar archivos!')
        } else if (error.message.includes(notPDFFileMsg)) {
            setError('Solo se admiten archivos en formato PDF')
        } else {
            setError(error.message)
        }
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        merge(files)
            .then((res) => setError(null))
            .catch(setErrorMessage)
    }

    const handleChange = (evt) => {
        {
            setFiles([...evt.target.files])
        }
    }

    return (
        <main>
            <img src={logo} alt="Logo Sudameris" />
            {error && (
                <div className="errorMsg">
                    <p>{error}</p>
                </div>
            )}
            <h1>Unificador de PDFs</h1>
            <p className="main-msg">
                Adjuntar PDFs y serán unificados en un solo archivo
            </p>
            <form action="#" onSubmit={handleSubmit}>
                <input type="file" onChange={handleChange} multiple></input>
                <input type="submit" value="Unificar" />
            </form>
            <ul
                className="file-list"
                style={
                    files.length === 0
                        ? { display: 'none' }
                        : { display: 'block' }
                }
            >
                {filesToMerge}
            </ul>
        </main>
    )
}

export default App
