import CustomButton from "@/components/interactive/CustomButton";
import React, { ChangeEvent, useRef } from "react";

interface UploadFileToStringProps {
  onChange: (fileString: string) => void;
}

const UploadFileToString: React.FC<UploadFileToStringProps> = ({
  onChange,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        const fileString = e.target?.result as string;
        onChange(fileString);
      };

      reader.readAsText(file);
    }
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <input
        type="file"
        accept=".*"
        className="hidden"
        onChange={handleFileChange}
        ref={fileInputRef}
      />
      <CustomButton type="button" onClick={handleClick}>
        Upload File
      </CustomButton>
    </>
  );
};

export default UploadFileToString;
