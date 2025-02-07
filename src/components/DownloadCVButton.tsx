'use client';

import { useParams } from "next/navigation";

export const DownloadCVButton = () => {

    const { locale } = useParams(); 
  const cvPath = locale === "en" ? "/edvan_davi_CV_en.pdf" : "/edvan_davi_CV_pt.pdf";
      
    return (
      <a href={cvPath} download className="btn">Download CV</a>
    )
}        