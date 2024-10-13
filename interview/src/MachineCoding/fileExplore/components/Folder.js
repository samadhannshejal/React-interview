import React, { useState } from "react";
import "../../../Styles/FileExplorer.css";
import { MdDelete } from "react-icons/md";
import { FaPencilAlt } from "react-icons/fa";

const Folder = ({ handleInsertNode, explorer, handleDeleteNode }) => {
  const [isExpand, setIsExpand] = useState();
  const [inputVisible, setInputVisible] = useState({
    isVisible: false,
    isFolder: false,
    value: "",
  });
  const handleOpenInput = (e, isVisible, isFolder, isEdit) => {
    // e.stopPropagation();
    if (isEdit) {
      console.log(explorer.name);
      setInputVisible({ isFolder, isVisible, value: explorer.name });
    }
    setInputVisible({ isVisible, isFolder });
  };
  const addFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, inputVisible.isFolder);

      setInputVisible({ ...inputVisible, isVisible: false });
    }
  };
  if (explorer.isFolder) {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "30px",
            marginTop: "10px",
          }}
        >
          <div onClick={() => setIsExpand(!isExpand)} className="folder">
            <span>📁{explorer.name}</span>
          </div>
          <div className="file-btn">
            <button onClick={(e) => handleOpenInput(e, true, true)}>
              Folder &nbsp; &nbsp; ➕
            </button>
            <button onClick={(e) => handleOpenInput(e, true, false)}>
              File &nbsp; &nbsp; ➕
            </button>
            <button
              onClick={(e) => handleDeleteNode(e, true, true)}
              style={{ fontSize: "20px" }}
            >
              <MdDelete />
            </button>
            <button
              onClick={(e) => handleOpenInput(e, true, true, explorer.id)}
              style={{ fontSize: "20px" }}
            >
              <FaPencilAlt />
            </button>
          </div>
        </div>
        {inputVisible.isVisible && (
          <div>
            <span>{inputVisible.isFolder ? "📁" : "📄"}</span>
            <input
              type="text"
              placeholder={`please enter ${
                inputVisible.isFolder ? "folder " : "file"
              } name`}
              value={inputVisible?.value}
              autoFocus
              onBlur={() => setInputVisible(false, false)}
              onKeyUp={(e) => addFolder(e)}
            />
          </div>
        )}
        <div
          style={{ display: isExpand ? "block" : "none", paddingLeft: "25px" }}
        >
          {explorer.items.map((exp) => {
            return (
              <>
                <Folder
                  handleInsertNode={handleInsertNode}
                  explorer={exp}
                  key={exp.id}
                  handleDeleteNode={handleDeleteNode}
                />
              </>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
};

export default Folder;
