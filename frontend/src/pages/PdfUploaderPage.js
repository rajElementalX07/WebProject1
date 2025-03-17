import { useEffect, useState } from "react";
import { pdfjs } from "react-pdf";
import PdfComp from "../components/PdfComp";
import api from "../utils/axios";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

function PdfUploaderPage() {
  const {user} = useSelector((state) => state.user);
  console.log(user);
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);

  const currentYear = new Date().getFullYear();
  const startYear = 2000; // You can adjust this to your requirement
  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

  const [selectedYear, setSelectedYear] = useState(currentYear);

  const handleChange = (event) => {
    setSelectedYear(event.target.value);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const titleParam = params.get("title");
    if (titleParam) {
      setTitle(titleParam);
    }
  }, [location.search]);

  useEffect(() => {
    getPdf();
  }, []);
  // const getPdf = async () => {
  //   const result = await api.get("/get-files");
  //   console.log(result.data.data);
  //   setAllImage(result.data.data);
  // };
  const getPdf = async () => {
    try {
      const result = await api.get(`/get-file?title=${title}`);
      console.log(result.data.data);
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching PDF:", error.response?.data?.message || error.message);
      setAllImage(null); 
    }
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("year", selectedYear.toString());

    if (user && user.department) {
      console.log("inside dep")
      formData.append("department", user.department);
    }
    console.log(title,selectedYear, file);
    console.log(formData);
    const result = await api.post(
      "/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status == "ok") {
      alert("Uploaded Successfully!!!");
      getPdf();
    }
  };
  const showPdf = (pdf) => {
    // window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
    setPdfFile(`https://webproject1-u6hr.onrender.com/files/${pdf}`)
  };
  return (
    <div className="App">
      <form className="formStyle" onSubmit={submitImage}>
        <h4>Pdf Uploader</h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
          value={title}
          // onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label htmlFor="year">Select Year: </label>
      <select id="year" value={selectedYear} onChange={handleChange}>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
        <br />
        <br />
        <input
          type="file"
          class="form-control"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <br />
        <button class="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {allImage == null
            ? (<p>No PDF Uploaded</p>)
            : allImage.map((data) => {
                return (
                  <div className="inner-div">
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn btn-primary"
                      onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                );
              })}
        </div>
      </div>
      <PdfComp pdfFile={pdfFile}/>
    </div>
  );
}

export default PdfUploaderPage;