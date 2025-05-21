import { CardRequest, CardStatusDistribution, UserInfo } from "../types"

export const user: UserInfo = {
    firstName: 'Bobby',
    lastName: 'Lezandro',
    lastLogin: new Date(2025, 4, 19, 14, 30, 0),
  };

export const analyticsData = {
    totalActiveCards: 20000,
    activeCardsGrowth: 20,
    totalPersonalizedCards: 20,
    personalizedCardsGrowth: 20,
    todayRevenue: 20000000000,
    revenueGrowth: 20,
    pendingRequests: 20,
}

export const monthlyIssuanceData = [
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

export const weeklyIncomeData = [
{ day: 'Mon', value: 80 },
{ day: 'Tues', value: 30 },
{ day: 'Wed', value: 40 },
{ day: 'Thurs', value: 30 },
{ day: 'Fri', value: 20 },
{ day: 'Sat', value: 70 },
{ day: 'Sun', value: 40 },
];

export const recentRequests: CardRequest[] = [
{ id: '1', branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Ready' },
{ id: '2', branch: 'Corporate', cardType: 'Personalized', quantity: 10, status: 'In Progress' },
{ id: '3', branch: 'Corporate', cardType: 'Personalized', quantity: 10, status: 'Acknowledged' },
{ id: '4', branch: 'Corporate', cardType: 'Instant', quantity: 10, status: 'Pending' },
];

export const sampleCardStatusData: CardStatusDistribution = {
totalCards: 1200,
statuses: {
  active: 650,
  expired: 200,
  inactive: 150,
  blocked: 100,
  lost: 100,
},
};