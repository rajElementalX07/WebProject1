// import React, { useState, useEffect } from "react";
// import { Container, Card, ProgressBar, Spinner } from "react-bootstrap";
// import axiosInstance from "../utils/axios";
// import { partBData } from "./PartBData";

// // Extract all the titles in Part B that require a file upload
// const partBTitles = [];
// Object.values(partBData).forEach((section) => {
//   Object.values(section).forEach((rows) => {
//     rows.forEach(({ label, value }) => {
//       if (value === "View File") {
//         partBTitles.push(label);
//       }
//     });
//   });
// });

// const totalExpected = partBTitles.length;

// const PartBProgress = () => {
//   const [uploadedCount, setUploadedCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUploads = async () => {
//       try {
//         const res = await axiosInstance.get("/get-files");
//         const list = res.data.data || [];
//         // Count only those entries whose title matches one of the Part B upload fields
//         const count = list.filter((item) => partBTitles.includes(item.title)).length;
//         setUploadedCount(count);
//       } catch (err) {
//         console.error("Error fetching PDF list:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchUploads();
//   }, []);

//   const percentage = totalExpected
//     ? Math.min(Math.round((uploadedCount / totalExpected) * 100), 100)
//     : 0;

//   return (
//     <Container className="my-5">
//       <h2 className="text-center mb-4">Part B PDF Upload Progress</h2>
//       {loading ? (
//         <div className="d-flex justify-content-center">
//           <Spinner animation="border" />
//         </div>
//       ) : (
//         <Card className="p-4 shadow-sm">
//           <ProgressBar
//             now={percentage}
//             label={`${uploadedCount}/${totalExpected}`}
//             animated
//             striped
//           />
//         </Card>
//       )}
//     </Container>
//   );
// };

// export default PartBProgress;

import React, { useState, useEffect } from "react";
import { Container, Card, ProgressBar, Spinner, Button } from "react-bootstrap";
import axiosInstance from "../utils/axios";
import { partBData } from "./PartBData";
import { Link } from "react-router-dom";

// Helper: collect all Part B upload-field labels
const extractPartBTitles = (data) =>
  Object.values(data).flatMap((section) =>
    Object.values(section).flatMap((sub) =>
      sub.filter((f) => f.value === "View File").map((f) => f.label)
    )
  );

const partBTitles = extractPartBTitles(partBData);
const totalExpected = partBTitles.length;

const PartBProgress = () => {
  const [uploadedCount, setUploadedCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    const fetchUploads = async () => {
      try {
        const res = await axiosInstance.get("/get-files");
        const list = res.data.data || [];
        // Count only those uploads whose title matches a Part B field label
        const count = list.filter((file) =>
          partBTitles.includes(file.title)
        ).length;

        // Filter only Part B-related files
        const partBFiles = list
          .filter((file) => partBTitles.includes(file.title))
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); // newest first

        setUploadedFiles(partBFiles);
        setUploadedCount(count);
      } catch (err) {
        console.error("Error fetching PDF list:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUploads();
  }, []);

  const percentage = totalExpected
    ? Math.min(Math.round((uploadedCount / totalExpected) * 100), 100)
    : 0;

  console.log(percentage);

  return (
    <Container className="my-5" style={{ maxWidth: 800 }}>
      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <h2 style={{ fontWeight: 600 }}>Part B Upload Progress</h2>
        <p style={{ color: "#666", fontSize: "1rem" }}>
          {uploadedCount} of {totalExpected} files uploaded
        </p>
      </div>

      {loading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" />
        </div>
      ) : (
        <>
          <Card
            className="shadow-sm"
            style={{ borderRadius: 12, padding: "1rem", background: "#f8f9fa" }}
          >
            <ProgressBar
              now={percentage}
              animated
              striped
              variant="info"
              style={{ height: 20, borderRadius: 10 }}
              label={`${percentage}%`}
            />
          </Card>
          {uploadedFiles.length > 0 && (
            <Card
              className="shadow-sm"
              style={{
                borderRadius: 12,
                padding: "1rem",
                background: "#fff",
                marginTop: "1rem",
              }}
            >
              <h5 className="mb-3">📄 Uploaded Files</h5>
              <ul style={{ paddingLeft: 20 }}>
                {uploadedFiles.map((file, idx) => (
                  <li key={file._id || idx} style={{ marginBottom: 6 }}>
                    {idx === 0 && (
                      <strong style={{ color: "#007bff" }}>
                        🆕 {file.title}
                      </strong>
                    )}
                    {idx !== 0 && file.title}
                  </li>
                ))}
              </ul>
            </Card>
          )}

          <div className="text-center mt-4">
            <Link to="/auth/part-b-data">
              <Button variant="secondary" size="sm">
                ← Back to Part B Data
              </Button>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default PartBProgress;
