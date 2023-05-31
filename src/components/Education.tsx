import React, { useState } from 'react';
import ContentEditable from 'react-contenteditable';
import '../assets/styles/Education.css';

const Education = () => {

  const [startDate, setStartDate] = useState("2022");
  const [endDate, setEndDate] = useState("2024");
  const [degree, setDegree] = useState("Master Degree in Computer Science");
  const [institute, setInstitute] = useState("University of Cambridge");
  const [startDate1, setStartDate1] = useState("2022");
  const [endDate1, setEndDate1] = useState("2018");
  const [degree1, setDegree1] = useState("Bachelor degree in Information Technology");
  const [institute1, setInstitute1] = useState("Punjab University");
  const [startDate2, setStartDate2] = useState("2018");
  const [endDate2, setEndDate2] = useState("2016");
  const [degree2, setDegree2] = useState("Intermediate in Science");
  const [institute2, setInstitute2] = useState("Bise Lahore");

  const handleBlur = () => {
    const education = {
      start_date: startDate,
      end_date: endDate,
      degree: degree,
      institute: institute,
    }
    const education1 = {
      start_date: startDate1,
      end_date: endDate1,
      degree: degree1,
      institute: institute1,
    }
    const education2 = {
      start_date: startDate2,
      end_date: endDate2,
      degree: degree2,
      institute: institute2,
    }
    console.log(JSON.stringify(education, null, 2));
    console.log(JSON.stringify(education1, null, 2));
    console.log(JSON.stringify(education2, null, 2));
  }

  return (
    <div
      className='contact-body education-body'
      // onMouseLeave={handleMouseLeave}
      onBlur ={handleBlur}
    >
      <h3 className='title'>EDUCATION</h3>
      <ul>
        <li>
          <h5>
            <ContentEditable
              className='date'
              onChange={e => setStartDate(e.currentTarget.innerHTML)}
              html={startDate}
            />
            &nbsp;-&nbsp;
            <ContentEditable
              className='date'
              onChange={e => setEndDate(e.currentTarget.innerHTML)}
              html={endDate}
            />
          </h5>
          <h4>
            <ContentEditable
              onChange={e => setDegree(e.currentTarget.innerHTML)}
              html={degree}
            />
          </h4>
          <h4>
            <ContentEditable
              onChange={e => setInstitute(e.currentTarget.innerHTML)}
              html={institute}
            />
          </h4>
        </li>
        <li>
          <h5>
            <ContentEditable
              className='date'
              onChange={e => setStartDate1(e.currentTarget.innerHTML)}
              html={startDate1}
            />
            &nbsp;-&nbsp;
            <ContentEditable
              className='date'
              onChange={e => setEndDate1(e.currentTarget.innerHTML)}
              html={endDate1}
            />
          </h5>
          <h4>
            <ContentEditable
              onChange={e => setDegree1(e.currentTarget.innerHTML)}
              html={degree1}
            />
          </h4>
          <h4>
            <ContentEditable
              onChange={e => setInstitute1(e.currentTarget.innerHTML)}
              html={institute1}
            />
          </h4>
        </li>
        <li>
          <h5>
            <ContentEditable
              className='date'
              onChange={e => setStartDate2(e.currentTarget.innerHTML)}
              html={startDate2}
            />
            &nbsp;-&nbsp;
            <ContentEditable
              className='date'
              onChange={e => setEndDate2(e.currentTarget.innerHTML)}
              html={endDate2}
            />
          </h5>
          <h4>
            <ContentEditable
              onChange={e => setDegree2(e.currentTarget.innerHTML)}
              html={degree2}
            />
          </h4>
          <h4>
            <ContentEditable
              onChange={e => setInstitute2(e.currentTarget.innerHTML)}
              html={institute2}
            />
          </h4>
        </li>
        {/* <li>
          <h5>2018 - 2022</h5>
          <h4>Bachelor degree in Information Technology</h4>
          <h4>Punjab University</h4>
        </li>
        <li>
          <h5>2016 - 2018</h5>
          <h4>Intermediate in Science</h4>
          <h4>BISE Lahore</h4>
        </li> */}
      </ul>
    </div>
  )
}

export default Education
