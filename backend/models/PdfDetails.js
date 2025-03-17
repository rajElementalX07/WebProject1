import mongoose from "mongoose";

const PdfDetailsSchema = new mongoose.Schema(
  {
    pdf: String,
    title: String,
    year: Number,
    department: { type: String }
  },
  { collection: "PdfDetails" }
);

const PdfDetails = mongoose.model("PdfDetails", PdfDetailsSchema);
export default PdfDetails;