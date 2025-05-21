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
import HeadSection from '../organisms/HeadSection';
import masterCard from '../../assets/icons/masterCard.svg';
import instantCard from '../../assets/icons/instantCard.svg';
import personalizedCard from '../../assets/icons/personalized.svg';
import reviewCard from '../../assets/icons/reviewCard.svg';
import chartIcon from '../../assets/icons/chartIcon.svg'
import { analyticsData, monthlyIssuanceData, recentRequests, sampleCardStatusData, user, weeklyIncomeData } from '../../utils/data';

const Dashboard: React.FC = () => {

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

  return (
    <DashboardLayout>
      <HeadSection user={user} />
      <section className="mb-2 bg-white p-4 rounded-[10px]">
        <Text as="h2" className="text-lg font-medium text-textColor-100 mb-4">Your Quick Access</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickAccessItems.map((item) => (
            <QuickAccessCard 
              key={item.title}
              icon={item.icon}
              title={item.title}
            />
          ))}
        </div>
      </section>

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