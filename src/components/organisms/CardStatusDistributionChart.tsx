import React from 'react';
import Card from '../atoms/Card';
import Text from '../atoms/Text';
import { CardStatusDistribution } from '../../types/index';
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
    cutout: '90%', 
    plugins: {
      legend: {
        display: true,
        position: 'bottom' as const,
        align: 'center' as const,
        labels: {
          usePointStyle: true, 
          pointStyle: 'circle',
          padding: 20,
          boxWidth: 8,
          boxHeight: 8,
          font: {
            size: 12
          }
        },
        maxItems: 10, 
        maxHeight: 25, 
      },
      tooltip: {
        enabled: true
      }
    },
    elements: {
      arc: {
        borderWidth: 6, 
        borderColor: '#FFFFFF', 
        borderRadius: 4, 
        spacing: 5, 
      }
    },
    layout: {
      padding: 10 
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
    
    return (
      <div className="flex flex-row justify-center items-center space-x-4 mt-4">
        {labels.map((label, index) => (
          <div key={index} className="flex items-center">
            <div 
              className="w-2 h-2 rounded-full mr-2" 
              style={{ backgroundColor: colors[index] }}
            ></div>
            <span className="text-xs">{label}</span>
          </div>
        ))}
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
    <Card className={`${className}`}>
      <div className="flex items-center justify-between mb-4">
        <Text as="h2" size="lg" color="text-textColor-100">
          Card Status Distribution
        </Text>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="h-72 w-72 relative">
          <Doughnut 
            options={{
              ...chartOptions,
              plugins: {
                ...chartOptions.plugins,
                legend: {
                  ...chartOptions.plugins.legend,
                  display: false 
                }
              }
            }} 
            data={chartData} 
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Text size="xs" color="#808080">Total Cards</Text>
            <Text size="2xl" >
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