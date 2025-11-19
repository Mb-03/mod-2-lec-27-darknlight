"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchGeneratedUrl } from "../lib/api";
import QRCodeWithLogo from "./QRCodeWithLogo";

const QRGeneratorPage = () => {
  const { data, isFetching, error, refetch } = useQuery({
    queryKey: ["generate-url"],
    queryFn: fetchGeneratedUrl,
    enabled: false,
  });

  const handleGenerate = () => {
    refetch();
  };

  return (
    <div>
      <button onClick={handleGenerate} disabled={isFetching}>
        {isFetching ? "Generating ..." : "Generate"}
      </button>
      {error && <p>Something Went wrong. Try Again</p>}
      {data && (
        <div>
          <QRCodeWithLogo code={data} logoSrc="" />
          <p>{data}</p>
        </div>
      )}
    </div>
  );
};

export default QRGeneratorPage;
