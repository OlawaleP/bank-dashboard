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
        <StatCard
          title="Total Active Cards"
          value={data.totalActiveCards.toLocaleString()}
          icon={active}
          trend={{
            value: data.activeCardsGrowth,
            label: 'this month',
            isPositive: data.activeCardsGrowth > 0,
          }}
        />
        
        <StatCard
          title="Total Personalized Cards"
          value={data.totalPersonalizedCards.toLocaleString()}
          icon={nonActive}
          trend={{
            value: data.personalizedCardsGrowth,
            label: 'this month',
            isPositive: data.personalizedCardsGrowth > 0,
          }}
        />
        
        <StatCard
          title="Today's Revenue"
          value={formatCurrency(data.todayRevenue)}
          icon={revenue}
          trend={{
            value: data.revenueGrowth,
            label: 'vs yesterday',
            isPositive: data.revenueGrowth > 0,
          }}
        />
        
        <StatCard
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