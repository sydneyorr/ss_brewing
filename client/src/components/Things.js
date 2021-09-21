import React from "react"
import { Card } from "semantic-ui-react";
import ListLoader from "./ListLoader";

const Things = () => {

  return (
    <div>
      <ListLoader 
      header={"Things"}
      url="/api/things"
      renderData={(t)=>{
        return (
          <Card>
            <p>{t.name}</p>
          </Card>
        )
      }}
      />
    </div>
  )
}

export default Things;