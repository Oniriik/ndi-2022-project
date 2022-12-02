export const data = {
    labels: [
        'Orientation',
        'Contraception',
        'IST',
        'Consentement',
    ],
    datasets: [{
        label: 'Quiz Dataset',
        data: [3, 4, 2, 3],
        fill: true,
        backgroundColor: 'rgba(254, 215, 255, 0.2)', // pastel
        borderColor: 'rgba(146, 51, 240, 1)', // lavender
        pointBackgroundColor: 'rgba(253, 152, 255, 1)', // pinkish
        pointBorderColor: 'rgba(146, 51, 240, 1)', // lavender
        pointHoverBackgroundColor: 'rgba(248, 188, 37, 1)', // neon
        pointHoverBorderColor: 'rgba(146, 51, 240, 1)', // tasty
    }],
};

export const options = {
    elements: {
        line: {
            borderWidth:1,
        },
        point:{
            radius: 5,
            borderWidth:2,
            hoverBorderWidth:2,
        },
    },
    scales: {
        r:{
            suggestedMin:0,
            suggestedMax:4,
            ticks:{
                stepSize:1,
                font:{
                    size:22,
                    color:'#212121',
                },
            },
            angleLines:{
                color:'#212121',
            },
            grid:{
                color:'#212121',
            },
            pointLabels:{
                color: '#212121',
                font : {
                    size:22,
                },
            },
        },
    },
    plugins: {
        legend:{
            display:false,
        },
        tooltip:{
            enabled:false,
        },
    },
};