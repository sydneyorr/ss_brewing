  
import React from "react";
import useAxiosOnMount from "./Hooks/useAxiosOnMount";
import SemanticLoadError from "./SemanticError";
import SematicLoader from "./SemanticLoader";

export default function ListLoader({ url, renderData, header }) {
  console.log();
  const { data, loading, error } = useAxiosOnMount(url);

  const renderList = () => {
    if (loading) return <SematicLoader />;
    if (error)
      return (
        <SemanticLoadError
          header="list"
          error={error}
        />
      );
    return data.map(renderData);
  };
  return (
    <div>
      <h1>{header}</h1>
      {renderList()}
    </div>
  );
}