import * as Icon from "@bxreact/icon";
import { useState, InputHTMLAttributes } from "react";
import "./file.css";

interface Props
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
    type?: "file";
    label?: string;
    onChange?: (files: FileList) => void;
}

export function File({
    label = "Arrastra tu archivo o selecciona desde tu computadora",
    onChange,
    ...props
}: Props) {
    const [files, setFiles] = useState<FileList>();
    return (
        <div className="bx-form-file">
            <label className="bx-form-file_label">
                <div className="bx-form_content">
                    <Icon.Upload size="2rem"></Icon.Upload>
                    <div>{label}</div>
                </div>
                <input
                    {...props}
                    type="file"
                    onChange={(event) => {
                        const { files } = event.target;
                        setFiles(files);
                        if (onChange) onChange(files);
                    }}
                />
            </label>
            {files?.length &&
                [...files].map((file) => (
                    <div className="bx-form-file_file">
                        <div className="bx-form-file_file_label">
                            <Icon.Document color="blue" />{" "}
                            <span>{file.name}</span>
                        </div>
                        <div className="bx-form-file_file_meta">
                            <strong>
                                {(file.size / (1024 * 100)).toFixed(2)}MB
                            </strong>
                        </div>
                    </div>
                ))}
        </div>
    );
}
