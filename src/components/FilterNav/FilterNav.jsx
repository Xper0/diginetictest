import React, {useState} from 'react';
import "./FilterNav.scss";
import Slider from '@mui/material/Slider';
import Box from "@mui/material/Box";
import {Input} from "@mui/material";
import styled from "@emotion/styled";

const FilterNav = () => {

    const PrettoSlider = styled(Slider)({
        color: '#52af77',
        height: 8,
        '& .MuiSlider-track': {
            border: 'none',
        },
        '& .MuiSlider-thumb': {
            height: 24,
            width: 24,
            backgroundColor: '#fff',
            border: '2px solid currentColor',
            '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
            },
            '&:before': {
                display: 'none',
            },
        },
        '& .MuiSlider-valueLabel': {
            lineHeight: 1.2,
            fontSize: 12,
            background: 'unset',
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: '50% 50% 50% 0',
            backgroundColor: '#52af77',
            transformOrigin: 'bottom left',
            transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
            '&:before': { display: 'none' },
            '&.MuiSlider-valueLabelOpen': {
                transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
            },
            '& > *': {
                transform: 'rotate(45deg)',
            },
        },
    });





    const [leftRangeValue, setLeftRangeValue] = useState(5000)
    const [rightRangeValue, setRightRangeValue] = useState(850000)

    const minDistance = 100000;
    const [values, setRangeValue] = useState([leftRangeValue , rightRangeValue])
    const changeRange = (event, newValue, activeThumb) => {
        console.log(newValue)
        if (!Array.isArray(newValue)) {
            return;
        }
        if (activeThumb === 0) {
            setRangeValue([Math.min(newValue[0], values[1] - minDistance), values[1]]);
            setLeftRangeValue(values[0])

        } else {
            setRangeValue([values[0], Math.max(newValue[1], values[0] + minDistance)]);
            setRightRangeValue(values[1])
        }
    }

    const changeInputValue = (event, range) => {

        if(range === "left"){
            setLeftRangeValue(Number(event.target.value))
            setRangeValue([leftRangeValue, rightRangeValue])

        }else{
            setRightRangeValue(Number(event.target.value))
            setRangeValue([leftRangeValue, rightRangeValue])

        }
    }


    return (
        <div className="FilterNav">
            <div className="FilterNav-category">
                <h2 className="FilterNav-category__title">Все категории</h2>
                <ul>
                    <li>Категория в которой нашли что-то</li>
                    <li>Категория в которой нашли что-то</li>
                    <li>Категория в которой нашли что-то</li>
                    <li>Категория в которой нашли что-то</li>
                    <li>Категория в которой нашли что-то</li>
                    <details>
                        <ul>
                            <li>Категория в которой нашли что-то</li>
                            <li>Категория в которой нашли что-то</li>
                            <li>Категория в которой нашли что-то</li>
                            <li>Категория в которой нашли что-то</li>
                            <li>Категория в которой нашли что-то</li>
                        </ul>
                        <summary className="list">Еще 10 категорий...</summary>
                    </details>
                </ul>
            </div>

            <div className="FilterNav-cost">
                <h1 className="FilterNav-cost__title">Цена, валюта</h1>
                <div className="FilterNav-control">
                    <label>От</label>
                    <Input
                        value={leftRangeValue}
                        onChange={(event) => changeInputValue(event, "left")}
                    />
                    <label>До</label>
                    <Input
                        value={rightRangeValue}
                        onChange={(event) => changeInputValue(event, "right")}
                    />
                    <label>P</label>
                </div>

            </div>
            <Box sx={{width: 291}}>

                <PrettoSlider
                    aria-label="pretto slider"
                    getAriaLabel={() => 'Minimum distance'}
                    value={values}
                    onChange={changeRange}
                    valueLabelDisplay="auto"
                    //getAriaValueText={valuetext}
                    disableSwap
                    min={0}
                    max={1000000}
                    step={1}
                    style={{color: "#000000", borderRadius: "30px" }}
                />
            </Box>

            <div className="FilterNav-brand">
                <div className="FilterNav-label">
                    <h2 className="FilterNav-label__title">Бренды</h2>
                    <span className="FilterNav-label__btn">Очистить</span>
                </div>
                <div className="FilterNav-control">
                    <label className="FilterNav-control__desc"><input type="checkbox"/> Бренд <span>(xxx)</span></label>
                    <label className="FilterNav-control__desc"><input type="checkbox"/> Бренд <span>(x)</span></label>
                    <label className="FilterNav-control__desc"><input type="checkbox"/> Бренд <span>(x xxx)</span></label>
                </div>

            </div>

        </div>
    );
};

export default FilterNav;