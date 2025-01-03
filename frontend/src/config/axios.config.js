import axios from "axios";

const token =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YmU0M2EyNy05NWE5LTRkOWQtODAzZC03ZmM3ZWFlYjc0M2MiLCJlbWFpbCI6InRlc3QudXNlckBtYWlsaW5hdG9yLmNvbSIsImlhdCI6MTczNTkwNjg5OCwiZXhwIjoxNzM1OTEwNDk4fQ.ClxTLs7Tt-gXL-6hG4SiYhtqnr1ew7hFF__ipdnHuHRkWER1Y61NpkIX9hE2iPgU-j9xlBcO1KZwoZGOZSZ_MCS56v0mQV9yI5O7k9Ao7g7LxhGmF5agLkjr9uDTy1-dneLL6XvcsxIYzx2PjJ6QEAes2ZOIkuWuDOH-8v5Qr0fy7jcnibcQWWsC7U8xiL6HGV_5okqxMfUXH_zBJ-2dWh3pNjGDCyS5dTqKlSoT-Vqx8zyd5mTeyJDh6BhFhvSq2ICQXyHuam_FmZ28p-OOX81kKrodZUu3VLSlY3QexS1NfDBZJtdayrSHPIKW4sT0V9NpAsZj0UsCHTpgai-Q_w";

const axiosInstance = axios.create({
  baseURL: "https://qfrdwrvx-8000.inc1.devtunnels.ms/", // Replace with your base API URL
  headers: {
    "Content-Type": "application/json",
    // Add any other default headers if needed
    Authorization: `Bearer ${token}`,
  },
});

export default axiosInstance;
