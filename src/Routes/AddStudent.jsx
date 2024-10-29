// TODO: answer here
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, Select, Box, Heading, VStack } from "@chakra-ui/react"

const AddStudent = ({ setStudents,students }) => {
    // TODO: answer here
    const [studentData, setStudentData] = useState({
        fullname: '',
        profilePicture: '',
        address: '',
        phoneNumber: '',
        birthDate: '',
        gender: '',
        programStudy: '',
    });
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setStudentData({ ...studentData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
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
    
        fetch('http://localhost:3001/student', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newStudent)
        })
          .then(() => navigate('/student'))
          .catch((error) => console.error('Error adding student:', error));
    };

    return (
      <Box bg="gray.100" minH="100vh" p={4} display="flex" justifyContent="center">
      <Box bg="white" p={6} rounded="md" w="container.md">
          <Heading as="h2" size="lg" mb={6} textAlign="center">Add Student</Heading>
          <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="stretch">
                  <Input
                      placeholder="Fullname"
                      name="fullname"
                      data-testid="name"
                      value={studentData.fullname}
                      onChange={handleChange}
                      required
                  />
                  <Input
                      placeholder="Profile Picture URL"
                      name="profilePicture"
                      data-testid="profilePicture"
                      value={studentData.profilePicture}
                      onChange={handleChange}
                      required
                  />
                  <Input
                      placeholder="Address"
                      name="address"
                      data-testid="address"
                      value={studentData.address}
                      onChange={handleChange}
                      required
                  />
                  <Input
                      placeholder="Phone Number"
                      name="phoneNumber"
                      data-testid="phoneNumber"
                      value={studentData.phoneNumber}
                      onChange={handleChange}
                      required
                  />
                  <Input
                      placeholder="Birth Date"
                      type="date"
                      name="birthDate"
                      data-testid="date"
                      value={studentData.birthDate}
                      onChange={handleChange}
                      required
                  />
                  <Select
                      placeholder="Choose your Gender"
                      name="gender"
                      data-testid="gender"
                      value={studentData.gender}
                      onChange={handleChange}
                      required
                  >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                  </Select>
                  <Select
                      placeholder="Choose your program study"
                      name="programStudy"
                      data-testid="prody"
                      value={studentData.programStudy}
                      onChange={handleChange}
                      required
                  >
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
              </VStack>
              <Button colorScheme='blue' type="submit" mt={4} w="full" data-testid="add-btn">Add student</Button>
          </form>
      </Box>
  </Box>
  );
};

export default AddStudent;
