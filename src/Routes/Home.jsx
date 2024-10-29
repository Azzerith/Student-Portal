// TODO: answer here
import { useNavigate } from 'react-router-dom';
import { Box, Button, Flex, Text, Divider } from "@chakra-ui/react";


const Home = () => {
    const navigate = useNavigate()
    return (
        <Box
        height="100vh"
        backgroundImage="url('https://images.ctfassets.net/fswbkokbwqb5/2bVHDJcP2nWqz4JTLxSU8J/28a4412a14da3e5db26a18ee34616a1e/image2-1.gif')"
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Flex
          direction="row"
          align="center"
          justify="center"
          width="80%"
          maxWidth="1200px"
        >
          <Flex
            direction="column"
            align="flex-end"
            justify="center"
            flex="1"
            pr="8"
            textAlign="right"
            color="white"
          >
            <Text fontSize="2xl">
            Studi Independen <br /> Kampus Merdeka 
            </Text>
            <Text fontWeight="bold">
               by RUANGGURU
            </Text>
          </Flex>

          <Divider orientation="vertical" borderColor="white" height="100px" mx="8" />

          <Flex
            direction="column"
            align="flex-start"
            justify="center"
            flex="1"
            pl="8"
            textAlign="left"
          >
            <Button
              data-testid="student-btn"
              colorScheme="blackAlpha"
              onClick={() => navigate('/student')}
              color="white"
            >
              All Student
            </Button>
          </Flex>
          </Flex>
        </Box>
      </Box>
    )
};

export default Home;
