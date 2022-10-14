import './App.css';
import randomColor from 'randomcolor';
import React, { useEffect, useState } from 'react';

export default function App() {
  const hue = [
    'random',
    'red',
    'blue',
    'green',
    'orange',
    'monochrome',
    'pink',
    'yellow',
    'purple',
  ]
  const luminosity = ['random', 'light', 'dark', 'bright']
  const [color, setColor] = useState(randomColor('random', 'random'))
  const [hueColor, setHueColor] = useState(hue[0])
  const [lum, setLum] = useState(luminosity[0])

  useEffect(() => {
    setColor(randomColor({ hue: hueColor, luminosity: lum }))
  }, [hueColor, lum])

  const handleHueChange = (e) => {
    const newHue = e.target.value
    setHueColor(newHue)
  }

  const handleLumChange = (e) => {
    const newLum = e.target.value
    setLum(newLum)
  }

  return (
    <div
      className="App"
      style={{
        minWidth: '100vw',
        minHeight: '100vh',
        backgroundColor: `${color}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h1>Random Color Generator</h1>
      <h2> {color} </h2>

      <div className="select-container">
        <form>
          <select
            name="hue"
            value={hueColor.value}
            onChange={(e) => handleHueChange(e)}
          >
            {hue.map((hue, idx) => (
              <option key={idx}>{hue}</option>
            ))}
          </select>
        </form>
        <form>
          <select
            name="luminosity"
            value={lum.value}
            onChange={(e) => handleLumChange(e)}
          >
            {luminosity.map((lum, idx) => (
              <option key={idx}>{lum}</option>
            ))}
          </select>
        </form>
      </div>
      <div className="button-container">
        <button
          className="glow-on-hover "
          onClick={() =>
            setColor(randomColor({ hue: hueColor, luminosity: lum }))
          }
        >
          randomize
        </button>
        <button
          className="glow-on-hover "
          onClick={() => navigator.clipboard.writeText(color)}
        >
          Copy Color
        </button>
      </div>
    </div>
  )
}
