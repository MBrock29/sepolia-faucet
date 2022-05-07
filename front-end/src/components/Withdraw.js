import React from "react";
import { Button, Text, Flex, Heading, Box, Spinner } from "@chakra-ui/react";

const Withdraw = ({ request, balance, donators, loading }) => {
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
          textAlign="center"
          height="full"
          justifyContent="space-between"
        >
          <Flex direction="column">
            <Heading fontFamily="monospace" color="white" fontSize="2xl" mb="5">
              Faucet Funds
            </Heading>
            <Heading fontFamily="monospace" color="white" fontSize="5xl" mb="5">
              {balance} ETH
            </Heading>
          </Flex>
          <Flex direction="column">
            <Heading fontFamily="monospace" color="white" fontSize="2xl" mb="5">
              Total Requests
            </Heading>
            <Heading fontFamily="monospace" color="white" fontSize="5xl" mb="5">
              {donators}
            </Heading>
          </Flex>
          <Flex direction="column">
            <Text fontFamily="monospace" color="white" fontSize="lg" mb="5">
              You can request 0.05 ETH every 24 hours
            </Text>

            <Button colorScheme="teal" width="2xs" onClick={() => request()}>
              Request 0.05 ETH
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Withdraw;
