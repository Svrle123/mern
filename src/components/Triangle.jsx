import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';

const Triangle = ({ isSelectTriangle, drawData }) => {
    const [point, setPoint] = useState({ x: null, y: null });
    const [node, setNode] = useState({ x: null, y: null });
    const [payload, setPaylod] = useState({ x: null, y: null });

    const canvasRef = useRef(null);

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        getNodeCoordinates(context.canvas);

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        if (drawData) {
            drawData.forEach((coordinate) => {
                let x = coordinate.x + node.x;
                let y = coordinate.y + node.y;
                drawPoint(context, x, y);
            })
        }

        if (point.x || point.y) {
            let x = point.x - node.x;
            let y = point.y - node.y;
            setPaylod({ x, y });
            drawPoint(context, x, y);
        }
    }, [point]);

    const getNodeCoordinates = (node) => {
        const nodePostion = node.getBoundingClientRect();
        setNode({
            x: nodePostion.left,
            y: nodePostion.top,
        });
    }

    const drawPoint = (context, x, y) => {
        context.beginPath();
        context.arc(x, y, 3, 0, 2 * Math.PI);
        context.stroke();
        context.fill();
    }

    const saveSelectedPosition = () => {
        // POST api call here, payload == node
    }

    return (
        <React.Fragment>
            <canvas onClick={(event) => {
                if (!drawData) {
                    setPoint({
                        x: event.clientX,
                        y: event.clientY,
                    });
                }
            }} ref={canvasRef} className='triangle' width="250" height="250"></canvas>
            {isSelectTriangle &&
                <Button onClick={() => saveSelectedPosition()} title={"Save answer"} />
            }
        </React.Fragment>
    );
};

export default Triangle;