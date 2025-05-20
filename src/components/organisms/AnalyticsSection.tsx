import React from 'react';
import StatCard from '../molecules/StatCard';
import Text from '../atoms/Text';
import { AnalyticsData } from '../../types/index';

interface AnalyticsSectionProps {
  data: AnalyticsData;
  className?: string;
}

const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({
  data,
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      <Text as="h2" size="lg" weight="semibold" className="mb-4">
        Analytics
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Total Active Cards"
          value={data.totalActiveCards.toLocaleString()}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          }
          trend={{
            value: data.activeCardsGrowth,
            label: 'this month',
            isPositive: data.activeCardsGrowth > 0,
          }}
        />
        
        <StatCard
          title="Total Personalized Cards"
          value={data.totalPersonalizedCards.toLocaleString()}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
          }
          trend={{
            value: data.personalizedCardsGrowth,
            label: 'this month',
            isPositive: data.personalizedCardsGrowth > 0,
          }}
        />
        
        <StatCard
          title="Today's Revenue"
          value={`₦${data.todayRevenue.toLocaleString()}M`}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          trend={{
            value: data.revenueGrowth,
            label: 'vs yesterday',
            isPositive: data.revenueGrowth > 0,
          }}
        />
        
        <StatCard
          title="Pending Requests"
          value={data.pendingRequests}
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          trend={{
            value: 0,
            label: 'Requires attention',
            isPositive: false,
          }}
        />
      </div>
    </div>
  );
};

export default AnalyticsSection;