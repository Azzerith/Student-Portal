// TODO: answer here
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Select, Table, Thead, Tbody, Tr, Th, Td, Button, Box, Heading, Flex, Input } from "@chakra-ui/react"

const Student = () => {
    // TODO: answer here
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        fetch('http://localhost:3001/student')
          .then((response) => response.json())
          .then((data) => {
            setStudents(data);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching students:', error);
            setLoading(false);
          });
      }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:3001/student/${id}`, {
          method: 'DELETE',
        })
        .then(() => {
            setStudents(students.filter(student => student.id !== id));
        })
        .catch((error) => console.error('Error deleting student:', error));
    };

    const filteredStudents = filter === "All" 
    ? students 
    : students.filter(student => student.faculty === filter);

    if (loading) {
        return <p>Loading ...</p>;
    }

    return (
        <Box maxW="1200px" mx="auto" px={4} py={6}>
            <Heading as="h1" mb={4} textAlign="center">All Student</Heading>
            <Flex justify="space-between" mb={4}>
                <Box>
                    
                    <Select 
                        id="filter"
                        data-testid="filter"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        maxW="200px"
                        ml={2}
                    >
                        <option value="All">All</option>
                        <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                        <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                        <option value="Fakultas Teknik">Fakultas Teknik</option>
                        <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
                    </Select>
                </Box>
            </Flex>

            <Table variant="striped" colorScheme="gray" size="md" id="table-student">
                <Thead>
                    <Tr>
                        <Th>No</Th>
                        <Th>Full Name</Th>
                        <Th>Faculty</Th>
                        <Th>Program Study</Th>
                        <Th>Option</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {filteredStudents.map((student, index) => (
                        <Tr key={student.id} className="student-data-row">
                            <Td>{index + 1}</Td>
                            <Td>
                                <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                            </Td>
                            <Td>{student.faculty}</Td>
                            <Td>{student.programStudy}</Td>
                            <Td>
                                <Button 
                                    colorScheme="red"
                                    size="sm"
                                    data-testid={`delete-${student.id}`}
                                    onClick={() => handleDelete(student.id)}
                                >
                                    Delete
                                </Button>
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    );
};

export default Student;
