export type CardType = 'Instant' | 'Personalized';
export type CardStatus = 'Ready' | 'In Progress' | 'Acknowledged' | 'Pending' | 'Blocked' | 'Expired' | 'Inactive' | 'Lost';

export interface AnalyticsData {
  totalActiveCards: number;
  activeCardsGrowth: number;
  totalPersonalizedCards: number;
  personalizedCardsGrowth: number;
  todayRevenue: number;
  revenueGrowth: number;
  pendingRequests: number;
}

export interface CardRequest {
  id: string;
  branch: string;
  cardType: CardType;
  quantity: number;
  status: CardStatus;
}

export interface MonthlyIssuanceData {
  month: string;
  instant: number;
  personalized: number;
}

export interface DailyIncomeData {
  day: string;
  value: number;
}

// Card Status Distribution
export interface CardStatusDistribution {
  totalCards: number;
  statuses: {
    active: number;
    expired: number;
    inactive: number;
    blocked: number;
    lost: number;
  };
}

// User Information
export interface UserInfo {
  name: string;
  lastLogin: Date;
}

// Quick Access Item
export interface QuickAccessItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  path: string;
}