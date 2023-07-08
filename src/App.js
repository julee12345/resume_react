import { useState } from 'react';
import { useEffect } from 'react';
import MyBioScreen from './pages/MyBioScreen';
import MyBioEditScreen from './pages/MyBioEditScreen';

function App() {
  const [bioData, setBioData] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [subjects, setSubjects] = useState([]);

  const fetchSkills = async () => {
    try {
      // Fetch skills from Get Professional Skills API
      const response = await fetch("https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetProfessionalSkillsResponse.json");
      const data = await response.json();
      setSkills(data.result[0].skills);
    } catch (error) {
      console.log("Error fetching skills:", error);
    }
  };

  const fetchHobbies = async () => {
    try {
      // Fetch hobbies from Get Hobbies API
      const response = await fetch("https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetHobbiesResponse.json");
      const data = await response.json();
      setHobbies(data.result[0].hobbies);
    } catch (error) {
      console.log("Error fetching hobbies:", error);
    }
  };

  const fetchSubjects = async () => {
    try {
      // Fetch subjects from Get Subjects API
      const response = await fetch("https://newpublicbucket.s3.us-east-2.amazonaws.com/reactLiveAssignment/JsonFiles/GetSubjectsResponse.json");
      const data = await response.json();
      setSubjects(data.result[0].subjects);
      
    } catch (error) {
      console.log("Error fetching subjects:", error);
    }
  };

  useEffect(() => {
    fetchSkills();
    fetchHobbies();
    fetchSubjects();
  }, []);
  

  const handleEditClick = () => {
    setEditMode(true);
  };

  const handleSave = (updatedBioData) => {
    setBioData(updatedBioData);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleDeleteResume = () => {
    setBioData((prevBioData) => ({
      ...prevBioData,
      resume: null
    }));
  };

  const handleBack = () => {
    setEditMode(false);
  };

  return (
    <div className="App" style={{
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    }}>
      {
        editMode ? (
          <MyBioEditScreen
            bioData={bioData}
            skills={skills}
            hobbies={hobbies}
            subjects={subjects}
            onSave={handleSave}
            onCancel={handleCancel}
            onDeleteResume={handleDeleteResume}
            onBack={handleBack}
          />
        ) : (
          <MyBioScreen
            bioData={bioData}
            skills={skills}
            hobbies={hobbies}
            subjects={subjects}
            onEditClick={handleEditClick}
          />
        )
      }
    </ div>
  );
}

export default App;
