import React, { useState } from 'react';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
// My Bio Edit Screen component
const MyBioEditScreen = ({
    bioData,
    skills,
    hobbies,
    subjects,
    onSave,
    onCancel,
    onDeleteResume,
    onBack
}) => {
    const [aboutMe, setAboutMe] = useState(bioData ? bioData.aboutMe : "");
    const [bloodGroup, setBloodGroup] = useState(bioData ? bioData.bloodGroup : "");
    const [resume, setResume] = useState(bioData ? bioData.resume : null);
    const [selectedSkills, setSelectedSkills] = useState(bioData ? bioData.skills : []);
    const [selectedHobbies, setSelectedHobbies] = useState(bioData ? bioData.hobbies : []);
    const [selectedSubjects, setSelectedSubjects] = useState(bioData ? bioData.subjects : []);

    const handleSave = () => {
        // Validate input data
        if (aboutMe.length < 3 || aboutMe.length > 500) {
            // Display appropriate error message for aboutMe input
            return;
        }

        if (resume && (resume.type !== "application/pdf" || resume.size > 5 * 1024 * 1024)) {
            // Display appropriate error message for resume input
            return;
        }

        // Create updated bio data object
        const updatedBioData = {
            aboutMe,
            bloodGroup,
            resume,
            skills: selectedSkills,
            hobbies: selectedHobbies,
            subjects: selectedSubjects
        };
        console.log(updatedBioData)

        onSave(updatedBioData);
    };

    const handleAddSkill = (skill) => {
        console.log("njdd",skill);
        setSelectedSkills(skill);
    };

    const handleRemoveSkill = (index) => {
        setSelectedSkills((prevSkills) => prevSkills.filter((_, i) => i !== index));
    };

    const handleAddHobby = (hobby) => {
        setSelectedHobbies( hobby);
    };

    const handleRemoveHobby = (index) => {
        setSelectedHobbies((prevHobbies) => prevHobbies.filter((_, i) => i !== index));
    };

    const handleAddSubject = (subject) => {
        setSelectedSubjects(subject);
    };

    const handleRemoveSubject = (index) => {
        setSelectedSubjects((prevSubjects) => prevSubjects.filter((_, i) => i !== index));
    };

    return (
        <div className="screen">
        <div className="edit-icon" onClick={onBack}>
                    {/* Add edit icon */}
                        <ArrowLeftIcon />
                    </div>
            <div className="content">
                <div className="form">
                    <label>About me:</label>
                    <textarea
                        value={aboutMe}
                        raws={5}
                        style={{width: '100%'}}
                        onChange={(e) => setAboutMe(e.target.value)}
                    />
                    <br />
                    <label>Blood Group:</label>
                    <select
                        value={bloodGroup}
                        onChange={(e) => setBloodGroup(e.target.value)}
                    >
                        <option>A+</option>
                        <option>A-</option>
                        <option>o+</option>
                    </select>
                    <br />
                    <label>Resume:</label>
                    {resume ? (
                        <div>
                            {/* Display resume details */}
                            <button onClick={onDeleteResume}>Delete</button>
                        </div>
                    ) : (
                        <div>
                            {/* Display "No Resume added yet" text */}
                        </div>
                    )}
                    {/* Display error message for resume input */}
                    <input type="file" onChange={(e) => setResume(e.target.files[0])} />
                    <br />

                    
                     <Autocomplete
        multiple
        id="tags-standard"
        options={skills}
        getOptionLabel={(option) => option.value}
        defaultValue={[skills[15]]}
        onChange={(event, value) => handleAddSkill(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Skills"
            placeholder="Select Skill"
          />
        )}
      />
                    <br />

                 
                    <Autocomplete
        multiple
        id="tags-standard"
        options={hobbies}
        getOptionLabel={(option) => option.value}
        defaultValue={[hobbies[15]]}
        onChange={(event, value) => handleAddHobby(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Skills"
            placeholder="Select hobbies"
          />
        )}
      />
    
                    <br />

                    
                    <Autocomplete
        multiple
        id="tags-standard"
        options={subjects}
        getOptionLabel={(option) => option.value}
        defaultValue={[subjects[15]]}
        onChange={(event, value) => handleAddSubject(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Subjects"
            placeholder="Select Subjects"
          />
        )}
      />
                    <div className="buttons">
                        <button onClick={handleSave} disabled={!aboutMe || !bloodGroup} style={{width: '100%'}}>
                            Save
                        </button>
                        <button onClick={onCancel}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MyBioEditScreen
