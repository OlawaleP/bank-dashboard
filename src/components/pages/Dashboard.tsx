import React from 'react';
import DashboardLayout from '../templates/DashboardLayout';
import QuickAccessCard from '../molecules/QuickAccessCard';
import AnalyticsSection from '../organisms/AnalyticsSection';
import WeeklyIncomeChart from '../organisms/WeeklyIncomeChart';
import CardStatusDistributionChart from '../organisms/CardStatusDistributionChart';
import Card from '../atoms/Card';
import Text from '../atoms/Text';
import RequestRow from '../molecules/RequestRow';
import MonthlyIssuanceChart from '../organisms/MonthlyInsurranceChart';
import { CardRequest, CardStatusDistribution, UserInfo } from '../../types';
import HeadSection from '../organisms/HeadSection';
import masterCard from '../../assets/icons/masterCard.svg';
import instantCard from '../../assets/icons/instantCard.svg';
import personalizedCard from '../../assets/icons/personalized.svg';
import reviewCard from '../../assets/icons/reviewCard.svg';
import chartIcon from '../../assets/icons/chartIcon.svg'

const Dashboard: React.FC = () => {
  // Quick access data
  const quickAccessItems = [
    { icon: <img src={masterCard} alt="MasterCard" />, 
      title: 'Manage a Card', 
      link: '/manage-card' },
    { icon: <img src={instantCard} alt="MasterCard" />,  
      title: 'Issue Instant Card', 
      link: '/issue-instant-card' },
    { icon: <img src={personalizedCard} alt="MasterCard" />, 
      title: 'Issue Personalized Card', 
      link: '/issue-personalized-card' },
    { icon: <img src={reviewCard} alt="MasterCard" />,
      title: 'Review Card Requests', 
      link: '/review-requests' },
  ];
  
    const user: UserInfo = {
      name: 'Sarah Johnson',
      lastLogin: new Date(2025, 4, 19, 14, 30, 0),
    };

  const analyticsData = {
      totalActiveCards: 20000,
      activeCardsGrowth: 20,
      totalPersonalizedCards: 20,
      personalizedCardsGrowth: 20,
      todayRevenue: 20000000000,
      revenueGrowth: 20,
      pendingRequests: 20,
  }

  const monthlyIssuanceData = [
  { month: 'Jan', personalized: 20, instant: 50 },
  { month: 'Feb', personalized: 10, instant: 70 },
  { month: 'Mar', personalized: 10, instant: 10 },
  { month: 'Apr', personalized: 10, instant: 10 },
  { month: 'May', personalized: 20, instant: 40 },
  { month: 'Jun', personalized: 20, instant: 70 },
  { month: 'Jul', personalized: 20, instant: 80 },
  { month: 'Aug', personalized: 10, instant: 60 },
  { month: 'Sep', personalized: 20, instant: 80 },
  { month: 'Oct', personalized: 30, instant: 20 },
  { month: 'Nov', personalized: 20, instant: 20 },
  { month: 'Dec', personalized: 70, instant: 40 },
];

const weeklyIncomeData = [
  { day: 'Mon', value: 80 },
  { day: 'Tues', value: 30 },
  { day: 'Wed', value: 40 },
  { day: 'Thurs', value: 30 },
  { day: 'Fri', value: 20 },
  { day: 'Sat', value: 70 },
  { day: 'Sun', value: 40 },
];

  // Card requests data
const recentRequests: CardRequest[] = [
  { id: '1', branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Ready' },
  { id: '2', branch: 'Corporate', cardType: 'Personalized', quantity: 10, status: 'In Progress' },
  { id: '3', branch: 'Corporate', cardType: 'Personalized', quantity: 10, status: 'Acknowledged' },
  { id: '4', branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Pending' },
];

const sampleCardStatusData: CardStatusDistribution = {
  totalCards: 1200,
  statuses: {
    active: 650,
    expired: 200,
    inactive: 150,
    blocked: 100,
    lost: 100,
  },
};

  return (
    <DashboardLayout>
      {/* Quick Access Section */}
      <HeadSection user={user} />
      <section className="mb-2 bg-white p-4 rounded-[10px]">
        <Text as="h2" className="text-lg font-medium text-textColor-100 mb-4">Your Quick Access</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickAccessItems.map((item) => (
            <QuickAccessCard 
              key={item.title}
              icon={item.icon}
              title={item.title}
              // link={item.link}
            />
          ))}
        </div>
      </section>

      {/* Analytics Section */}
      <AnalyticsSection data={analyticsData} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 mt-6">

      <MonthlyIssuanceChart data={monthlyIssuanceData} />

      <Card className="overflow-hidden">
          <div className="p-4 flex items-center justify-between">
            <Text as="h3" className="text-lg font-medium">Recent Card Requests</Text>
            <img src={chartIcon} alt="MasterCard" className="text-gray-400 hover:text-gray-600 w-4 h-4"  />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-card1">
                <tr>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 tracking-wider">Branch</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 tracking-wider">Card Type</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 tracking-wider">Status</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 text-center">
                {recentRequests.map((request, index) => (
                  <RequestRow key={index} request={request} onViewDetails={(id) => console.log(id)} />
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        {/*  */}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      <WeeklyIncomeChart data={weeklyIncomeData} />
        <CardStatusDistributionChart data={sampleCardStatusData} />
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;