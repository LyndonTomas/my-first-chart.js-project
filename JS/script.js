let myChart = document.getElementById('myChart').getContext('2d');

// Global Options
Chart.defaults.font.family = 'Lato';
Chart.defaults.font.size = 16;
Chart.defaults.font.color = '#777';

let massPopChart = new Chart(myChart, {
    type:'doughnut', //bar, horizontalBar, pic, doughnut, radar, polarArea
    data:{
        labels:['Sto. Niño', 'Fortune', 'Conception Uno', 'Conception Dos', 'Barangka'],
        datasets:[{
            label:'Population',
            data:[
                30759,
                36142, 
                42564, 
                25637, 
                18504
            ],
            // backgroundColor:'#008C30'
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBoderColor:'#000'
        }]
    },
    options:{
        plugins:{
            title:{
                display:true,
                text:'Some of the Barangays in Marikina City',
                padding: {
                    top: 10,
                    bottom:30
                }
            },
            legend: {
                position: 'right',
                fontColor:'#000'
                
            },
            tooltip:{
                // enabled: false
            }
        },
        layout:{
            padding:{
                left: 100

            }
        }
    }
});

let myChart2 = document.getElementById('myChart2').getContext('2d');

// Global Options
Chart.defaults.font.family = 'Lato';
Chart.defaults.font.size = 16;
Chart.defaults.font.color = '#777';

let massPopChart2 = new Chart(myChart2, {
    type:'bar', //bar, horizontalBar, pic, doughnut, radar, polarArea
    data:{
        labels:['Sto. Niño', 'Fortune', 'Conception Uno', 'Conception Dos', 'Barangka'],
        datasets:[{
            label:'Population',
            data:[
                30759,
                36142, 
                42564, 
                25637, 
                18504
            ],
            // backgroundColor:'#008C30'
            backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 99, 132, 0.6)',
            ],
            borderWidth:1,
            borderColor:'#777',
            hoverBorderWidth:3,
            hoverBoderColor:'#000'
        }]
    },
    options:{
        plugins:{
            title:{
                display:true,
                text:'Some of the Barangays in Marikina City',
                padding: {
                    top: 10,
                    bottom:30
                }
            },
            legend: {
                position: 'right',
                fontColor:'#000'
                
            },
            tooltip:{
                // enabled: false
            }
        },
        layout:{
            padding:{
                left: 100

            }
        }
    }
});