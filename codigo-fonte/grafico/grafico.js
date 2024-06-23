document.addEventListener('DOMContentLoaded', function () {
 // Gráfico
    function abrirModalGrafico() {
        let modalGrafico = document.getElementById('modalGrafico');
        new bootstrap.Modal(modalGrafico).show();

        exibirGrafico();
    }

    document.getElementById('mostrarGrafico').addEventListener('click', abrirModalGrafico);


    function exibirGrafico() {
        const ctx = document.getElementById('grafico1').getContext('2d');
        const db = JSON.parse(localStorage.getItem('db_vaga')) || [];
        const somaStatus = contarVagasPorStatus(db);
        const labels = Object.keys(somaStatus);
        const valores = Object.values(somaStatus);

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
                            },
                            callback: function(value) {
                                if (Number.isInteger(value)) {
                                    return value;
                                }
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
                            },
                            generateLabels: function(chart) {
                                const data = chart.data;
                                return [{
                                    text: 'Currículos',
                                    fillStyle: 'rgba(0, 0, 0, 0)', // Faz o quadrado invisível
                                    strokeStyle: 'rgba(0, 0, 0, 0)', // Faz a borda do quadrado invisível
                                    hidden: false,
                                    index: 0
                                }];
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
    };
});

function contarVagasPorStatus(vagas) {
    const somaStatus = {
        'Aplicado': 0,
        'Em processo': 0,
        'Aprovado': 0,
        'Rejeitado': 0
    };
    vagas.forEach(vaga => {
     if (vaga.usuarioId === usuarioLogado.id) {
        somaStatus[vaga.Status]++;
     }
    });
    return somaStatus;
}
