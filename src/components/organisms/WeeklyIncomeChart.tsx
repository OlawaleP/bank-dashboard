import React from 'react';
import Card from '../atoms/Card';
import Text from '../atoms/Text';
import { DailyIncomeData } from '../../types/index';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import chartIcon from '../../assets/icons/chartIcon.svg';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

interface WeeklyIncomeChartProps {
  data: DailyIncomeData[];
  className?: string;
}

const WeeklyIncomeChart: React.FC<WeeklyIncomeChartProps> = ({
  data,
  className = '',
}) => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          stepSize: 20,
        },
      },
    },
    elements: {
      line: {
        tension: 0.4,
      },
      point: {
        radius: 2,
        hoverRadius: 4,
      },
    },
  };

  const chartData = {
    labels: data.map((item) => item.day),
    datasets: [
      {
        fill: true,
        label: 'Income',
        data: data.map((item) => item.value),
        borderColor: '#4CAF50',
        backgroundColor: '#FFFFFF',
        borderWidth: 2,
      },
    ],
  };

  return (
    <Card className={`${className}`}>
      <div className="flex items-center justify-between mb-4">
        <Text as="h2" size="lg" color='text-textColor-100'>
          This Week's Income
        </Text>
        <img src={chartIcon} alt="MasterCard" className="text-gray-400 hover:text-gray-600 w-4 h-4"  />
      </div>
      
      <div className="h-64">
        <Line options={chartOptions} data={chartData} />
      </div>
    </Card>
  );
};

export default WeeklyIncomeChart;