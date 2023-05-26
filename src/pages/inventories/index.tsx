import AppLayout from 'layout/app-layout';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { Spinner } from '@chakra-ui/react';
import { getInventories } from 'apiSdk/inventories';
import { InventoryInterface } from 'interfaces/inventory';
import { Error } from 'components/error';

function InventoryListPage() {
  const { data, error, isLoading } = useSWR<InventoryInterface[]>(
    () => '/inventories',
    () =>
      getInventories({
        relations: ['restaurant'],
      }),
  );

  return (
    <AppLayout>
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        Inventory
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
                  <Th>Ingredient Name</Th>
                  <Th>Quantity</Th>
                  <Th>Unit</Th>
                  <Th>Restaurant</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((record) => (
                  <Tr key={record.id}>
                    <Td>{record.ingredient_name}</Td>
                    <Td>{record.quantity}</Td>
                    <Td>{record.unit}</Td>
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
export default InventoryListPage;
