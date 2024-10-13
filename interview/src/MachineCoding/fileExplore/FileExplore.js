import React, { useState } from "react";
import explorerData from "./data/data";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

const FileExplore = () => {
  const [explorer, setExplorer] = useState(explorerData);
  const { insertNode, deletNode } = useTraverseTree();
  const handleInsertNode = (folderId, newItem, isFolder) => {
    const newTreeData = insertNode(explorer, folderId, newItem, isFolder);
    setExplorer(newTreeData);
  };
  const handleDeleteNode = (folderId) => {
    console.log(folderId)
    setExplorer(deletNode(explorer, folderId));
  };
  return (
    <div>
      File Explorer
      <Folder explorer={explorer} handleInsertNode={handleInsertNode} handleDeleteNode={handleDeleteNode} />
    </div>
  );
};

export default FileExplore;
