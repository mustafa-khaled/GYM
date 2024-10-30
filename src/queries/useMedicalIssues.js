import { useQuery } from "@tanstack/react-query";
import { getMedicalIssues } from "../services/medicalIssues";

export function useMedicalIssues() {
  const {
    isPending: MedicalIssueLoading,
    data,
    error,
  } = useQuery({
    queryKey: ["medical_issues"],
    queryFn: getMedicalIssues,
  });

  const medicalIssues = data?.data?.medical_issues.map((issue) => ({
    value: issue.id,
    title: issue.name,
  }));

  return {
    MedicalIssueLoading,
    medicalIssues,
    error,
  };
}
