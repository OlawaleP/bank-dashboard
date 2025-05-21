import React from 'react';
import StatCard from '../molecules/StatCard';
import Text from '../atoms/Text';
import { AnalyticsData } from '../../types/index';
import active from '../../assets/icons/activeCard.svg';
import nonActive from '../../assets/icons/nonActiveCard.svg';
import pending from '../../assets/icons/pending.svg';
import revenue from '../../assets/icons/revenue.svg';
import { formatCurrency } from '../../utils/utils';

interface AnalyticsSectionProps {
  data: AnalyticsData;
  className?: string;
}

// Enhanced StatCard component with hover effects
const HoverableStatCard: React.FC<any> = (props) => {
  return (
    <div className="transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg rounded-lg cursor-pointer">
      <StatCard {...props} />
    </div>
  );
};

const AnalyticsSection: React.FC<AnalyticsSectionProps> = ({
  data,
  className = '',
}) => {
  return (
    <div className={`${className}`}>
      <Text as="h2" size="lg" weight="semibold" className="mb-4" color='#000000'>
        Analytics
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <HoverableStatCard
          title="Total Active Cards"
          value={data.totalActiveCards.toLocaleString()}
          icon={active}
          trend={{
            value: data.activeCardsGrowth,
            label: 'this month',
            isPositive: data.activeCardsGrowth > 0,
          }}
        />
        
        <HoverableStatCard
          title="Total Personalized Cards"
          value={data.totalPersonalizedCards.toLocaleString()}
          icon={nonActive}
          trend={{
            value: data.personalizedCardsGrowth,
            label: 'this month',
            isPositive: data.personalizedCardsGrowth > 0,
          }}
        />
        
        <HoverableStatCard
          title="Today's Revenue"
          value={formatCurrency(data.todayRevenue)}
          icon={revenue}
          trend={{
            value: data.revenueGrowth,
            label: 'vs yesterday',
            isPositive: data.revenueGrowth > 0,
          }}
        />
        
        <HoverableStatCard
          title="Pending Requests"
          value={data.pendingRequests}
          icon={pending}
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