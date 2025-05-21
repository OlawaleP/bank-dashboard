import React from 'react';
import Card from '../atoms/Card';
import Text from '../atoms/Text';
import { MonthlyIssuanceData } from '../../types/index';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import chartIcon from '../../assets/icons/chartIcon.svg';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MonthlyIssuanceChartProps {
  data: MonthlyIssuanceData[];
  className?: string;
}

const MonthlyIssuanceChart: React.FC<MonthlyIssuanceChartProps> = ({
  data,
  className = '',
}) => {
  const getLastSixMonths = () => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();

    const last6MonthsIndices = [];
    for (let i = 5; i >= 0; i--) {
      const monthIndex = (currentMonth - i + 12) % 12;
      last6MonthsIndices.push(months[monthIndex]);
    }
    return last6MonthsIndices;
  };

  const lastSixMonthNames = getLastSixMonths();

  const filteredData = lastSixMonthNames.map(monthName => {
    const monthData = data.find(item => item.month === monthName);
    return monthData || { month: monthName, personalized: 0, instant: 0 };
  });

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle', 
          padding: 24,
          boxWidth: 8,
          boxHeight: 8, 
          font: {
            size: 12 
          }
        }
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
        stacked: true,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  const chartData = {
    labels: filteredData.map((item) => item.month),
    datasets: [
      {
        label: 'Personalized',
        data: filteredData.map((item) => item.personalized),
        backgroundColor: '#014DAF',
        borderRadius: {
          topLeft: 0,
          topRight: 0,
          bottomLeft: 4,
          bottomRight: 4,
        },
        barThickness: 40,
        stack: 'Stack 0',
      },
      {
        label: 'Instant',
        data: filteredData.map((item) => item.instant),
        backgroundColor: '#CCE2FF',
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 0,
          bottomRight: 0,
        },
        barThickness: 40,
        stack: 'Stack 0',
      },
    ],
  };

  return (
    <Card className={`${className}`}>
      <div className="flex items-center justify-between mb-4">
        <Text as="h2" size="lg" color='text-textColor-100'>
          Monthly Issuance
        </Text>
        <img src={chartIcon} alt="MasterCard" className="text-gray-400 hover:text-gray-600 w-4 h-4" />
      </div>

      <div className="h-64 relative">
        <div className="w-full h-[1px] bg-chart3 absolute bottom-8 mb-1" />
        <Bar options={chartOptions} data={chartData} />
      </div>
    </Card>
  );
};

export default MonthlyIssuanceChart;