// TODO: answer here
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Input, Select, Box, Grid, Image, FormControl, FormLabel } from "@chakra-ui/react"

const EditStudent = () => {
    // TODO: answer here
    const [studentData, setStudentData] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/student/${id}`);
                const data = await response.json();
                setStudentData(data);
            } catch (error) {
                console.error('Error :', error);
            }
        };
        fetchData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        let faculty = '';
        switch (studentData.programStudy) {
          case 'Ekonomi':
          case 'Manajemen':
          case 'Akuntansi':
            faculty = 'Fakultas Ekonomi';
            break;
          case 'Administrasi Publik':
          case 'Administrasi Bisnis':
          case 'Hubungan Internasional':
            faculty = 'Fakultas Ilmu Sosial dan Politik';
            break;
          case 'Teknik Sipil':
          case 'Arsitektur':
            faculty = 'Fakultas Teknik';
            break;
          case 'Matematika':
          case 'Fisika':
          case 'Informatika':
            faculty = 'Fakultas Teknologi Informasi dan Sains';
            break;
          default:
            faculty = '';
        }
    
        const newStudent = { ...studentData, faculty };
        try {
            await fetch(`http://localhost:3001/student/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newStudent),
            });
            navigate('/student');
        } catch (error) {
            console.error('Error :', error);
        }
    };

    const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value });
    };

    if (!studentData) {
        return <p>Loading ...</p>;
    }

    return (
        <Box bg="gray.100" minH="100vh" p={4} display="flex" alignItems="center" justifyContent="center">
            <Box display="flex">
                    <Image
                        boxSize="300px"
                        borderRadius="30px"
                        p="3"
                        src={studentData.profilePicture}
                        alt={`${studentData.fullname}'s profile`}
                    />
                </Box>
            <Box bg="white" p={6} rounded="md" w="container.md">
                
                <Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl mb={4}>
                            <FormLabel>Fullname</FormLabel>
                            <Input
                                type="text"
                                name="fullname"
                                data-testid="name"
                                value={studentData.fullname}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>

                        <FormControl mb={4}>
                            <FormLabel>Address</FormLabel>
                            <Input
                                type="text"
                                name="address"
                                data-testid="address"
                                value={studentData.address}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>

                        <FormControl mb={4}>
                            <FormLabel>Phone Number</FormLabel>
                            <Input
                                type="text"
                                name="phoneNumber"
                                data-testid="phoneNumber"
                                value={studentData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>

                        <FormControl mb={4}>
                            <FormLabel>Birth Date</FormLabel>
                            <Input
                                type="date"
                                name="birthDate"
                                data-testid="date"
                                value={studentData.birthDate}
                                onChange={handleChange}
                                required
                            />
                        </FormControl>

                        <FormControl mb={4}>
                            <FormLabel>Gender</FormLabel>
                            <Select
                                name="gender"
                                data-testid="gender"
                                value={studentData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                            </Select>
                        </FormControl>

                        <FormControl mb={4}>
                            <FormLabel>Program Study</FormLabel>
                            <Select
                                name="programStudy"
                                data-testid="prody"
                                value={studentData.programStudy}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select Program Study</option>
                                <option value="Ekonomi">Ekonomi</option>
                                <option value="Manajemen">Manajemen</option>
                                <option value="Akuntansi">Akuntansi</option>
                                <option value="Administrasi Publik">Administrasi Publik</option>
                                <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                                <option value="Hubungan Internasional">Hubungan Internasional</option>
                                <option value="Teknik Sipil">Teknik Sipil</option>
                                <option value="Arsitektur">Arsitektur</option>
                                <option value="Matematika">Matematika</option>
                                <option value="Fisika">Fisika</option>
                                <option value="Informatika">Informatika</option>
                            </Select>
                        </FormControl>

                        <Button colorScheme='blue' type="submit" data-testid="edit-btn">
                            Edit student
                        </Button>
                    </form>
                </Box>
            </Box>
        </Box>
    );
};

export default EditStudent;
