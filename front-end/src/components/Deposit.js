import React, { useState } from "react";
import {
  Button,
  Input,
  Text,
  Flex,
  Spacer,
  Heading,
  Box,
  Spinner,
} from "@chakra-ui/react";

const Deposit = ({ deposit, loading }) => {
  const [value, setValue] = useState(null);
  return (
    <Box
      bg="gray.600"
      p="10"
      height="477px"
      width="336px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <Flex
          direction="column"
          alignItems="center"
          justifyContent="space-between"
          textAlign="center"
          height="full"
        >
          <Flex direction="column">
            <Heading fontFamily="monospace" color="white" fontSize="2xl" mb="5">
              Deposit
            </Heading>
            <Button
              colorScheme="teal"
              mb="5"
              width="2xs"
              onClick={() => deposit(0.5)}
            >
              0.5 ETH
            </Button>
            <Button
              colorScheme="teal"
              mb="5"
              width="2xs"
              onClick={() => deposit(5)}
            >
              5 ETH
            </Button>
            <Button
              colorScheme="teal"
              mb="5"
              width="2xs"
              onClick={() => deposit(50)}
            >
              50 ETH
            </Button>
          </Flex>
          <Flex direction="column">
            <Heading fontFamily="monospace" color="white" fontSize="2xl" mb="5">
              Custom Amount
            </Heading>
            <Input
              mb="5"
              type="number"
              width="2xs"
              bg="gray.50"
              min={0.01}
              placeholder="Enter ETH value"
              textAlign="center"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></Input>
            <Button
              colorScheme="teal"
              width="2xs"
              disabled={!value}
              onClick={() => deposit(value)}
            >
              {value ? `${value} ETH` : "Enter amount above"}
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Deposit;
