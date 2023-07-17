import { useState } from "react";
import { useEffect } from "react";
import '../App.css';
import { getMergeSortAnimations } from "../Algorithms/Mergealgo";
import { getBubbleSortAnimations } from "../Algorithms/Bubblesort";
import { getSelectionSortAnimations } from "../Algorithms/Selectionsort";
import { getInsertionSortAnimations } from "../Algorithms/Insertionsort";
import { getQuickSortAnimations } from "../Algorithms/Quicksort";



const PRIMARY = '#001858';

const SECONDARY_COLOR = 'red';

function randomnumber(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    return random;
}


export default function Mergesort() {

    const [array, setArray] = useState([]);
    const [range, setRange] = useState(10);
    const [change, setChange] = useState(null);

    const ANIMATION_SPEED_MS = range;

    useEffect(() => {
        const new_array = [];
        for (var i = 0; i < 100; i++) {
            new_array.push(randomnumber(i, 500));
        }
        setArray(new_array);
    }, [change]);


    function runmergesort() {
        const animations = getMergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }


    function bubblesort() {
        const animations = getBubbleSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight1, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newHeight1}px`;
                    barTwoStyle.height = `${newHeight2}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    function quicksort() {
        const animations = getQuickSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight1, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newHeight1}px`;
                    barTwoStyle.height = `${newHeight2}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    function selectionsort() {
        console.log("Selection Sort");
        const animations = getSelectionSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight1, barTwoIdx, newHeight2] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    const barTwoStyle = arrayBars[barTwoIdx].style;
                    barOneStyle.height = `${newHeight1}px`;
                    barTwoStyle.height = `${newHeight2}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    function insertionsort() {
        console.log("Insertion");
        const animations = getInsertionSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            }
            else {
                setTimeout(() => {
                    const [array2, endidx] = animations[i];
                    console.log(array2);
                    console.log(endidx);
                    for (let j = 0; j <= endidx; j++) {
                        const barOneStyle = arrayBars[j].style;
                        let newHeight1 = array2[j];
                        barOneStyle.height = `${newHeight1}px`;
                    }
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }


    return (
        <div className="merge-sort">
            <div className="array-container">
                {array.map(value => (
                    <div className="array-bar" style={{
                        height: value,
                        background: PRIMARY
                    }}>
                        { }
                    </div>
                ))}
            </div>
            <div className="range-slider">
                <span id="rangeValue">{range}</span>
                <input type="range" value={range} min={0} max={100} onChange={event => {setRange(event.target.value)}} onMouseMove={event => {setRange(event.target.value)}}/>
                <p style={{fontSize:"0.8rem"}}>Change the range then click on Particular Algorithm to Change the Speed..</p>
            </div>
            <div className="buttons">
                <button onClick={() => { setChange(Math.random()) }}>Generate New Array</button>
                <button onClick={() => { runmergesort() }}>Merge Sort</button>
                <button onClick={() => { quicksort() }}>Quick Sort</button>
                <button onClick={() => { bubblesort() }}>Bubble Sort</button>
                <button onClick={() => { selectionsort() }}>Selection Sort</button>
                <button onClick={() => { insertionsort() }}>Insertion Sort</button>
            </div>
            <div className="footer">
                    <p>Made by Sagar Raj Gantayat using React Js and Vercel.</p>
            </div>
        </div>
    );
}