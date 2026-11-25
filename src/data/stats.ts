import { Users, Award, FileCheck, Timer } from "lucide-react";
import type { Stat } from "@/types";

export const STATS = [
  { icon: Users, value: "Growing", label: "Client Base", sub: "Businesses & individuals" },
  { icon: Award, value: "Expert", label: "Advisory Team", sub: "Consulting, legal & tax experts" },
  { icon: FileCheck, value: "Complete", label: "Business Solutions", sub: "From idea to compliance" },
  { icon: Timer, value: "On Time", label: "Every Deadline", sub: "No penalties, ever" },
] satisfies readonly Stat[];
