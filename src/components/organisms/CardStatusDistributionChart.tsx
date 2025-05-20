import React from 'react';
import Card from '../atoms/Card';
import Text from '../atoms/Text';
import { CardStatusDistribution } from '../../types/intex';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CardStatusDistributionChartProps {
  data: CardStatusDistribution;
  className?: string;
}

const CardStatusDistributionChart: React.FC<CardStatusDistributionChartProps> = ({
  data,
  className = '',
}) => {
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '75%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          boxWidth: 10,
          padding: 15,
        },
      },
    },
  };

  const chartData = {
    labels: ['Active', 'Expired', 'Inactive', 'Blocked', 'Lost'],
    datasets: [
      {
        data: [
          data.statuses.active,
          data.statuses.expired,
          data.statuses.inactive,
          data.statuses.blocked,
          data.statuses.lost,
        ],
        backgroundColor: [
          '#4CAF50', // Active - Green
          '#FF9800', // Expired - Orange
          '#2196F3', // Inactive - Blue
          '#9C27B0', // Blocked - Purple
          '#F44336', // Lost - Red
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Card className={`${className}`}>
      <div className="flex items-center justify-between mb-4">
        <Text as="h2" size="lg" weight="semibold">
          Card Status Distribution
        </Text>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="h-64 w-64 relative mb-4">
          <Doughnut options={chartOptions} data={chartData} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Text size="sm" color="gray-500">Total Cards</Text>
            <Text size="2xl" weight="bold">
              {data.totalCards.toLocaleString()}
            </Text>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardStatusDistributionChart;