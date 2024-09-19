import React from 'react';
import { Button, Text, Flex, Heading, Box, Spinner } from '@chakra-ui/react';

const Withdraw = ({ request, balance, donators, loading }) => {
  return (
    <Box
      bg='white'
      p='10'
      height='477px'
      width='336px'
      display='flex'
      justifyContent='center'
      alignItems='center'
      borderWidth='1px'
      borderColor='gray.300'
      borderRadius='16px'
    >
      {loading ? (
        <Spinner size='xl' />
      ) : (
        <Flex
          direction='column'
          textAlign='center'
          height='full'
          justifyContent='space-between'
        >
          <Flex direction='column'>
            <Heading fontFamily='monospace' fontSize='2xl' mb='5'>
              Faucet Funds
            </Heading>
            <Heading fontFamily='monospace' fontSize='3xl' mb='5'>
              {balance} ETH
            </Heading>
          </Flex>
          <Flex direction='column'>
            <Heading fontFamily='monospace' fontSize='2xl' mb='5'>
              Total Donations
            </Heading>
            <Heading fontFamily='monospace' fontSize='3xl' mb='5'>
              {donators.toString()}
            </Heading>
          </Flex>
          <Flex direction='column'>
            <Text fontFamily='monospace' fontSize='lg' mb='5'>
              You can request 0.05 ETH every 24 hours
            </Text>

            <Button colorScheme='blue' width='2xs' onClick={() => request()}>
              Request 0.05 ETH
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Withdraw;
