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
                    beginAtZero: true
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

