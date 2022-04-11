import { useState } from "react";
import axios from "axios";
import "./styles/styles.css";
import * as React from "react";

function CollegeList() {
  const [Ratio, setRatio] = React.useState(10);
  const handleRatio = (e) => {
    setRatio(e.target.value);
  };

  const [AvgCost, setAvgCost] = React.useState(20000);
  const handleAvgCost = (e) => {
    setAvgCost(e.target.value);
  };

  const [colleges, setColleges] = useState(null);

  const params = {
    //two things: info_ids & filters
    filters: {
      satOverall: 1500,
      actComposite: 35,
      // gpaMinimumTenPercent: formData.gpa,
    },
    offset: 9, //if want to load more info than 20 this is page index
    info_ids: [
      "website",
      "shortDescription",
      "longDescription",
      "campus_image",
      "logo_image",
      "fundingType",
      "TOEFLRequirement",
      "averageNetCost",
      "studentFacultyRatio",
    ], //returned object's content
  };

  const fetchData = async () => {
    const response = await axios
      .get(
        "https://api.collegeai.com/v1/api/college-list?api_key=free_c2f12782a8449751c2c15f5891",
        { params }
      )
      .then(function (response) {
        console.log(response);
        setColleges(response.data.colleges);
      });
  };
  console.log(colleges);
  return (
    <div className="CollegeList">
      <label className="label">Teacher-Student Ratio:</label>
      <input
        onChange={handleRatio}
        className="input"
        value={Ratio}
        type="number"
      />

      <label className="label">
        Average Net Cost For Attendance (Less Than):
      </label>
      <input
        onChange={handleAvgCost}
        className="input"
        value={AvgCost}
        type="number"
      />

      <div>
        <button className="fetch-button" onClick={fetchData}>
          Load Data
        </button>
        <div className="colleges">
          {colleges &&
            colleges.map((college, index) => {
              if (
                college.studentFacultyRatio > Ratio &&
                college.averageNetCost < AvgCost
              ) {
                return (
                  <div className="college" key={index}>
                    <div>
                      <img width="250" height="200" src={college.logoImage} />
                      <br />
                      <a href={college.website}>{college.website}</a>
                      <div className="details">
                        <p>{college.shortDescription}</p>
                        <p>{college.fundingType}</p>
                        <p>{college.averageNetCost}</p>
                        <p>{college.studentFacultyRatio}</p>
                        <p>{Ratio}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </div>
    </div>
  );
}

export default CollegeList;
