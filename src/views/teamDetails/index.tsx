import React from "react";
import styles from "./index.module.scss";
import LayoutOutlet from "@/layout/outlet";

const TeamDetails: React.FC = () => {
  return (
    <div className={styles.teamDetails}>
      <LayoutOutlet />
    </div>
  );
};
export default TeamDetails;
