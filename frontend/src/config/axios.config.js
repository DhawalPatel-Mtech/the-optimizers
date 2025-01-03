import axios from "axios";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5OTYwZGU1Ny00OGM5LTQ1ZjItYTMyNi0yZDQwNjdmM2M2YzgiLCJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiaWF0IjoxNzM1OTAyOTM4LCJleHAiOjE3MzU5MDY1Mzh9.eYuX2p3XPQeLd51TjLGUyfsXAFiXlWTWLBC3IosPyLR-LOOtfO8dW_Asjbf5ivtpqGm5JOi3_mBR7aAW5F00TCJ429H31tJNvTRVwCCSXSUAGELjWtWrM5Jjc5yA706K555enXjfJcqaWdv0vC2tWmvi_KrPbryDqgUzmdDeeFFE0v6Lmnyb_tv_W8vsVy0_7sn50EqRaOYKJpkCn1kleB6bB6IQES-4pFTsinbuIh2TOCo3rBbS4DJXtraTMgwsLC2xO85sAcKEDDrfrpJ0AREdCPj50wAIrfla0mjwx2m4H7W3P67mdU77WSrfmCnxo3fF6qbLVnIHGaUX-KWtNw";

const axiosInstance = axios.create({
  baseURL: "https://qfrdwrvx-8000.inc1.devtunnels.ms/", // Replace with your base API URL
  headers: {
    "Content-Type": "application/json",
    // Add any other default headers if needed
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
