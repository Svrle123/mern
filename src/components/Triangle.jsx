import React, { useEffect, useState, useRef } from 'react';
import Button from './Button';
import { Stage, Layer, Circle } from 'react-konva';

const Triangle = ({ isSelectTriangle, answers, postData }) => {
    const circleRef = useRef(null)

    const postAnswer = async (payload) => {
        debugger
        if (payload.x || payload.y) {
            await postData(payload);
        }
    }

    return (
        <React.Fragment>
            <div className='triangle'>
                <Stage width={300} height={300}>
                    <Layer>
                        {!answers ?
                            <Circle
                                x={150}
                                y={150}
                                width={25}
                                height={25}
                                fill="red"
                                draggable
                                ref={circleRef}
                                dragBoundFunc={(event) => {
                                    const radius = 12.5;
                                    const triangleHeight = 261 - 2 * radius;
                                    const maxWidth = 300;
                                    const firstTriangleHypo = (radius * Math.sin(2.0944)) / Math.sin(0.5236);
                                    const lastTriangleheight = ((firstTriangleHypo / 2) * Math.sin(1.0472)) / Math.sin(0.5236);

                                    const maxHeight = lastTriangleheight + Math.sin(0.5236) * radius;
                                    const height = Math.max(
                                        Math.min(event.y, triangleHeight + radius),
                                        radius,
                                        maxHeight
                                    );
                                    const heightPercentage = height / 261;
                                    const widthLimit = (heightPercentage * maxWidth) / 2;
                                    const widthAdjustment = radius - Math.cos(0.5236) * radius;

                                    let positiveMax = widthLimit + maxWidth / 2 - radius - widthAdjustment;
                                    positiveMax = positiveMax < 150 ? 150 : positiveMax;
                                    let positiveMin = 150 - widthLimit + radius + widthAdjustment;
                                    positiveMin = positiveMin > 150 ? 150 : positiveMin;
                                    const width = Math.max(Math.min(event.x, positiveMax), positiveMin);

                                    return { x: width, y: height };
                                }}
                            />
                            : answers.map((answer) => (
                                <Circle
                                    x={answer.x}
                                    y={answer.y}
                                    width={answer._id !== answers[answers.length - 1]._id ? 15 : 25}
                                    height={answer._id !== answers[answers.length - 1]._id ? 15 : 25}
                                    fill={answer._id !== answers[answers.length - 1]._id ? "black" : "red"}
                                />
                            ))}
                    </Layer>
                </Stage>
            </div>
            {
                isSelectTriangle &&
                <Button onClick={() => postAnswer({ x: circleRef.current.x(), y: circleRef.current.y() })} title={"Save answer"} />
            }
        </React.Fragment>
    );

};

export default Triangle;