import AppLayout from 'layout/app-layout';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { Spinner } from '@chakra-ui/react';
import { getFeedbacks } from 'apiSdk/feedbacks';
import { FeedbackInterface } from 'interfaces/feedback';
import { Error } from 'components/error';

function FeedbackListPage() {
  const { data, error, isLoading } = useSWR<FeedbackInterface[]>(
    () => '/feedbacks',
    () =>
      getFeedbacks({
        relations: ['user', 'restaurant'],
      }),
  );

  return (
    <AppLayout>
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        Feedback
      </Text>
      <Box bg="white" p={4} rounded="md" shadow="md">
        {error && <Error error={error} />}
        {isLoading ? (
          <Spinner />
        ) : (
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Rating</Th>
                  <Th>Comment</Th>
                  <Th>Customer</Th>
                  <Th>Restaurant</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((record) => (
                  <Tr key={record.id}>
                    <Td>{record.rating}</Td>
                    <Td>{record.comment}</Td>
                    <Td>{record.user?.roq_user_id}</Td>
                    <Td>{record.restaurant?.name}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </AppLayout>
  );
}
export default FeedbackListPage;
