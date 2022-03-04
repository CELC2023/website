import { number } from "prop-types"
import { useEffect, useState } from "react"

export interface WindowSize {
    height: number,
    width: number
}

const useWindowSize = () => {

    const [windowSize, setWindowSize] = useState<WindowSize>({height: 0, width: 0})

    const getWindowSize = () => {
        setWindowSize({
            height: window.innerHeight,
            width: window.innerWidth,
        });
    }

    const handleResize = () => {
        window.addEventListener("resize", getWindowSize)

        getWindowSize();

        return () => window.removeEventListener("resize", getWindowSize)
    }

    useEffect(handleResize, [])

    return windowSize;
}

export default useWindowSize;