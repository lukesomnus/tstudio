import React from 'react';

export default function ({ time }) {

    function _formatSecToMin(number) {
        let minStr = parseInt(number / 60, 10) + '';
        let secStr = number % 60 + '';
        minStr = minStr.length === 1 ? '0' + minStr : minStr
        secStr = secStr.length === 1 ? '0' + secStr : secStr
        const words = [...minStr, ':', ...secStr];
        return words.map((word, index) => {
            return (
                <span key={index}>{word}</span>
            )
        })
    }

    return (
        <div className="tomato-timearea">
            {_formatSecToMin(time)}
        </div>
    )
}