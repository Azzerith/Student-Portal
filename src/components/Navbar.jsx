// TODO: answer here
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Flex, Heading, Spacer, HStack, Link } from '@chakra-ui/react';


const NavBar = () => {
    return (
        <Box bg="white" px={4} boxShadow="sm">
        <Flex alignItems="center" maxW="1200px" mx="auto" py={4}>
            <Heading as="h1" size="lg">
                <Link as={RouterLink} data-testid="home-page" to="/">Student Portal</Link>
            </Heading>
            <Spacer />
            <HStack spacing={6}>
                <Link as={RouterLink} data-testid="student-page" to="/student">
                    All Students
                </Link>
                <Link as={RouterLink} data-testid="add-page" to="/add">
                    Add Student
                </Link>
            </HStack>
        </Flex>
    </Box>
    );
};

export default NavBar;
