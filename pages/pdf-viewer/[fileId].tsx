import { useRouter } from "next/router";
import React, { useState } from "react";
import { getInvestorFileFromBlob } from "../../services/investors";

function FilePage() {
  const [preload, setPreload] = useState(true);
  const router = useRouter();
  const pid = router.query.fileId;
  return (
    <>
      {preload ? (
        <div
          className="flex items-center justify-center "
          style={{ height: "100vh", backgroundColor: "#00ffcb29" }}
        >
          <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
        </div>
      ) : (
        "Null"
      )}
      <button
        onClick={() => {
          setPreload(false);
          
        }}
      >
        Stop
      </button>
    </>
  );
}

export default FilePage;
