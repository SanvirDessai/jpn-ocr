import React, { useState, createRef } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";
import Tesseract from "tesseract.js"
import logo from '../logo.svg'
import './canvas.scss';

const LANGUAGES = [
    {
        label: 'Japanese',
        value: 'jpn'
    },
    {
        label: 'English',
        value: 'eng'
    },
    {
        label: 'Greek',
        value: 'ell'
    },
    {
        label: 'Sanskrit',
        value: 'san'
    },
    {
        label: 'Chinese',
        value: 'chi_sim'
    },
    {
        label: 'Hindi',
        value: 'hin'
    },
    {
        label: 'Arabic',
        value: 'ara'
    },
    {
        label: 'Syriac',
        value: 'syr'
    }
]

export const Canvas = () => {

    const canvas = createRef()
    const [text, setText] = useState("")
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [language, setLanguage] = useState("jpn")

    return (
        <>
            <div className="Canvas-container">
                <ReactSketchCanvas
                    ref={canvas}
                    strokeWidth={5}
                    strokeColor="black"
                    height={500}
                    width="80%"
                    style={{ marginLeft: "10%" }}
                />
                <select
                    className="btn"
                    name="languages"
                    id="languages"
                    onChange={event => {
                        setLanguage(event.value)
                    }}
                >
                    {LANGUAGES.map(option => {
                        return <option value={option.value}>{option.label}</option>
                    })}
                </select>
                <button
                    className="btn draw-border"
                    onClick={() => {
                        setLoading(true)
                        canvas.current
                            .exportImage("png")
                            .then(data => {
                                Tesseract.recognize(
                                    data,
                                    language
                                ).then(result => {
                                    setText(result.data.text)
                                    setError(null)
                                    setLoading(false)
                                })
                            })
                            .catch(error => {
                                setError(error)
                                setLoading(false)
                            });
                    }}
                >
                    Recognise
                </button>
                <button
                    className="btn draw-border"
                    onClick={() => {
                        setLoading(false)
                        setText("")
                        canvas.current.clearCanvas()
                    }}
                >
                    Clear
                </button>
            </div>
           
            {loading
                ? <img src={logo} className="App-logo" alt="logo" />
                : <div className="Text-container">
                    <p style={{ fontSize: "60px"}}> {error ? error : text}</p>
                </div>
            }
        </>
    );
}