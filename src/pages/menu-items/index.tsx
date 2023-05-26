import AppLayout from 'layout/app-layout';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box, Text } from '@chakra-ui/react';
import useSWR from 'swr';
import { Spinner } from '@chakra-ui/react';
import { getMenuItems } from 'apiSdk/menu-items';
import { MenuItemInterface } from 'interfaces/menu-item';
import { Error } from 'components/error';

function MenuItemListPage() {
  const { data, error, isLoading } = useSWR<MenuItemInterface[]>(
    () => '/menu-items',
    () =>
      getMenuItems({
        relations: ['restaurant'],
      }),
  );

  return (
    <AppLayout>
      <Text as="h1" fontSize="2xl" fontWeight="bold">
        Menu Item
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
                  <Th>Name</Th>
                  <Th>Description</Th>
                  <Th>Price</Th>
                  <Th>Image URL</Th>
                  <Th>Restaurant</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.map((record) => (
                  <Tr key={record.id}>
                    <Td>{record.name}</Td>
                    <Td>{record.description}</Td>
                    <Td>{record.price}</Td>
                    <Td>{record.image_url}</Td>
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
export default MenuItemListPage;
