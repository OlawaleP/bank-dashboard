import React from 'react';
import Badge from '../atoms/Badge';
import Button from '../atoms/Button';
import Text from '../atoms/Text';
import { CardRequest } from '../../types/intex';

interface RequestRowProps {
  request: CardRequest;
  onViewDetails: (id: string) => void;
}

const RequestRow: React.FC<RequestRowProps> = ({ request, onViewDetails }) => {
  const getStatusBadgeVariant = (status: string): 'success' | 'warning' | 'primary' | 'default' => {
    switch (status) {
      case 'Ready':
        return 'success';
      case 'In Progress':
        return 'warning';
      case 'Acknowledged':
        return 'primary';
      default:
        return 'default';
    }
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50">
      <td className="py-3 px-4">
        <Text>{request.branch}</Text>
      </td>
      <td className="py-3 px-4">
        <Text>{request.cardType}</Text>
      </td>
      <td className="py-3 px-4 text-center">
        <Text>{request.quantity}</Text>
      </td>
      <td className="py-3 px-4">
        <Badge 
          label={request.status} 
          variant={getStatusBadgeVariant(request.status)}
        />
      </td>
      <td className="py-3 px-4 text-right">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onViewDetails(request.id)}
        >
          View
        </Button>
      </td>
    </tr>
  );
};

export default RequestRow;