import React from 'react';
import Card from '../atoms/Card';
import Text from '../atoms/Text';
import { CardStatusDistribution } from '../../types/index';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useMediaQuery } from '../../hooks/useMediaQuery';

ChartJS.register(ArcElement, Tooltip, Legend);

interface CardStatusDistributionChartProps {
  data: CardStatusDistribution;
  className?: string;
}

const CardStatusDistributionChart: React.FC<CardStatusDistributionChartProps> = ({
  data,
  className = '',
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: isMobile ? '70%' : '90%',
    plugins: {
      legend: {
        display: false, 
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function(context: any) {
            const label = context.label || '';
            const value = context.raw || 0;
            const percentage = Math.round((value / data.totalCards) * 100);
            return `${label}: ${value} (${percentage}%)`;
          }
        }
      }
    },
    elements: {
      arc: {
        borderWidth: isMobile ? 4 : 6,
        borderColor: '#FFFFFF',
        borderRadius: 4,
        spacing: 5,
      }
    },
    layout: {
      padding: isMobile ? 5 : 10
    }
  };

  const getCustomLegend = () => {
    const colors = [
      '#01A4AF',
      '#FFBA24',
      '#014DAF',
      '#8020E7',
      '#FF4457',
    ];
    
    const labels = ['Active', 'Expired', 'Inactive', 'Blocked', 'Lost'];
    const values = [
      data.statuses.active,
      data.statuses.expired,
      data.statuses.inactive,
      data.statuses.blocked,
      data.statuses.lost,
    ];
    
    return (
      <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-5 gap-4'} mt-4`}>
        {labels.map((label, index) => {
          const percentage = Math.round((values[index] / data.totalCards) * 100);
          return (
            <div key={index} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: colors[index] }}
              />
              <div className="flex flex-col">
                <Text size="sm" className="font-medium text-gray-700">
                  {label}
                </Text>
                <Text size="xs" className="text-gray-500">
                  {values[index].toLocaleString()} ({percentage}%)
                </Text>
              </div>
            </div>
          );
        })}
      </div>
    );
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
          '#01A4AF',
          '#FFBA24',
          '#014DAF',
          '#8020E7',
          '#FF4457',
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <Text size="lg" className="font-semibold text-gray-800">
          Card Status Distribution
        </Text>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="relative w-full" style={{ height: isMobile ? '200px' : '300px' }}>
          <Doughnut data={chartData} options={chartOptions} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Text size="sm" className="text-gray-500">
              Total Cards
            </Text>
            <Text size="xl" className="font-bold text-gray-800">
              {data.totalCards.toLocaleString()}
            </Text>
          </div>
        </div>
        
        {getCustomLegend()}
      </div>
    </Card>
  );
};

export default CardStatusDistributionChart;