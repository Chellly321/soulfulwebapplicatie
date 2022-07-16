import { Line } from "react-chartjs-2";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const data = {
    labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep"],
    datasets: [
        {
            label: "Dataset",
            fill: true,
            lineTension: 0.5,
            backgroundColor: "#EED8B5",
            borderColor: "#8B6743",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 0,
            pointHoverRadius: 3,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 0.8,
            pointRadius: 0,
            borderWidth: 3,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 85, 60, 65, 70],
        },
    ],
};
function Graph({ displayXLine, displayYLine, responsive }) {
    return (
        <Line
            data={data}
            options={{
                responsive,
                maintainAspectRatio: false,
                legend: false,
                plugins: { legend: { display: false } },

                scales: {
                    x: {
                        display: displayXLine,
                    },
                    y: {
                        display: displayYLine,
                        position: "right",
                    },
                },
            }}
        />
    );
}

export default Graph;