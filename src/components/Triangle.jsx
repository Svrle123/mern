import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';

const Triangle = ({ isSelectTriangle, answers, postData }) => {
    const [point, setPoint] = useState({ x: null, y: null });
    const [node, setNode] = useState({ x: null, y: null });
    const [payload, setPaylod] = useState({ x: null, y: null });

    const canvasRef = useRef(null);

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");
        getNodeCoordinates(context.canvas);

        context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        if (answers) {
            answers.forEach((coordinate) => {
                let x = coordinate.x;
                let y = coordinate.y;
                answers[answers.length - 1]._id === coordinate._id ? drawPoint(context, x, y, true) : drawPoint(context, x, y);
            })
        }

        if (point.x || point.y) {
            let x = point.x - node.x;
            let y = point.y - node.y;
            setPaylod({ x, y });
            drawPoint(context, x, y);
        }
    }, [point, answers]);

    const getNodeCoordinates = (node) => {
        const nodePostion = node.getBoundingClientRect();
        setNode({
            x: nodePostion.left,
            y: nodePostion.top,
        });
    }

    const drawPoint = (context, x, y, isInitial = false) => {
        context.beginPath();
        context.arc(x, y, 3, 0, 2 * Math.PI);
        context.fillStyle = "black";
        context.strokeStyle = "black";
        if (isInitial) {
            context.fillStyle = "#FF0000";
            context.strokeStyle = "#FF0000";
        }
        context.fill();
        context.stroke();
    }

    const postAnswer = async () => {
        if (payload.x || payload.y) {
            await postData(payload);
        }
    }

    return (
        <React.Fragment>
            <canvas onClick={(event) => {
                if (!answers) {
                    setPoint({
                        x: event.clientX,
                        y: event.clientY,
                    });
                }
            }} ref={canvasRef} className='triangle' width="250" height="250"></canvas>
            {isSelectTriangle &&
                <Button onClick={() => postAnswer()} title={"Save answer"} />
            }
        </React.Fragment>
    );
};

export default Triangle;