import React, { useState } from "react";
import "./CollegeData.css";

const CollegeData = () => {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleExpand = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const truncateText = (text, maxLength, isExpanded) => {
    if (text.length <= maxLength) return text;
    return isExpanded ? text : text.substring(0, maxLength) + "...";
  };
  const InstitutionData = [
    {
      id: 1,
      data1: "Name of the Head of the institution",
      data2: "Arvind Vinayak Deshpande",
    },
    { id: 2, data1: "Designation", data2: "Principal" },
    {
      id: 3,
      data1: "Does the institution function from its own campus?",
      data2: "Yes",
    },
    { id: 4, data1: "Phone no./Alternate phone no.", data2: "02024354938" },
    { id: 5, data1: "Mobile no", data2: "9881000780" },
    {
      id: 6,
      data1: "Address",
      data2:
        " SURVEY NO. 44/1, OFF SINHGAD ROAD, VADGAON BK. PUNE, MAHARASHTRA, 411041",
    },
    { id: 7, data1: "City/Town", data2: "Pune" },
    { id: 8, data1: "State/UT", data2: "Maharastra" },
    { id: 9, data1: "Pin Code", data2: "411041" },
  ];

  const InstitutionStatus = [
    { id: 1, data1: "Affiliated /Constituent", data2: "Affiliated" },
    { id: 2, data1: "Type of Institution", data2: "Co-education" },
    { id: 3, data1: "Location", data2: "Urban" },
    { id: 4, data1: "Financial Status", data2: "Self-financing" },
    {
      id: 5,
      data1: "Name of the Affiliating University",
      data2: " Savitribai Phule Pune University",
    },
    {
      id: 6,
      data1: "Name of the IQAC Coordinator",
      data2: " Dr. Manoj Limchand Bangare",
    },
    { id: 7, data1: "Phone No.", data2: "02024100163" },
    { id: 8, data1: "Alternate phone No.", data2: "7588277048" },
    { id: 9, data1: "Mobile", data2: "9850015736" },
    { id: 10, data1: "IQAC e-mail address", data2: " iqac_skncoe@sinhgad.edu" },
    {
      id: 11,
      data1: "Alternate Email address",
      data2: " mlbangare@sinhgad.edu",
    },
  ];
  const SigData = [
    {
      id: 1,
      data: " Dedicated Industry Institute Interaction Cell is formed.",
    },
    {
      id: 2,
      data: "  Students were motivated to work on socially relevant projects.",
    },
    { id: 3, data: " Initiated preparation of NBA" },
    {
      id: 4,
      data: "Students and faculty were encourage to published their work in reputed journals/ national, international Conferences.",
    },
    {
      id: 5,
      data: "  One Day Natianal Intellectual Property awerness mission Programme was conducted on 26.03.2024",
    },
  ];

  const PaData = [
    { id: 1, data1: "Plan of Action", data2: "Achievements/Outcomes" },
    {
      id: 2,
      data1: "Dedicated Industry Institute Interaction Cell is formed",
      data2: " Cell is formed",
    },
    {
      id: 3,
      data1: " Students were motivated to work on socially relevant projects.",
      data2: "motivated to work on socially relevant projects.",
    },
    {
      id: 4,
      data1: "Initiated preparation of NBA",
      data2: "SAR preparation and SOP finalization of NBA",
    },
    {
      id: 5,
      data1:
        "Students and faculty were encourage to published their work in reputed journals/national, international Conferences.",
      data2: " Faculty were encourage to published",
    },
  ];

  const data = {
    Programme: {
      1.1: {
        title:
          "Number of courses offered by the institution across all programs during the year",
        value: 406,
      },
    },
    Student: {
      2.1: { title: "Number of students during the year", value: 4300 },
      2.2: {
        title:
          "Number of seats earmarked for reserved category as per GOI/State Govt. rule during the year",
        value: 388,
      },
      2.3: {
        title: "Number of outgoing/final year students during the year",
        value: 1179,
      },
    },
    Academic: {
      3.1: {
        title: "Number of full-time teachers during the year",
        value: 203,
      },
      3.2: { title: "Number of sanctioned posts during the year", value: 221 },
    },
    Institution: {
      4.1: { title: "Total number of Classrooms and Seminar halls", value: 56 },
      4.2: {
        title:
          "Total expenditure excluding salary during the year (INR in lakhs)",
        value: "32.21",
      },
      4.3: {
        title: "Total number of computers on campus for academic purposes",
        value: 889,
      },
    },
  };
  return (
    <>
      <div className="table-container">
        <table className="custom-table">
          <caption className="table-caption">Data of the Institution</caption>
          <thead>
            <tr>
              <th>1.Name of the Institution</th>
              <th>
                SINHGAD TECHNICAL EDUCATION SOCIETY SMT. KASHIBAI NAVALE COLLEGE
                OF ENGINEERING
              </th>
            </tr>
          </thead>
          <tbody>
            {InstitutionData.map((item) => (
              <tr key={item.id}>
                <td>{item.data1}</td>
                <td>{item.data2}</td>
              </tr>
            ))}
            <tr>
              <td>Registered e-mail</td>
              <td>
                <a href="mailto:principal.skncoe@sinhgad.edu">
                  principal.skncoe@sinhgad.edu
                </a>
              </td>
            </tr>
            <tr>
              <td>Alternate e-mail</td>
              <td>
                <a href="mailto:iqac_skncoe@sinhgad.edu">
                  iqac_skncoe@sinhgad.edu
                </a>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan={2}>2.Institutional status</th>
            </tr>
          </thead>
          <tbody>
            {InstitutionData.map((item) => (
              <tr key={item.id}>
                <td>{item.data1}</td>
                <td>{item.data2}</td>
              </tr>
            ))}
          </tbody>
          <tr>
            <td>IQAC e-mail address</td>
            <td>
              <a href="mailto:iqac_skncoe@sinhgad.edu">
                iqac_skncoe@sinhgad.edu
              </a>
            </td>
          </tr>
          <tr>
            <td>Alternate Email address</td>
            <td>
              <a href="mailto:mlbangare@sinhgad.edu">mlbangare@sinhgad.edu</a>
            </td>
          </tr>
          <tr>
            <td>
              3.Website address (Web link of the AQAR) (Previous Academic Year)
            </td>
            <td>
              <a href=" http://skncoe.sinhgad.edu">
                {" "}
                http://skncoe.sinhgad.edu
              </a>
            </td>
          </tr>
          <tr>
            <th>4.Whether Academic Calendar prepared during the year?</th>
            <th>Yes</th>
          </tr>
          <tr>
            <td>
              {" "}
              if yes, whether it is uploaded in the Institutional website Web
              link:
            </td>
            <td>
              <a href=" http://skncoe.sinhgad.edu/media/534868/se%20te%20be%20merged%20(1).pdf">
                {" "}
                http://skncoe.sinhgad.edu/media/534868/se%20te%20be%20merged%20(1).pdf
              </a>
            </td>
          </tr>
          <tr>
            <th>6.Date of Establishment of IQAC</th>
            <th>26/12/2016</th>
          </tr>
          <tr>
            <th>8.Whether composition of IQAC as per latest NAAC guidelines</th>
            <th>Yes</th>
          </tr>
          <tr>
            <td>Upload latest notification of formation of IQAC</td>
            <td>
              <a
                href={`/auth/upload?title=Upload latest notification of formation of IQAC`}
              >
                Upload File
              </a>
            </td>
          </tr>
          <tr>
            <th>9.No. of IQAC meetings held during the year</th>
            <th>4</th>
          </tr>
          <tr>
            <td>
              {" "}
              Were the minutes of IQAC meeting(s) and compliance to the
              decisions have been uploaded on the institutional website?
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>
              {" "}
              If No, please upload the minutes of the meeting(s) and Action
              Taken Report
            </td>
            <td> No File Uploaded</td>
          </tr>
          <tr>
            <th>
              {" "}
              10.Whether IQAC received funding from any of the funding agency to
              support its activities during the year?
            </th>
            <th>No</th>
          </tr>
          <tr>
            <td>If yes, mention the amount</td>
            <td></td>
          </tr>
          <tr>
            <th colSpan={2}>
              11.Significant contributions made by IQAC during the current year
              (maximum five bullets)
            </th>
          </tr>
          {SigData.map((item) => (
            <tr key={item.id}>
              <td colSpan={2}>{item.data}</td>
            </tr>
          ))}
          <tr>
            <th colSpan={2}>
              12.Plan of action chalked out by the IQAC in the beginning of the
              Academic year towards Quality Enhancement and the outcome achieved
              by the end of the Academic year
            </th>
          </tr>
          {PaData.map((item) => (
            <tr key={item.id}>
              <td>{item.data1}</td>
              <td>{item.data2}</td>
            </tr>
          ))}
          <tr>
            <th> 13.Whether the AQAR was placed before
            statutory body?</th>
            <th>Yes</th>
          </tr>
          <tr>
            <td>Name</td>
            <td>Date of meetings</td>
          </tr>
          <tr>
            <td>Management</td>
            <td>04/03/2024</td>
          </tr>
          <tr>
            <th colSpan={2}>14.Whether institutional data submitted to AISHE</th>
          </tr>
          <tr>
            <td>Year</td>
            <td>Date of Submission</td>
          </tr>
          <tr>
            <td>2024</td>
            <td>31/01/2025</td>
          </tr>
          <tr>
            <th colSpan={2}>15.Multidisciplinary / interdisciplinary</th>
          </tr>
          <tr>
            <td colSpan={2}>
              {truncateText(
                `As per Vision of National Education Policy, institute effectively
              provides various platforms for high quality education which will
              help to develop human resources in Bharat as global citizens. As
              institute is affiliated to SPPU, there is limited scope for
              interdisciplinary education, however, affiliated university has
              redesigned the curriculum and incorporated “open elective” in 2012
              course revised syllabus so that students get flexibility to choose
              elective courses offered by other departments. Institute strongly
              believes that multidisciplinary education is significantly better
              than one dimensional education. In the institute various platforms
              like Go Carting, Supra, Baja, Robotics, E-cell, Incubation centre,
              are provided where students from Mechanical, Computer, IT and E&TC
              departments work together or multidisciplinary research. IQAC of
              institute is keen for further rise the depth of multidisciplinary
              approach. In short, institute has few mechanisms addressing
              multidisciplinary education and is proactively working towards
              implementation of the suggestions given in the NEP. As per Vision
              of National Education Policy, institute effectively provides
              various platforms for high quality education which will help to
              develop human resources in Bharat as global citizens. As institute
              is affiliated to SPPU, there is limited scope for
              interdisciplinary education, however, affiliated university has
              redesigned the curriculum and incorporated “open elective” in 2012
              course revised syllabus so that students get flexibility to choose
              elective courses offered by other departments. Institute strongly
              believes that multidisciplinary education is significantly better
              than one dimensional education. In the institute various platforms
              like Go Carting, Supra, Baja, Robotics, E-cell, Incubation centre,
              are provided where students from Mechanical, Computer, IT and E&TC
              departments work together or multidisciplinary research. IQAC of
              institute is keen for further rise the depth of multidisciplinary
              approach. In short, institute has few mechanisms addressing
              multidisciplinary education and is proactively working towards
              implementation of the suggestions given in the NEP.`,
                100,
                expandedRows[49]
              )}
              <button
                onClick={() => toggleExpand(49)}
                className="read-more-btn"
              >
                {expandedRows[49] ? " Read Less" : " Read More"}
              </button>
            </td>
          </tr>
          <tr>
            <th colSpan={2}> 16.Academic bank of credits (ABC):</th>
          </tr>
          <tr>
            <td colSpan={2}>
              {" "}
              The institution preparedness in implementation of Academic Bank of
              Credits depends upon the guidelines of the affiliated university
              and Higher Education Department, Maharashtra state.
            </td>
          </tr>
          <tr>
            <th colSpan={2}>17.Skill development:</th>
          </tr>
          <tr>
            <td colSpan={2}>
              {truncateText(
                `Institute is very keen about skill development of students as wel
              l as faculty. Every year, as a part of STP, Value Added Programs
              are conducted for final year students. VAP consists of various
              modules related to latest technologies. Students opt VAP module as
              per their interest. Student Training Program (STP) is unique
              initiative by institute to make the students industry ready. It is
              divided in five modules which address training on soft skills,
              communication skills, technical skills, Value Added Programs and
              interview preparation. Duration of STP is 120 hours and objectives
              of this initiative are To Enhance the employability opportunity To
              Prepare students for entrepreneurship To prepare students for
              higher education in India as well as abroad For faculty, various
              FDPs and workshops are conducted in the institute and faculty are
              encouraged to attend skill development workshops in the reputed
              institutes.`,
                100,
                expandedRows[53]
              )}
              <button
                onClick={() => toggleExpand(53)}
                className="read-more-btn"
              >
                {expandedRows[53] ? " Read Less" : " Read More"}
              </button>
            </td>
          </tr>
          <tr>
            <th colSpan={2}>
              18.Appropriate integration of Indian Knowledge system (teaching in
              Indian Language, culture, using online course)
            </th>
          </tr>
          <tr>
            <td colSpan={2}>
              {truncateText(
                `Being a professional institute , courses delivery is always in
              English language whereas to grasp the contents easily, teachers
              many times repeat concepts in national language Hindi and local
              language Marathi. Also during interaction with students, local
              language of students is preferred to make them comfortable.
              Institutes gives exposure to students for participation in
              Purushottam Karandak, which is an annual inter collegiate Marathi
              one -act play competition where students from across Maharashtra
              participate. Also to nurture the Indian culture, institute
              motivates students and faculty to celebrate Indian festivals and
              participation in Firodiya Karandak which consists of drama
              competition and other elements like, sculpture, pottery, painting,
              orchestra, puppet dancing.`,
                100,
                expandedRows[55]
              )}
              <button
                onClick={() => toggleExpand(55)}
                className="read-more-btn"
              >
                {expandedRows[55] ? " Read Less" : " Read More"}
              </button>
            </td>
          </tr>
          <tr>
            <th colSpan={2}>
              19.Focus on Outcome based education (OBE):Focus on Outcome based
              education (OBE):
            </th>
          </tr>
          <tr>
            <td colSpan={2}>
              {truncateText(
                `All these programmes in the institute are offered as outcomes
              based education (OBE) which are designed by affiliating university
              focusing on skills and knowledge requirements. Institute has
              implemented outcome-Based Education with clearly stated Vision,
              Mission, Program Educational Objectives (PEOs), Program Specific
              Outcomes (PSOs), Programme Outcomes (POs), and Course
              Outcomes(COs). The Course Outcomes are also mapped to the PO& PSO
              and attainment is calculated. The course delivery and assessment
              is carried out considering various cognitive abilities namely
              Remembering, Understanding, Applying, Analyzing, Evaluating and
              Creating. Apart from the domain-specific skills, learning outcomes
              at various levels ensure social contributions, lifelong learning
              and ethics- morals, as well as entrepreneurship development,
              leadership skills and teamwork. This motivates students to
              contribute proactively and effectively for development of
              individual and society by all means.`,
                100,
                expandedRows[57]
              )}
              <button
                onClick={() => toggleExpand(57)}
                className="read-more-btn"
              >
                {expandedRows[57] ? " Read Less" : " Read More"}
              </button>
            </td>
          </tr>
          <tr>
            <th colSpan={2}>20.Distance education/online education:</th>
          </tr>
          <tr>
            <td colSpan={2}>
              {truncateText(
                `During Covid -19 pandemic, institute started online education
              fully and effectively using digital platforms for conducting
              classes, workshops, seminars, guest lectures, conferences,
              meetings and examination. In spite of certain challenges like lack
              of face to face earning, by breaking the geographical barriers,
              online education has proved effective and efficient way for
              interaction among teachers, mentors, alumni, guest speakers and
              students from distant geographies. It has accelerated digitization
              at an unprecedented rate. Post pandemic, institutes have been
              forced to adopt hybrid mode of education combing online and
              offline resources. This can be considered as the new normal, which
              is envisaged in New Education Policy as well. Due to the
              experience gained during the closure period of Covid-19, access to
              online resources by educators and students will not be a
              constraint anymore. Faculties are encouraged to offer MOOC courses
              to students at institute which promotes the blended learning
              system of learning .`,
                100,
                expandedRows[59]
              )}
              <button
                onClick={() => toggleExpand(59)}
                className="read-more-btn"
              >
                {expandedRows[59] ? " Read Less" : " Read More"}
              </button>
            </td>
          </tr>
        </table>
      </div>
      <div className="table-container">
        <table className="custom-table">
          <caption className="table-caption">5.Accreditation Details</caption>
          <thead>
            <tr>
              <th>Cycle</th>
              <th>Grade</th>
              <th>CGPA</th>
              <th>Year of Accrediation</th>
              <th>Validity from</th>
              <th>Validity to</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Cycle 1</td>
              <td>B+</td>
              <td>2.64</td>
              <td>2016</td>
              <td>05/11/2016</td>
              <td>04/11/2021</td>
            </tr>
            <tr>
              <td>Cycle 2</td>
              <td>A</td>
              <td>3.04</td>
              <td>2022</td>
              <td>15/11/2022</td>
              <td>14/11/2027</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="table-container">
        <table className="custom-table">
          <caption className="table-caption">
            7.Provide the list of funds by Central / State Government
            UGC/CSIR/DBT/ICMR/TEQIP/World Bank/CPE of UGC etc.,
          </caption>
          <thead>
            <tr>
              <th>Institutional/Department /Faculty</th>
              <th>Scheme</th>
              <th> Funding Agency</th>
              <th>Year of award with duration</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NIL</td>
              <td>NIL</td>
              <td>NIL</td>
              <td>NIL</td>
              <td>NIL</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mx-auto p-6">
        {Object.entries(data).map(([section, entries]) => (
          <div key={section} className="table-container">
            <table className="custom-table">
              <caption className="table-caption">{section}</caption>
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Description</th>
                  <th className="border px-4 py-2">Value</th>
                  {section !== "Institution" && <th className="border px-4 py-2">Actions</th>}
                </tr>
              </thead>
              <tbody>
                {Object.entries(entries).map(([key, { title, value }]) => (
                  <tr key={key}>
                    <td className="border px-4 py-2">{key}</td>
                    <td className="border px-4 py-2">{title}</td>
                    <td className="border px-4 py-2">{value}</td>
                    {section !== "Institution" && (
                <td className="border px-4 py-2">
                  <a href={`/auth/upload?title=${title}`} className="text-blue-500 underline">
                    Upload File
                  </a>
                </td>
              )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </>
  );
};

export default CollegeData;
