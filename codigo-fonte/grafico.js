document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('grafico1').getContext('2d');

    const labels = ["APLICADO", "EM PROCESSO", "ACEITO", "REJEITADO"];
    const valores = [11, 7, 4, 2];

    const backgroundColors = [
        '#235784', //"APLICADO"
        '#FFC805', //"EM PROCESSO"
        '#28E33B', //"ACEITO"
        '#ED1212'  //"REJEITADO"
    ];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'CURRICULOS',
                data: valores,
                backgroundColor: backgroundColors,
                borderWidth: 3
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            family: 'Encode Sans', 
                            size: 10,
                        }
                    }
                },
                x: {
                    ticks: {
                        font: {
                            family: 'Encode Sans', 
                            size: 9, 
                        }
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Encode Sans', 
                            size: 16, 
                        }
                    }
                }
            },
            layout: {
                padding: {
                    left: 50,
                    right: 50,
                }
            }
        }
    });
});
