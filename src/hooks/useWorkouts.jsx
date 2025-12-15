import { useContext, memo } from "react";

import { WorkoutsContext } from "../contexts/WorkoutsContext";

function useWorkouts() {
  const context = useContext(WorkoutsContext);
  if (context === undefined) {
    throw new Error("useWorkouts must be used within a WorkoutsProvider");
  }
  return context;
}

export default memo(useWorkouts);
