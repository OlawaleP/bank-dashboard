import dashboardIcon from '../../assets/icons/dashboard.svg';
import branchIcon from '../../assets/icons/branches.svg';
import rolesIcon from '../../assets/icons/roles.svg';
import usersIcon from '../../assets/icons/users.svg';
import schemeIcon from '../../assets/icons/cardScheme.svg';
import profileIcon from '../../assets/icons/cardProfile.svg';
import requestIcon from '../../assets/icons/cardRequest.svg';
import stockIcon from '../../assets/icons/stock.svg';
import cardsIcon from '../../assets/icons/cards.svg';
import authListIcon from '../../assets/icons/authList.svg';
import authQueueIcon from '../../assets/icons/authQueue.svg';
import trailIcon from '../../assets/icons/trail.svg';
import accountIcon from '../../assets/icons/account.svg';
import logoutIcon from '../../assets/icons/logout.svg';

const IconRegistry: Record<string, string> = {
  dashboard: dashboardIcon,
  branch: branchIcon,
  roles: rolesIcon,
  users: usersIcon,
  scheme: schemeIcon,
  profile: profileIcon,
  request: requestIcon,
  stock: stockIcon,
  cards: cardsIcon,
  'auth-list': authListIcon,
  'auth-queue': authQueueIcon,
  trail: trailIcon,
  account: accountIcon,
  logout: logoutIcon,
};

export default IconRegistry;