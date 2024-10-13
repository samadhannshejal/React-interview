const useTraverseTree = () => {
  const insertNode = (tree, folderId, item, isFolder) => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: crypto.randomUUID(),
        isFolder: isFolder,
        items: [],
        name: item,
      });
      return tree;
    }
    const latestTree = tree.items.map((obj) => {
      return insertNode(obj, folderId, item, isFolder);
    });
    return { ...tree, items: latestTree };
  };
  const deletNode=(tree,folderId)=>{
    if (tree.id === folderId ) {
        
        return null
    } 
    const latestTree = tree.items.map((obj) => {
        return deletNode(obj, folderId);
      }).filter((item) => item !== null);;
      return { ...tree, items: latestTree };

  }
  return { insertNode,deletNode };
};
export default useTraverseTree;
