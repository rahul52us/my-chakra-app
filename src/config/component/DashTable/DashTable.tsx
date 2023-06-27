import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  useColorModeValue,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import moment from "moment";
import { FaEdit, FaTrash } from "react-icons/fa";

interface DashTableProps {
  headers: Array<any>;
  rowData: Array<any>;
}

const ExampleTable = ({ headers, rowData }: DashTableProps) => {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4} overflowX="auto">
      <Flex
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Heading ml={2} fontSize={"lg"}>
          Quiz Categories
        </Heading>
        <Button>Create New</Button>
      </Flex>
      <Table variant="simple" minWidth="max-content" overflowX="scroll">
        <Thead bgColor={useColorModeValue("blackAlpha.200", "blackAlpha.800")}>
          <Tr>
            {headers.map((header, index) => {
              return <Th key={index}>{header}</Th>;
            })}
          </Tr>
        </Thead>
        <Tbody>
          {rowData.map((item, index) => (
            <Tr key={index}>
              {headers.map((header, headerIndex) => {
                if (header === "createdAt") {
                  return (
                    <Td key={headerIndex}>
                      {moment(item[header]).format("DD-MM-YYYY")}
                    </Td>
                  );
                } else if (header === "action") {
                  return (
                    <Td key={headerIndex}>
                      <Flex>
                        <Box mr={2} color="blue.500" cursor="pointer">
                          <FaEdit />
                        </Box>
                        <Box color="red.500" cursor="pointer">
                          <FaTrash />
                        </Box>
                      </Flex>
                    </Td>
                  );
                } else {
                  return <Td key={headerIndex}>{item[header]}</Td>;
                }
              })}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ExampleTable;
