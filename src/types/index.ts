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

export interface UserInfo {
  name: string;
  lastLogin: Date;
}

export interface QuickAccessItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  path: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  path: string;
}

export type RequestStatus = 'Ready' | 'In Progress' | 'Automatically' | 'Pending';

export interface AnalyticsItem {
  title: string;
  value: string;
  change: string;
  additionalInfo: string;
}

export interface MonthlyIssuance {
  month: string;
  cardType: CardType;
  quantity: string;
  status: string;
}

export interface IncomeData {
  day: string;
  value: number;
}

export interface CardStatusData {
  status: CardStatus;
  count: number;
  percentage: number;
}