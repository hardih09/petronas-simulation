$(document).ready(function () {
    initIndex();
});

function initIndex () {
    alert('test');
    graphPie1();
    graphPie2();
}

function graphPie1 () {
    Highcharts.chart('graphPie1', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        // title: {
        //     style: { 'display': 'none' }
            
        // },
        title: {
            text: '<span style="color: #EFAA23;font-size: 20px;">80.67%</span><br><span style="color: #545454;font-size: 9px;">02 Nov 2018</span>',
            verticalAlign: 'middle',
            floating: true,
            y: 0,
            style: {
                fontSize: '16px'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        exporting: { enabled: false },
        legend: { enabled: false },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            innerSize: '60%',
            data: [{
                name: 'Internet Explorer',
                y: 80.67,
                color: '#EFAA23'
            }, {
                name: 'Firefox',
                y: 19.33,
                color: '#f1f1f1'
            }]
        }],
        credits: { enabled: false }
    });
}

function graphPie2 () {
    Highcharts.chart('graphPie2', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: '<span style="color: #EFAA23;font-size: 20px;">92.11%</span><br><span style="color: #545454;font-size: 9px;">02 Nov 2018</span>',
            verticalAlign: 'middle',
            floating: true,
            y: 0,
            style: {
                fontSize: '16px'
            }
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        exporting: { enabled: false },
        legend: { enabled: false },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                }
            }
        },
        series: [{
            name: 'Brands',
            colorByPoint: true,
            innerSize: '60%',
            data: [{
                name: 'Internet Explorer',
                y: 92.11,
                color: '#EFAA23'
            }, {
                name: 'Firefox',
                y: 7.89,
                color: '#f1f1f1'
            }]
        }],
        credits: { enabled: false }
    });
}