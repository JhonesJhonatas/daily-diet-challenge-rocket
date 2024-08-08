import { Text } from 'react-native';

import { Container, Divider, FlexArea, Status } from './styles';

interface ListItemProps {
  time: string;
  description: string;
  status?: string;
}

export function ListItem({ description, status, time }: ListItemProps) {
  return (
    <Container>
      <FlexArea>
        <Text>{time}</Text>
        <Divider />
        <Text>{description}</Text>
      </FlexArea>
      <Status />
    </Container>
  );
}
