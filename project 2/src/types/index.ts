export interface Country {
  code: string;
  name: string;
  emoji: string;
  region: string;
  currency: string;
  description: string;
  budgetRange: {
    min: number;
    max: number;
  };
  studentVisa: VisaInfo;
  workVisa: VisaInfo;
}

export interface VisaInfo {
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeline: string;
  totalCost: string;
  steps: VisaStep[];
  budget: BudgetBreakdown;
  importantNotes?: string[];
}

export interface VisaStep {
  title: string;
  description: string;
  timeline?: string;
  documents?: string[];
}

export interface BudgetBreakdown {
  [category: string]: BudgetItem;
}

export interface BudgetItem {
  min: number;
  max: number;
  description: string;
}