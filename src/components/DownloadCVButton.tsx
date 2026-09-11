"use client";
import { motion } from "motion/react";
import { useLocale } from "next-intl";

export const DownloadCVButton = () => {
  const locale = useLocale();
  const cvPath =
    locale === "en" ? "/edvan_davi_CV_en.pdf" : "/edvan_davi_CV_pt.pdf";

  return (
    <motion.a
      href={cvPath}
      download
      className="btn"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      Download CV
    </motion.a>
  );
};
