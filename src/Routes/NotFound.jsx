// TODO: answer here
import { useNavigate } from 'react-router-dom';
import { Box, Button, Text, Flex } from '@chakra-ui/react';

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Flex
            height="100vh"
            justifyContent="center"
            alignItems="center"
            bg="gray.100"
            padding="4"
        >
            <Box textAlign="center">
                <Text fontSize="3xl" fontWeight="bold" mb="4">
                    404 | Not Found
                </Text>
                <Button
                    data-testid="back"
                    onClick={() => navigate(-1)}
                    colorScheme="teal"
                >
                    Take Me Back
                </Button>
            </Box>
        </Flex>
    );
};

export default NotFound;
