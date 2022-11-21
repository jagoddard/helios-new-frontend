import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getArticleFileFromBlob } from "../../../services/articles";
import {
  getFinancialFileFromBlob,
  getFinancialMdaFileFromBlob,
} from "../../../services/financials";
import { getInvestorFileFromBlob } from "../../../services/investors";
import { getFileFromBlob } from "../../../services/news";
import { getTechnicalFileFromBlob } from "../../../services/technicalReports";
import useWindowSize from "../../../utils/useWindowSize";

const BarLoader = dynamic(() => import("react-spinners/BarLoader"), {
  ssr: false,
});

function FilePage() {
  const [preload, setPreload] = useState(false);
  const windowsize = useWindowSize();
  console.log(windowsize.width);
  const width = windowsize.width;

  const router = useRouter();
  const fileId = router.query.fileId;
  const page = router.query.page;
  const [pdfUrl, setPdfUrl] = useState<string>("");

  const getInvestorPdfData = async () => {
    setPreload(true);
    if (typeof fileId === "string") {
      try {
        const id = parseInt(fileId);
        const url = await getInvestorFileFromBlob(id);
        setPdfUrl(url);
      } catch (err) {
        console.log(err);
      } finally {
        setPreload(false);
      }
    }
  };

  const getArticlePdfData = async () => {
    setPreload(true);
    if (typeof fileId === "string") {
      try {
        const id = parseInt(fileId);
        const url = await getArticleFileFromBlob(id);
        setPdfUrl(url);
      } catch (err) {
        console.log(err);
      } finally {
        setPreload(false);
      }
    }
  };

  const getFinancialPdfData = async () => {
    setPreload(true);
    if (typeof fileId === "string") {
      try {
        const id = parseInt(fileId);
        const url = await getFinancialFileFromBlob(id);
        setPdfUrl(url);
      } catch (err) {
        console.log(err);
      } finally {
        setPreload(false);
      }
    }
  };

  const getFinancialMdaPdf = async () => {
    setPreload(true);
    if (typeof fileId === "string") {
      try {
        const id = parseInt(fileId);
        const url = await getFinancialMdaFileFromBlob(id);
        setPdfUrl(url);
      } catch (err) {
        console.log(err);
      } finally {
        setPreload(false);
      }
    }
  };

  const getNewsPdf = async () => {
    setPreload(true);
    if (typeof fileId === "string") {
      try {
        const id = parseInt(fileId);
        const url = await getFileFromBlob(id);
        setPdfUrl(url);
      } catch (err) {
        console.log(err);
      } finally {
        setPreload(false);
      }
    }
  };

  const getTechnicalReportsPdf = async () => {
    setPreload(true);
    if (typeof fileId === "string") {
      try {
        const id = parseInt(fileId);
        const url = await getTechnicalFileFromBlob(id);
        setPdfUrl(url);
      } catch (err) {
        console.log(err);
      } finally {
        setPreload(false);
      }
    }
  };

  useEffect(() => {
    if (page === "investor-information") {
      getInvestorPdfData();
    } else if (page === "articles") {
      getArticlePdfData();
    } else if (page === "financial") {
      getFinancialPdfData();
    } else if (page === "financial-mda") {
      getFinancialMdaPdf();
    } else if (page === "news") {
      getNewsPdf();
    } else if (page === "technical-report") {
      getTechnicalReportsPdf();
    }
  }, [fileId, page]);

  return (
    <div className="h-screen bg-[#323639]">
      {preload ? (
        <div className="flex items-center justify-center h-screen">
          <BarLoader color="#F18628" width={300} height={4} />
        </div>
      ) : width >= 992 ? (
        <>
          <iframe width={"100%"} className="h-screen" src={pdfUrl}></iframe>
        </>
      ) : (
        <>
          <button
            onClick={() => window.open(pdfUrl)}
            className="bg-[#25272A] font-hind text-primaryColor rounded-[3px] w-full h-full flex items-center justify-center font-semibold text-[22px] "
          >
            Download
          </button>
        </>
      )}
    </div>
  );
}

export default FilePage;
