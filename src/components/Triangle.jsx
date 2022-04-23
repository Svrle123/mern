import React, { useEffect, useState, useRef } from 'react'

const Triangle = () => {
    const [point, setPoint] = useState({ x: null, y: null })
    const canvasRef = useRef(null);

    useEffect(() => {
        let ctx = canvasRef.current.getContext("2d");
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        if (point.x) {
            ctx.beginPath();
            ctx.arc(point.x, point.y, 3, 0, 2 * Math.PI);
            ctx.stroke();
            ctx.fill();
        }
    }, [point]);

    return (
        <canvas onClick={(event) => {
            setPoint({ x: event.clientX, y: event.clientY })
        }} ref={canvasRef} id="triangle" className='triangle' width="250" height="250"></canvas>
    )
}

export default Triangle;