import { useState, useRef, useEffect } from 'react'
import styles from './Slider.module.css'

function Slider({ percentage = 0, onChange }) {
    const [position, setPosition] = useState(0)
    const [marginLeft, setMarginLeft] = useState(0)
    const [progressBarWidth, setProgressBarWidth] = useState(0)

    const rangeRef = useRef()
    const thumbRef = useRef()

    useEffect(() => {
        const rangeWidth = rangeRef.current.getBoundingClientRect().width
        const thumbWidth = thumbRef.current.getBoundingClientRect().width
        const centerThumb = (thumbWidth / 100) * percentage * -1
        const centerProgressBar =
            thumbWidth + (rangeWidth / 100) * percentage - (thumbWidth / 100) * percentage
        console.log('Center progress bar', centerProgressBar)
        setPosition(percentage)
        setMarginLeft(centerThumb)
        setProgressBarWidth(centerProgressBar)
    }, [percentage])

    return (
        <div className={'w-full relative'}>
            <span className="text-xs font-sans tracking-wide font-medium text-slate-200">{getTimeFromSeconds(videoElapsed)}</span>
            <div
                className='progress-bar-cover'
                style={{
                    width: `${progressBarWidth}px`
                }}
            ></div>
            <div
                className='thumb'
                ref={thumbRef}
                style={{
                    left: `${position}%`,
                    marginLeft: `${marginLeft}px`
                }}
            ></div>
            <input
                type='range'
                value={position}
                ref={rangeRef}
                step='0.01'
                className='range w-full'
                onChange={onChange}
            />
            <span className="amplitude-duration-time text-xs font-sans tracking-wide font-medium text-slate-200">{getTimeFromSeconds(videoDuration)}</span>
        </div>
    )
}

export default Slider