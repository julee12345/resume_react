import EditIcon from '@mui/icons-material/Edit';
import './MyBioScreen.css'
import { SocialIcon } from 'react-social-icons';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

// My Bio Screen component
const MyBioScreen = ({ bioData, skills, hobbies, subjects, onEditClick }) => {
    console.log(bioData)
    return (
        <div className="screen">
            <div className="header">
                
            </div>
            <div className="content">
                <div>
                <div style={{display: 'flex',justifyContent: 'space-between'}}>
                    <h2>About Me</h2>
                    
                    <div className="edit-icon" onClick={onEditClick}>
                    {/* Add edit icon */}
                        <EditIcon />
                    </div>
                    
                </div>
                
                        <textarea
                            value={bioData?.aboutMe}
                            disabled
                            raws={4}
                            className='textfield'
                            placeholder="no about me is added"
                            style={{ width: '100%', }}
                        //onChange={(e) => setAboutMe(e.target.value)}
                        />
                    {/* <p>{bioData?.aboutMe}</p> */}
                    <div style={{ display: 'flex', justifyContent: "space-between",flexDirection: 'raw' }}>
                        <h2>Blood Group</h2>
                        <h2>{bioData?.bloodGroup}</h2>
                    </div>
                    <div style={{display: 'flex', justifyContent: "space-between" }}>
                    <div>
                    <SocialIcon url="https://twitter.com/jaketrent" style={{}}/>
                    <h2>Resume</h2>
                    </div>
                    <h2>{bioData?.resume ? "Resume uploaded" : "Upload Resume"}</h2>
                    </div>
                    <h2>Skills</h2>
                  {bioData?.skills.length > 0 && 
                    <Autocomplete
                              disablePortal
        multiple
        id="tags-standard"
        options={bioData?.skills}
        getOptionLabel={(option) => option?.value}
        defaultValue={bioData?.skills}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Skills"
            placeholder="Select Skill"
          />
        )}
      />}     
       <h2>Hobbies</h2>
{bioData?.hobbies.length > 0 &&                    
    <Autocomplete
                              disablePortal
        multiple
        id="tags-standard"
        options={bioData?.hobbies}
        getOptionLabel={(option) => option?.value}
        defaultValue={bioData?.hobbies}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Hobbies"
            placeholder="Select hobbies"
          />
        )}
      /> }
             <h2>Subjects</h2>

      {
        bioData?.subjects.length > 0 &&
        <Autocomplete
                              disablePortal
        multiple
        id="tags-standard"
        options={bioData?.subjects}
        getOptionLabel={(option) => option?.value}
        defaultValue={bioData?.subjects}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Subjects"
            placeholder="Select Subjects"
          />
        )}
      /> 
      }
      
            </div>


            </div>
        </div>
    );
};
export default MyBioScreen;
