import { Country } from '../types';

export const countries: Country[] = [
  {
    code: 'US',
    name: 'United States',
    emoji: '🇺🇸',
    region: 'North America',
    currency: 'USD',
    description: 'Home to world-class universities and diverse job opportunities',
    budgetRange: { min: 3500000, max: 8000000 },
    studentVisa: {
      difficulty: 'Medium',
      timeline: '3-5 months',
      totalCost: '25,000-50,000 USD',
      steps: [
        {
          title: 'Choose Your University & Program',
          description: 'Research and apply to SEVP-approved universities. Most require TOEFL/IELTS, transcripts, and SOP.',
          timeline: '2-3 months',
          documents: ['Transcripts', 'TOEFL/IELTS scores', 'Statement of Purpose', 'Recommendation letters']
        },
        {
          title: 'Receive I-20 Form',
          description: 'After acceptance, university will send you Form I-20. This is required for visa application.',
          timeline: '1-2 weeks',
          documents: ['University acceptance letter', 'Financial documents', 'Passport copy']
        },
        {
          title: 'Pay SEVIS Fee',
          description: 'Pay $350 SEVIS I-901 fee online before visa interview.',
          timeline: '1 day',
          documents: ['I-20 form', 'Credit card for payment']
        },
        {
          title: 'Apply for F-1 Visa',
          description: 'Complete DS-160 form online and schedule visa interview at US Embassy in Islamabad or Karachi.',
          timeline: '2-4 weeks',
          documents: ['DS-160 confirmation', 'I-20', 'SEVIS receipt', 'Financial proof']
        },
        {
          title: 'Attend Visa Interview',
          description: 'Attend your scheduled interview. Be honest, confident, and have all documents ready.',
          timeline: '1 day',
          documents: ['Passport', 'I-20', 'Financial documents', 'Academic transcripts']
        }
      ],
      budget: {
        tuition: { min: 15000, max: 35000, description: 'Annual tuition fees vary by university and program' },
        applicationFees: { min: 500, max: 1500, description: 'University application and testing fees' },
        visaFees: { min: 350, max: 500, description: 'SEVIS fee + visa application fee' },
        medicalTests: { min: 200, max: 400, description: 'Required vaccinations and health checkup' },
        accommodation: { min: 8000, max: 15000, description: 'Annual housing costs (on/off campus)' },
        livingExpenses: { min: 10000, max: 18000, description: 'Food, transport, and other expenses' }
      },
      importantNotes: [
        'F-1 visa allows part-time work on campus (20 hours/week)',
        'STEM graduates can get 3-year OPT work authorization',
        'Strong ties to Pakistan must be demonstrated during interview'
      ]
    },
    workVisa: {
      difficulty: 'Hard',
      timeline: '6-12 months',
      totalCost: '5,000-15,000 USD',
      steps: [
        {
          title: 'Find US Employer',
          description: 'Secure a job offer from a US employer willing to sponsor your H-1B visa.',
          timeline: '3-6 months',
          documents: ['Resume/CV', 'Portfolio', 'Degree certificates']
        },
        {
          title: 'Employer Files H-1B Petition',
          description: 'Your employer must file Form I-129 petition with USCIS during the annual cap season.',
          timeline: '6 months',
          documents: ['Job offer letter', 'Labor Condition Application', 'Degree evaluation']
        },
        {
          title: 'Lottery Selection (if applicable)',
          description: 'If more applications than cap, USCIS conducts random lottery selection.',
          timeline: '2-3 months',
          documents: ['No additional documents needed']
        },
        {
          title: 'Apply for H-1B Visa',
          description: 'If petition approved, apply for visa at US Embassy with all required documents.',
          timeline: '2-4 weeks',
          documents: ['Approved I-129', 'DS-160', 'Employment letter', 'Degree certificates']
        }
      ],
      budget: {
        applicationFees: { min: 1500, max: 3000, description: 'Attorney fees and petition costs' },
        visaFees: { min: 190, max: 500, description: 'Visa application and processing fees' },
        medicalTests: { min: 200, max: 400, description: 'Required medical examination' },
        travelCosts: { min: 1000, max: 2000, description: 'Flight tickets and initial setup' },
        initialSetup: { min: 2000, max: 5000, description: 'First month accommodation and settling costs' },
        miscellaneous: { min: 500, max: 1000, description: 'Document translation and other expenses' }
      },
      importantNotes: [
        'H-1B has annual cap of 85,000 visas',
        'Bachelor\'s degree or higher required',
        'Job must be in specialty occupation related to your degree'
      ]
    }
  },
  {
    code: 'CA',
    name: 'Canada',
    emoji: '🇨🇦',
    region: 'North America',
    currency: 'CAD',
    description: 'Friendly immigration policies and excellent education system',
    budgetRange: { min: 2500000, max: 5500000 },
    studentVisa: {
      difficulty: 'Easy',
      timeline: '2-3 months',
      totalCost: '20,000-35,000 CAD',
      steps: [
        {
          title: 'Get Acceptance from DLI',
          description: 'Apply to Designated Learning Institution (DLI). Most accept IELTS 6.0+ overall.',
          timeline: '1-2 months',
          documents: ['Academic transcripts', 'IELTS results', 'Statement of Purpose', 'Letters of recommendation']
        },
        {
          title: 'Gather Required Documents',
          description: 'Collect all documents including financial proof, medical exam, and police clearance.',
          timeline: '2-4 weeks',
          documents: ['Acceptance letter', 'Financial statements', 'Medical exam', 'Police clearance certificate']
        },
        {
          title: 'Apply Online for Study Permit',
          description: 'Submit application through IRCC website with all supporting documents.',
          timeline: '4-6 weeks',
          documents: ['Completed application forms', 'Passport', 'Photos', 'Biometrics']
        },
        {
          title: 'Biometrics Appointment',
          description: 'Visit VAC in Islamabad or Karachi for biometrics collection.',
          timeline: '1 week',
          documents: ['Biometrics instruction letter', 'Passport', 'Application reference']
        }
      ],
      budget: {
        tuition: { min: 12000, max: 25000, description: 'Annual tuition fees for international students' },
        applicationFees: { min: 300, max: 800, description: 'University applications and tests' },
        visaFees: { min: 150, max: 300, description: 'Study permit and biometrics fees' },
        medicalTests: { min: 300, max: 500, description: 'Panel physician medical exam' },
        accommodation: { min: 6000, max: 12000, description: 'Annual housing costs' },
        livingExpenses: { min: 8000, max: 12000, description: 'Food, transport, and miscellaneous' }
      },
      importantNotes: [
        'Work 20 hours/week during studies, full-time during breaks',
        'Post-graduation work permit available for up to 3 years',
        'Pathway to permanent residency through various programs'
      ]
    },
    workVisa: {
      difficulty: 'Medium',
      timeline: '4-8 months',
      totalCost: '3,000-8,000 CAD',
      steps: [
        {
          title: 'Job Offer & LMIA',
          description: 'Secure job offer from Canadian employer who will apply for LMIA (if required).',
          timeline: '2-4 months',
          documents: ['Job offer letter', 'Employment contract', 'Resume']
        },
        {
          title: 'Apply for Work Permit',
          description: 'Submit work permit application with LMIA and job offer details.',
          timeline: '2-4 months',
          documents: ['LMIA', 'Job offer', 'Educational credentials', 'Language test results']
        },
        {
          title: 'Medical Exam & Biometrics',
          description: 'Complete medical examination and provide biometrics if requested.',
          timeline: '2-3 weeks',
          documents: ['Medical exam request', 'Passport', 'Biometrics instruction letter']
        }
      ],
      budget: {
        applicationFees: { min: 1000, max: 2500, description: 'LMIA fee and application costs' },
        visaFees: { min: 155, max: 255, description: 'Work permit application fee' },
        medicalTests: { min: 300, max: 500, description: 'Panel physician examination' },
        languageTests: { min: 300, max: 500, description: 'IELTS or CELPIP if required' },
        travelCosts: { min: 800, max: 1500, description: 'Flight and initial travel expenses' },
        initialSetup: { min: 2000, max: 4000, description: 'First month settlement costs' }
      },
      importantNotes: [
        'Many jobs are LMIA-exempt under international agreements',
        'Express Entry system for skilled workers',
        'Provincial Nominee Programs available'
      ]
    }
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    emoji: '🇬🇧',
    region: 'Europe',
    currency: 'GBP',
    description: 'Historic universities and strong job market in Europe',
    budgetRange: { min: 4000000, max: 9000000 },
    studentVisa: {
      difficulty: 'Medium',
      timeline: '3-4 months',
      totalCost: '25,000-45,000 GBP',
      steps: [
        {
          title: 'University Application',
          description: 'Apply through UCAS for undergraduate or directly for postgraduate programs.',
          timeline: '2-3 months',
          documents: ['Academic transcripts', 'IELTS results (6.5+ overall)', 'Personal statement', 'References']
        },
        {
          title: 'CAS Statement',
          description: 'University will issue Confirmation of Acceptance for Studies (CAS) after deposit payment.',
          timeline: '1-2 weeks',
          documents: ['Offer letter acceptance', 'Deposit payment', 'Financial documents']
        },
        {
          title: 'Student Visa Application',
          description: 'Apply online for Student visa (formerly Tier 4) with CAS number.',
          timeline: '3-4 weeks',
          documents: ['CAS statement', 'Financial proof', 'ATAS certificate (if required)', 'TB test results']
        },
        {
          title: 'Biometrics & Interview',
          description: 'Attend appointment at VFS Global in Karachi, Lahore, or Islamabad.',
          timeline: '1 week',
          documents: ['Appointment confirmation', 'Passport', 'Supporting documents']
        }
      ],
      budget: {
        tuition: { min: 15000, max: 30000, description: 'Annual international student fees' },
        applicationFees: { min: 500, max: 1000, description: 'UCAS and university application fees' },
        visaFees: { min: 348, max: 475, description: 'Student visa application fee' },
        healthSurcharge: { min: 470, max: 470, description: 'Immigration Health Surcharge per year' },
        accommodation: { min: 8000, max: 15000, description: 'Annual accommodation costs' },
        livingExpenses: { min: 10000, max: 13000, description: 'Food, transport, and personal expenses' }
      },
      importantNotes: [
        'Graduate route allows 2-3 years work after graduation',
        'Part-time work allowed up to 20 hours during term time',
        'Strong financial evidence required (28-day rule)'
      ]
    },
    workVisa: {
      difficulty: 'Hard',
      timeline: '4-6 months',
      totalCost: '3,000-8,000 GBP',
      steps: [
        {
          title: 'Skilled Worker Job Offer',
          description: 'Secure job offer from UK employer with valid sponsor license.',
          timeline: '2-4 months',
          documents: ['CV/Resume', 'Degree certificates', 'Experience letters']
        },
        {
          title: 'Certificate of Sponsorship',
          description: 'Employer will assign you Certificate of Sponsorship (CoS) for visa application.',
          timeline: '1-2 weeks',
          documents: ['Job contract', 'Salary details', 'Job description']
        },
        {
          title: 'Skilled Worker Visa Application',
          description: 'Apply online for Skilled Worker visa with CoS reference number.',
          timeline: '3-4 weeks',
          documents: ['CoS', 'English language certificate', 'Financial proof', 'Criminal record certificate']
        }
      ],
      budget: {
        applicationFees: { min: 610, max: 1408, description: 'Visa application fee (varies by duration)' },
        healthSurcharge: { min: 624, max: 624, description: 'Immigration Health Surcharge per year' },
        englishTest: { min: 150, max: 200, description: 'IELTS or approved English test' },
        documents: { min: 200, max: 500, description: 'Document translation and certificates' },
        travelCosts: { min: 600, max: 1200, description: 'Flight tickets' },
        initialSetup: { min: 2000, max: 4000, description: 'First month accommodation and setup' }
      },
      importantNotes: [
        'Job must meet minimum salary threshold (£25,600+)',
        'Points-based system - need 70 points minimum',
        'Pathway to settlement after 5 years'
      ]
    }
  },
  {
    code: 'AU',
    name: 'Australia',
    emoji: '🇦🇺',
    region: 'Oceania',
    currency: 'AUD',
    description: 'Beautiful country with excellent work-life balance and education',
    budgetRange: { min: 3000000, max: 7000000 },
    studentVisa: {
      difficulty: 'Easy',
      timeline: '1-2 months',
      totalCost: '30,000-50,000 AUD',
      steps: [
        {
          title: 'University Acceptance',
          description: 'Apply to Australian universities. Most require IELTS 6.5+ and academic transcripts.',
          timeline: '1-2 months',
          documents: ['Academic transcripts', 'IELTS results', 'Statement of Purpose', 'CV']
        },
        {
          title: 'Receive COE',
          description: 'University issues Confirmation of Enrolment (COE) after tuition deposit payment.',
          timeline: '1-2 weeks',
          documents: ['Offer letter acceptance', 'Tuition deposit payment', 'OSHC payment']
        },
        {
          title: 'Apply for Student Visa (500)',
          description: 'Submit online application through ImmiAccount with all required documents.',
          timeline: '2-4 weeks',
          documents: ['COE', 'Financial evidence', 'Health insurance', 'English proficiency proof']
        },
        {
          title: 'Health Examination',
          description: 'Complete medical examination at approved panel physician if requested.',
          timeline: '1 week',
          documents: ['Health examination request', 'Passport', 'Medical history']
        }
      ],
      budget: {
        tuition: { min: 20000, max: 35000, description: 'Annual tuition for international students' },
        visaFees: { min: 620, max: 620, description: 'Student visa application fee' },
        healthInsurance: { min: 500, max: 600, description: 'Overseas Student Health Cover (annual)' },
        medicalTests: { min: 300, max: 450, description: 'Health examination costs' },
        accommodation: { min: 10000, max: 18000, description: 'Annual housing costs' },
        livingExpenses: { min: 12000, max: 15000, description: 'Food, transport, and personal expenses' }
      },
      importantNotes: [
        'Work up to 48 hours per fortnight during studies',
        'Temporary Graduate visa (485) available after completion',
        'Genuine Temporary Entrant requirement must be met'
      ]
    },
    workVisa: {
      difficulty: 'Medium',
      timeline: '3-6 months',
      totalCost: '4,000-10,000 AUD',
      steps: [
        {
          title: 'Skills Assessment',
          description: 'Get qualifications assessed by relevant assessing authority for your occupation.',
          timeline: '2-3 months',
          documents: ['Degree certificates', 'Work experience letters', 'English test results']
        },
        {
          title: 'Expression of Interest (EOI)',
          description: 'Submit EOI through SkillSelect system and wait for invitation.',
          timeline: '1-6 months',
          documents: ['Skills assessment', 'English test results', 'Work experience evidence']
        },
        {
          title: 'Visa Application',
          description: 'Apply for appropriate work visa (189/190/491) after receiving invitation.',
          timeline: '6-9 months',
          documents: ['Invitation letter', 'Police clearance', 'Medical examination', 'Financial evidence']
        }
      ],
      budget: {
        skillsAssessment: { min: 500, max: 1500, description: 'Professional skills evaluation fees' },
        englishTest: { min: 300, max: 400, description: 'IELTS or PTE Academic test' },
        visaFees: { min: 4000, max: 4500, description: 'Visa application fee for main applicant' },
        medicalTests: { min: 400, max: 600, description: 'Health examination for visa' },
        documents: { min: 300, max: 500, description: 'Police checks and document costs' },
        travelCosts: { min: 1200, max: 2000, description: 'Flight tickets and initial travel' }
      },
      importantNotes: [
        'Points-based system - minimum 65 points required',
        'Occupation must be on relevant skilled occupation list',
        'Age limit of 45 for most skilled migration visas'
      ]
    }
  },
  {
    code: 'DE',
    name: 'Germany',
    emoji: '🇩🇪',
    region: 'Europe',
    currency: 'EUR',
    description: 'Free or low-cost education with strong economy and job market',
    budgetRange: { min: 1500000, max: 4000000 },
    studentVisa: {
      difficulty: 'Medium',
      timeline: '2-3 months',
      totalCost: '8,000-15,000 EUR',
      steps: [
        {
          title: 'University Admission',
          description: 'Apply to German universities through uni-assist or directly. Many programs taught in English.',
          timeline: '2-3 months',
          documents: ['Bachelor degree', 'Transcripts', 'IELTS/TOEFL', 'Motivation letter', 'CV']
        },
        {
          title: 'Blocked Account (Sperrkonto)',
          description: 'Open blocked account with €11,208 for one year to prove financial resources.',
          timeline: '1-2 weeks',
          documents: ['Passport copy', 'University acceptance', 'Bank statements']
        },
        {
          title: 'Student Visa Application',
          description: 'Apply at German Embassy in Islamabad with all required documents.',
          timeline: '4-6 weeks',
          documents: ['Passport', 'Acceptance letter', 'Blocked account certificate', 'Health insurance']
        },
        {
          title: 'Embassy Interview',
          description: 'Attend visa interview (if required) and submit biometric data.',
          timeline: '1 day',
          documents: ['All application documents', 'Additional academic certificates if requested']
        }
      ],
      budget: {
        tuition: { min: 0, max: 3000, description: 'Most public universities have no tuition fees' },
        semesterFee: { min: 150, max: 400, description: 'Administrative and student services fee per semester' },
        visaFees: { min: 75, max: 75, description: 'Student visa application fee' },
        blockedAccount: { min: 11208, max: 11208, description: 'Required financial proof for one year' },
        healthInsurance: { min: 800, max: 1200, description: 'Mandatory health insurance annual cost' },
        accommodation: { min: 3000, max: 6000, description: 'Annual housing costs (varies by city)' }
      },
      importantNotes: [
        'Work up to 120 full days or 240 half days per year',
        '18-month job search visa after graduation',
        'Learn basic German for better opportunities'
      ]
    },
    workVisa: {
      difficulty: 'Medium',
      timeline: '3-5 months',
      totalCost: '2,000-5,000 EUR',
      steps: [
        {
          title: 'Job Search & Offer',
          description: 'Find job in Germany that matches your qualifications. EU Blue Card for skilled workers.',
          timeline: '2-4 months',
          documents: ['University degrees', 'Work experience certificates', 'German CV format']
        },
        {
          title: 'Credential Recognition',
          description: 'Get your degrees recognized by German authorities if required for your profession.',
          timeline: '1-3 months',
          documents: ['Degree certificates', 'Transcripts', 'Professional certificates']
        },
        {
          title: 'Work Visa Application',
          description: 'Apply for work visa or EU Blue Card at German Embassy.',
          timeline: '4-8 weeks',
          documents: ['Job contract', 'Degree recognition', 'CV', 'Health insurance proof']
        }
      ],
      budget: {
        credentialRecognition: { min: 200, max: 600, description: 'Degree recognition and evaluation costs' },
        visaFees: { min: 75, max: 140, description: 'Work visa or EU Blue Card application fee' },
        languageCourse: { min: 500, max: 1500, description: 'German language learning (recommended)' },
        documents: { min: 150, max: 300, description: 'Document translation and notarization' },
        travelCosts: { min: 400, max: 800, description: 'Flight tickets to Germany' },
        initialSetup: { min: 1500, max: 3000, description: 'First month accommodation and setup' }
      },
      importantNotes: [
        'EU Blue Card requires salary above €56,400 annually',
        'High demand for IT, engineering, and healthcare professionals',
        'Basic German knowledge helpful but not always required'
      ]
    }
  },
  {
    code: 'IT',
    name: 'Italy',
    emoji: '🇮🇹',
    region: 'Europe',
    currency: 'EUR',
    description: 'Rich culture, affordable education, and beautiful lifestyle',
    budgetRange: { min: 1200000, max: 3500000 },
    studentVisa: {
      difficulty: 'Easy',
      timeline: '2-3 months',
      totalCost: '8,000-18,000 EUR',
      steps: [
        {
          title: 'University Application',
          description: 'Apply to Italian universities directly or through Universitaly portal. Many programs in English.',
          timeline: '2-3 months',
          documents: ['Academic transcripts', 'IELTS/TOEFL', 'Statement of Purpose', 'Passport copy']
        },
        {
          title: 'Pre-enrollment Declaration',
          description: 'Submit pre-enrollment at Italian Embassy/Consulate in Pakistan.',
          timeline: '2-4 weeks',
          documents: ['University acceptance', 'Academic qualifications', 'Financial proof']
        },
        {
          title: 'Student Visa Application',
          description: 'Apply for national visa (Type D) at Italian Embassy in Islamabad.',
          timeline: '3-4 weeks',
          documents: ['Passport', 'Acceptance letter', 'Financial proof', 'Health insurance']
        },
        {
          title: 'Residence Permit in Italy',
          description: 'Apply for residence permit (Permesso di Soggiorno) within 8 days of arrival.',
          timeline: '2-3 weeks',
          documents: ['Passport', 'Visa', 'University enrollment', 'Accommodation proof']
        }
      ],
      budget: {
        tuition: { min: 900, max: 4000, description: 'Annual tuition fees (public universities very affordable)' },
        applicationFees: { min: 200, max: 500, description: 'University application and test fees' },
        visaFees: { min: 116, max: 116, description: 'Student visa application fee' },
        healthInsurance: { min: 150, max: 300, description: 'Health insurance coverage' },
        accommodation: { min: 3000, max: 6000, description: 'Annual housing costs' },
        livingExpenses: { min: 4000, max: 8000, description: 'Food, transport, and personal expenses' }
      },
      importantNotes: [
        'Part-time work allowed up to 20 hours per week',
        'EU citizenship possible after 10 years of residence',
        'Learn basic Italian for better integration'
      ]
    },
    workVisa: {
      difficulty: 'Medium',
      timeline: '3-6 months',
      totalCost: '2,000-5,000 EUR',
      steps: [
        {
          title: 'Job Offer & Nulla Osta',
          description: 'Secure job offer from Italian employer who will apply for work authorization (Nulla Osta).',
          timeline: '2-4 months',
          documents: ['Job contract', 'CV', 'Degree certificates']
        },
        {
          title: 'Work Visa Application',
          description: 'Apply for work visa at Italian Embassy after Nulla Osta approval.',
          timeline: '4-6 weeks',
          documents: ['Nulla Osta', 'Job contract', 'Passport', 'Health insurance']
        },
        {
          title: 'Residence Permit',
          description: 'Apply for work residence permit within 8 days of arrival in Italy.',
          timeline: '2-4 weeks',
          documents: ['Passport', 'Work visa', 'Employment contract', 'Accommodation proof']
        }
      ],
      budget: {
        applicationFees: { min: 500, max: 1000, description: 'Legal and application processing fees' },
        visaFees: { min: 116, max: 116, description: 'Work visa application fee' },
        healthInsurance: { min: 300, max: 500, description: 'Health insurance coverage' },
        documents: { min: 200, max: 400, description: 'Document translation and legalization' },
        travelCosts: { min: 400, max: 800, description: 'Flight tickets to Italy' },
        initialSetup: { min: 1000, max: 2500, description: 'First month accommodation and setup' }
      },
      importantNotes: [
        'EU Blue Card available for highly skilled workers',
        'Permanent residence after 5 years',
        'Italian language knowledge preferred for most jobs'
      ]
    }
  },
  {
    code: 'AT',
    name: 'Austria',
    emoji: '🇦🇹',
    region: 'Europe',
    currency: 'EUR',
    description: 'High quality education and excellent living standards',
    budgetRange: { min: 1800000, max: 4200000 },
    studentVisa: {
      difficulty: 'Medium',
      timeline: '2-4 months',
      totalCost: '12,000-20,000 EUR',
      steps: [
        {
          title: 'University Admission',
          description: 'Apply to Austrian universities. Some programs require entrance exams or German proficiency.',
          timeline: '2-3 months',
          documents: ['Academic transcripts', 'German/English proficiency', 'Motivation letter', 'CV']
        },
        {
          title: 'Student Residence Permit',
          description: 'Apply for residence permit for students at Austrian Embassy in Islamabad.',
          timeline: '6-8 weeks',
          documents: ['University acceptance', 'Financial proof', 'Health insurance', 'Clean criminal record']
        },
        {
          title: 'Registration in Austria',
          description: 'Register with local authorities (Meldezettel) within 3 days of arrival.',
          timeline: '1 day',
          documents: ['Passport', 'Residence permit', 'Accommodation contract']
        }
      ],
      budget: {
        tuition: { min: 726, max: 1500, description: 'Annual tuition fees (EU rates for some programs)' },
        applicationFees: { min: 300, max: 600, description: 'University application fees' },
        visaFees: { min: 120, max: 120, description: 'Residence permit application fee' },
        healthInsurance: { min: 600, max: 900, description: 'Mandatory health insurance' },
        accommodation: { min: 4000, max: 8000, description: 'Annual housing costs' },
        livingExpenses: { min: 6000, max: 10000, description: 'Food, transport, and personal expenses' }
      },
      importantNotes: [
        'Work up to 20 hours per week during studies',
        'German language skills highly recommended',
        'Excellent public transportation system'
      ]
    },
    workVisa: {
      difficulty: 'Hard',
      timeline: '4-8 months',
      totalCost: '3,000-7,000 EUR',
      steps: [
        {
          title: 'Job Offer & Work Permit',
          description: 'Secure job offer from Austrian employer who will apply for work permit (Beschäftigungsbewilligung).',
          timeline: '3-6 months',
          documents: ['Job contract', 'Qualifications', 'CV']
        },
        {
          title: 'Red-White-Red Card Application',
          description: 'Apply for Red-White-Red Card for skilled workers at Austrian Embassy.',
          timeline: '2-4 months',
          documents: ['Work permit', 'Qualifications', 'German language certificate', 'Financial proof']
        },
        {
          title: 'Registration in Austria',
          description: 'Complete registration formalities upon arrival in Austria.',
          timeline: '1 week',
          documents: ['Passport', 'Red-White-Red Card', 'Employment contract']
        }
      ],
      budget: {
        applicationFees: { min: 1000, max: 2000, description: 'Work permit and legal fees' },
        visaFees: { min: 160, max: 160, description: 'Red-White-Red Card application fee' },
        languageTest: { min: 200, max: 400, description: 'German language certification' },
        documents: { min: 300, max: 500, description: 'Document translation and certification' },
        travelCosts: { min: 500, max: 1000, description: 'Flight tickets to Austria' },
        initialSetup: { min: 1500, max: 3000, description: 'First month accommodation and setup' }
      },
      importantNotes: [
        'Points-based system for skilled workers',
        'German language proficiency required (A1-B1 level)',
        'Permanent residence after 5 years'
      ]
    }
  },
  {
    code: 'FI',
    name: 'Finland',
    emoji: '🇫🇮',
    region: 'Europe',
    currency: 'EUR',
    description: 'Excellent education system and high quality of life',
    budgetRange: { min: 1500000, max: 3800000 },
    studentVisa: {
      difficulty: 'Easy',
      timeline: '1-3 months',
      totalCost: '8,000-15,000 EUR',
      steps: [
        {
          title: 'University Application',
          description: 'Apply through Studyinfo.fi portal. Most programs taught in English at master\'s level.',
          timeline: '2-3 months',
          documents: ['Academic transcripts', 'IELTS/TOEFL', 'Motivation letter', 'CV']
        },
        {
          title: 'Student Residence Permit',
          description: 'Apply online for residence permit through Enter Finland service.',
          timeline: '1-2 months',
          documents: ['University acceptance', 'Financial proof (€6,720/year)', 'Health insurance']
        },
        {
          title: 'Biometrics Appointment',
          description: 'Attend biometrics appointment at VFS Global in Pakistan.',
          timeline: '1 week',
          documents: ['Passport', 'Application confirmation', 'Supporting documents']
        }
      ],
      budget: {
        tuition: { min: 0, max: 18000, description: 'EU students free, non-EU varies by program' },
        applicationFees: { min: 100, max: 100, description: 'Application fee for non-EU students' },
        visaFees: { min: 330, max: 450, description: 'Residence permit application fee' },
        healthInsurance: { min: 300, max: 600, description: 'Health insurance coverage' },
        accommodation: { min: 3000, max: 6000, description: 'Annual housing costs' },
        livingExpenses: { min: 4000, max: 8000, description: 'Food, transport, and personal expenses' }
      },
      importantNotes: [
        'Work up to 25 hours per week during studies',
        'Excellent English proficiency among locals',
        'Free healthcare for students'
      ]
    },
    workVisa: {
      difficulty: 'Medium',
      timeline: '2-4 months',
      totalCost: '2,000-4,000 EUR',
      steps: [
        {
          title: 'Job Search & Offer',
          description: 'Find employment in Finland. High demand for IT and engineering professionals.',
          timeline: '1-3 months',
          documents: ['CV', 'Qualifications', 'Portfolio']
        },
        {
          title: 'Work-based Residence Permit',
          description: 'Apply for residence permit based on employment through Enter Finland.',
          timeline: '1-2 months',
          documents: ['Job contract', 'Employer details', 'Qualifications', 'Financial proof']
        },
        {
          title: 'Biometrics & Arrival',
          description: 'Complete biometrics and travel to Finland to start employment.',
          timeline: '1 week',
          documents: ['Passport', 'Residence permit decision', 'Employment contract']
        }
      ],
      budget: {
        applicationFees: { min: 500, max: 1000, description: 'Application processing fees' },
        visaFees: { min: 450, max: 520, description: 'Work-based residence permit fee' },
        healthInsurance: { min: 400, max: 600, description: 'Health insurance coverage' },
        documents: { min: 200, max: 300, description: 'Document translation and certification' },
        travelCosts: { min: 600, max: 1200, description: 'Flight tickets to Finland' },
        initialSetup: { min: 1000, max: 2000, description: 'First month accommodation and setup' }
      },
      importantNotes: [
        'No language requirement for most international jobs',
        'Permanent residence after 4 years',
        'Excellent work-life balance'
      ]
    }
  },
  {
    code: 'NO',
    name: 'Norway',
    emoji: '🇳🇴',
    region: 'Europe',
    currency: 'NOK',
    description: 'Free education and stunning natural beauty',
    budgetRange: { min: 2000000, max: 4500000 },
    studentVisa: {
      difficulty: 'Easy',
      timeline: '1-3 months',
      totalCost: '15,000-25,000 NOK',
      steps: [
        {
          title: 'University Application',
          description: 'Apply through Samordna opptak for bachelor\'s or directly to universities for master\'s.',
          timeline: '2-3 months',
          documents: ['Academic transcripts', 'IELTS/TOEFL', 'Motivation letter', 'CV']
        },
        {
          title: 'Student Residence Permit',
          description: 'Apply online through UDI (Norwegian Directorate of Immigration) website.',
          timeline: '1-2 months',
          documents: ['University acceptance', 'Financial proof (NOK 123,519/year)', 'Health insurance']
        },
        {
          title: 'Biometrics & Decision',
          description: 'Attend biometrics appointment and wait for permit decision.',
          timeline: '2-4 weeks',
          documents: ['Passport', 'Application confirmation', 'Supporting documents']
        }
      ],
      budget: {
        tuition: { min: 0, max: 0, description: 'Public universities are tuition-free' },
        semesterFee: { min: 300, max: 600, description: 'Student union and administrative fees' },
        visaFees: { min: 5900, max: 5900, description: 'Student residence permit fee' },
        healthInsurance: { min: 2000, max: 3000, description: 'Health insurance coverage' },
        accommodation: { min: 60000, max: 100000, description: 'Annual housing costs (expensive)' },
        livingExpenses: { min: 80000, max: 120000, description: 'Food, transport, and personal expenses' }
      },
      importantNotes: [
        'Work up to 20 hours per week during studies',
        'Excellent English proficiency among locals',
        'High cost of living but free education'
      ]
    },
    workVisa: {
      difficulty: 'Medium',
      timeline: '2-4 months',
      totalCost: '10,000-20,000 NOK',
      steps: [
        {
          title: 'Job Offer from Norwegian Employer',
          description: 'Secure employment with Norwegian company. High demand for skilled workers.',
          timeline: '1-3 months',
          documents: ['CV', 'Qualifications', 'Experience certificates']
        },
        {
          title: 'Work Residence Permit Application',
          description: 'Apply through UDI for work-based residence permit.',
          timeline: '1-2 months',
          documents: ['Job contract', 'Employer registration', 'Qualifications', 'Financial proof']
        },
        {
          title: 'Biometrics & Arrival',
          description: 'Complete biometrics process and travel to Norway.',
          timeline: '2-3 weeks',
          documents: ['Passport', 'Residence permit', 'Employment contract']
        }
      ],
      budget: {
        applicationFees: { min: 2000, max: 4000, description: 'Application processing fees' },
        visaFees: { min: 5900, max: 5900, description: 'Work residence permit fee' },
        healthInsurance: { min: 3000, max: 4000, description: 'Health insurance coverage' },
        documents: { min: 1000, max: 1500, description: 'Document translation and certification' },
        travelCosts: { min: 8000, max: 15000, description: 'Flight tickets to Norway' },
        initialSetup: { min: 15000, max: 25000, description: 'First month accommodation and setup' }
      },
      importantNotes: [
        'High salaries compensate for high living costs',
        'Permanent residence after 3 years',
        'Excellent work-life balance and benefits'
      ]
    }
  },
  {
    code: 'BE',
    name: 'Belgium',
    emoji: '🇧🇪',
    region: 'Europe',
    currency: 'EUR',
    description: 'Heart of Europe with excellent universities',
    budgetRange: { min: 1400000, max: 3200000 },
    studentVisa: {
      difficulty: 'Easy',
      timeline: '2-3 months',
      totalCost: '8,000-16,000 EUR',
      steps: [
        {
          title: 'University Application',
          description: 'Apply to Belgian universities. Many programs available in English.',
          timeline: '2-3 months',
          documents: ['Academic transcripts', 'IELTS/TOEFL', 'Motivation letter', 'CV']
        },
        {
          title: 'Student Visa Application',
          description: 'Apply for Type D student visa at Belgian Embassy in Islamabad.',
          timeline: '3-4 weeks',
          documents: ['University acceptance', 'Financial proof', 'Health insurance', 'Clean criminal record']
        },
        {
          title: 'Registration in Belgium',
          description: 'Register with local municipality within 8 days of arrival.',
          timeline: '1 day',
          documents: ['Passport', 'Visa', 'University enrollment', 'Accommodation proof']
        }
      ],
      budget: {
        tuition: { min: 835, max: 4175, description: 'Annual tuition fees (EU rates for some students)' },
        applicationFees: { min: 200, max: 500, description: 'University application fees' },
        visaFees: { min: 180, max: 180, description: 'Student visa application fee' },
        healthInsurance: { min: 400, max: 600, description: 'Health insurance coverage' },
        accommodation: { min: 3500, max: 7000, description: 'Annual housing costs' },
        livingExpenses: { min: 4000, max: 8000, description: 'Food, transport, and personal expenses' }
      },
      importantNotes: [
        'Work up to 20 hours per week during studies',
        'Three official languages: Dutch, French, German',
        'Central location in Europe for travel'
      ]
    },
    workVisa: {
      difficulty: 'Medium',
      timeline: '3-5 months',
      totalCost: '2,500-5,000 EUR',
      steps: [
        {
          title: 'Job Offer & Work Permit',
          description: 'Secure job offer from Belgian employer who will apply for work permit.',
          timeline: '2-4 months',
          documents: ['Job contract', 'CV', 'Qualifications']
        },
        {
          title: 'Work Visa Application',
          description: 'Apply for Type D work visa at Belgian Embassy.',
          timeline: '4-6 weeks',
          documents: ['Work permit', 'Job contract', 'Passport', 'Health insurance']
        },
        {
          title: 'Registration & Work Card',
          description: 'Register with municipality and obtain work card upon arrival.',
          timeline: '1-2 weeks',
          documents: ['Passport', 'Work visa', 'Employment contract', 'Accommodation proof']
        }
      ],
      budget: {
        applicationFees: { min: 800, max: 1500, description: 'Work permit and legal fees' },
        visaFees: { min: 180, max: 180, description: 'Work visa application fee' },
        healthInsurance: { min: 500, max: 800, description: 'Health insurance coverage' },
        documents: { min: 300, max: 500, description: 'Document translation and legalization' },
        travelCosts: { min: 500, max: 1000, description: 'Flight tickets to Belgium' },
        initialSetup: { min: 1500, max: 3000, description: 'First month accommodation and setup' }
      },
      importantNotes: [
        'EU Blue Card available for highly skilled workers',
        'Permanent residence after 5 years',
        'Multilingual environment advantageous'
      ]
    }
  },
  {
    code: 'NL',
    name: 'Netherlands',
    emoji: '🇳🇱',
    region: 'Europe',
    currency: 'EUR',
    description: 'Innovative education system and bike-friendly cities',
    budgetRange: { min: 2000000, max: 4800000 },
    studentVisa: {
      difficulty: 'Easy',
      timeline: '1-2 months',
      totalCost: '12,000-25,000 EUR',
      steps: [
        {
          title: 'University Application',
          description: 'Apply to Dutch universities through Studielink or directly. Many English programs.',
          timeline: '2-3 months',
          documents: ['Academic transcripts', 'IELTS/TOEFL', 'Motivation letter', 'CV']
        },
        {
          title: 'Student Residence Permit',
          description: 'University will apply for residence permit on your behalf (TEV procedure).',
          timeline: '2-4 weeks',
          documents: ['University acceptance', 'Financial proof', 'Health insurance', 'Passport copy']
        },
        {
          title: 'Collect Residence Permit',
          description: 'Collect your residence permit from IND upon arrival in Netherlands.',
          timeline: '1 day',
          documents: ['Passport', 'University enrollment', 'Accommodation proof']
        }
      ],
      budget: {
        tuition: { min: 2168, max: 20000, description: 'Annual tuition fees (EU vs non-EU rates)' },
        applicationFees: { min: 100, max: 100, description: 'University application fee' },
        visaFees: { min: 350, max: 350, description: 'Residence permit application fee' },
        healthInsurance: { min: 1400, max: 1600, description: 'Mandatory health insurance' },
        accommodation: { min: 4000, max: 8000, description: 'Annual housing costs' },
        livingExpenses: { min: 5000, max: 10000, description: 'Food, transport, and personal expenses' }
      },
      importantNotes: [
        'Work up to 16 hours per week during studies',
        'Excellent English proficiency among locals',
        'Orientation year available after graduation'
      ]
    },
    workVisa: {
      difficulty: 'Medium',
      timeline: '2-4 months',
      totalCost: '3,000-6,000 EUR',
      steps: [
        {
          title: 'Job Offer & Sponsorship',
          description: 'Secure job offer from Dutch employer who is recognized sponsor.',
          timeline: '1-3 months',
          documents: ['CV', 'Qualifications', 'Experience certificates']
        },
        {
          title: 'Work Residence Permit',
          description: 'Employer applies for combined work and residence permit (GVVA).',
          timeline: '2-3 months',
          documents: ['Job contract', 'Employer sponsorship', 'Qualifications', 'Passport']
        },
        {
          title: 'Arrival & Registration',
          description: 'Travel to Netherlands and complete registration formalities.',
          timeline: '1 week',
          documents: ['Passport', 'Residence permit', 'Employment contract']
        }
      ],
      budget: {
        applicationFees: { min: 1000, max: 2000, description: 'Sponsorship and application fees' },
        visaFees: { min: 350, max: 350, description: 'Residence permit fee' },
        healthInsurance: { min: 1400, max: 1600, description: 'Mandatory health insurance' },
        documents: { min: 300, max: 500, description: 'Document translation and legalization' },
        travelCosts: { min: 600, max: 1200, description: 'Flight tickets to Netherlands' },
        initialSetup: { min: 2000, max: 4000, description: 'First month accommodation and setup' }
      },
      importantNotes: [
        'Highly Skilled Migrant program available',
        'Permanent residence after 5 years',
        'Excellent work-life balance'
      ]
    }
  },
  {
    code: 'SE',
    name: 'Sweden',
    emoji: '🇸🇪',
    region: 'Europe',
    currency: 'SEK',
    description: 'Innovation hub with excellent work-life balance',
    budgetRange: { min: 1800000, max: 4200000 },
    studentVisa: {
      difficulty: 'Easy',
      timeline: '1-3 months',
      totalCost: '120,000-200,000 SEK',
      steps: [
        {
          title: 'University Application',
          description: 'Apply through universityadmissions.se for most programs. Many taught in English.',
          timeline: '2-3 months',
          documents: ['Academic transcripts', 'IELTS/TOEFL', 'Motivation letter', 'CV']
        },
        {
          title: 'Student Residence Permit',
          description: 'Apply online through Swedish Migration Agency after university acceptance.',
          timeline: '1-2 months',
          documents: ['University acceptance', 'Financial proof (SEK 96,000/year)', 'Health insurance']
        },
        {
          title: 'Biometrics & Decision',
          description: 'Attend biometrics appointment and wait for permit decision.',
          timeline: '2-4 weeks',
          documents: ['Passport', 'Application confirmation', 'Supporting documents']
        }
      ],
      budget: {
        tuition: { min: 80000, max: 140000, description: 'Annual tuition fees for non-EU students' },
        applicationFees: { min: 900, max: 900, description: 'University application fee' },
        visaFees: { min: 1500, max: 1500, description: 'Student residence permit fee' },
        healthInsurance: { min: 3000, max: 4000, description: 'Health insurance coverage' },
        accommodation: { min: 50000, max: 80000, description: 'Annual housing costs' },
        livingExpenses: { min: 60000, max: 90000, description: 'Food, transport, and personal expenses' }
      },
      importantNotes: [
        'Work unlimited hours during summer breaks',
        'Excellent English proficiency among locals',
        'Free healthcare for students'
      ]
    },
    workVisa: {
      difficulty: 'Medium',
      timeline: '2-4 months',
      totalCost: '15,000-30,000 SEK',
      steps: [
        {
          title: 'Job Offer from Swedish Employer',
          description: 'Secure employment with Swedish company. High demand for tech professionals.',
          timeline: '1-3 months',
          documents: ['CV', 'Qualifications', 'Experience certificates']
        },
        {
          title: 'Work Residence Permit',
          description: 'Apply through Swedish Migration Agency for work permit.',
          timeline: '1-3 months',
          documents: ['Job contract', 'Employer details', 'Qualifications', 'Financial proof']
        },
        {
          title: 'Arrival & Registration',
          description: 'Travel to Sweden and complete registration with Tax Agency.',
          timeline: '1 week',
          documents: ['Passport', 'Residence permit', 'Employment contract']
        }
      ],
      budget: {
        applicationFees: { min: 2000, max: 4000, description: 'Application processing fees' },
        visaFees: { min: 2000, max: 2000, description: 'Work residence permit fee' },
        healthInsurance: { min: 4000, max: 6000, description: 'Health insurance coverage' },
        documents: { min: 1000, max: 1500, description: 'Document translation and certification' },
        travelCosts: { min: 8000, max: 12000, description: 'Flight tickets to Sweden' },
        initialSetup: { min: 15000, max: 25000, description: 'First month accommodation and setup' }
      },
      importantNotes: [
        'Permanent residence after 4 years',
        'Excellent parental leave benefits',
        'High taxes but excellent social benefits'
      ]
    }
  },
  {
    code: 'FR',
    name: 'France',
    emoji: '🇫🇷',
    region: 'Europe',
    currency: 'EUR',
    description: 'Rich culture, excellent cuisine, and prestigious universities',
    budgetRange: { min: 1600000, max: 4000000 },
    studentVisa: {
      difficulty: 'Medium',
      timeline: '2-4 months',
      totalCost: '10,000-20,000 EUR',
      steps: [
        {
          title: 'Campus France Registration',
          description: 'Register with Campus France and complete preliminary admission procedure.',
          timeline: '1-2 months',
          documents: ['Academic transcripts', 'French/English proficiency', 'Motivation letter', 'CV']
        },
        {
          title: 'University Application',
          description: 'Apply to French universities through Campus France or directly.',
          timeline: '2-3 months',
          documents: ['Campus France approval', 'Academic documents', 'Language certificates']
        },
        {
          title: 'Student Visa Application',
          description: 'Apply for long-stay student visa at French Embassy in Islamabad.',
          timeline: '3-4 weeks',
          documents: ['University acceptance', 'Financial proof', 'Health insurance', 'Accommodation proof']
        },
        {
          title: 'OFII Registration',
          description: 'Complete OFII registration within 3 months of arrival in France.',
          timeline: '2-3 weeks',
          documents: ['Passport', 'Visa', 'University enrollment', 'Medical examination']
        }
      ],
      budget: {
        tuition: { min: 170, max: 10000, description: 'Annual tuition fees (public vs private)' },
        campusFrance: { min: 200, max: 200, description: 'Campus France application fee' },
        visaFees: { min: 99, max: 99, description: 'Student visa application fee' },
        healthInsurance: { min: 200, max: 400, description: 'Student health insurance' },
        accommodation: { min: 3000, max: 8000, description: 'Annual housing costs' },
        livingExpenses: { min: 6000, max: 12000, description: 'Food, transport, and personal expenses' }
      },
      importantNotes: [
        'Work up to 20 hours per week during studies',
        'French language skills helpful for daily life',
        'Excellent public transportation system'
      ]
    },
    workVisa: {
      difficulty: 'Hard',
      timeline: '4-8 months',
      totalCost: '3,000-8,000 EUR',
      steps: [
        {
          title: 'Job Offer & Work Authorization',
          description: 'Secure job offer from French employer who will apply for work authorization.',
          timeline: '3-6 months',
          documents: ['Job contract', 'CV', 'Qualifications']
        },
        {
          title: 'Work Visa Application',
          description: 'Apply for long-stay work visa at French Embassy.',
          timeline: '4-8 weeks',
          documents: ['Work authorization', 'Job contract', 'Passport', 'Health insurance']
        },
        {
          title: 'OFII Registration',
          description: 'Complete OFII registration and medical examination upon arrival.',
          timeline: '2-4 weeks',
          documents: ['Passport', 'Work visa', 'Employment contract', 'Medical examination']
        }
      ],
      budget: {
        applicationFees: { min: 1000, max: 2500, description: 'Work authorization and legal fees' },
        visaFees: { min: 99, max: 99, description: 'Work visa application fee' },
        healthInsurance: { min: 600, max: 1000, description: 'Health insurance coverage' },
        documents: { min: 400, max: 600, description: 'Document translation and legalization' },
        travelCosts: { min: 600, max: 1200, description: 'Flight tickets to France' },
        initialSetup: { min: 2000, max: 4000, description: 'First month accommodation and setup' }
      },
      importantNotes: [
        'French language proficiency often required',
        'EU Blue Card available for highly skilled workers',
        'Permanent residence after 5 years'
      ]
    }
  },
  {
    code: 'IE',
    name: 'Ireland',
    emoji: '🇮🇪',
    region: 'Europe',
    currency: 'EUR',
    description: 'English-speaking EU country with thriving tech industry',
    budgetRange: { min: 2200000, max: 5000000 },
    studentVisa: {
      difficulty: 'Easy',
      timeline: '2-3 months',
      totalCost: '15,000-30,000 EUR',
      steps: [
        {
          title: 'University Application',
          description: 'Apply to Irish universities through CAO (undergrad) or directly (postgrad).',
          timeline: '2-3 months',
          documents: ['Academic transcripts', 'IELTS results', 'Personal statement', 'References']
        },
        {
          title: 'Student Visa Application',
          description: 'Apply for study visa at Irish Embassy in Islamabad (if required).',
          timeline: '4-6 weeks',
          documents: ['University acceptance', 'Financial proof', 'Health insurance', 'Accommodation proof']
        },
        {
          title: 'IRP Registration',
          description: 'Register for Irish Residence Permit (IRP) within 90 days of arrival.',
          timeline: '2-3 weeks',
          documents: ['Passport', 'Visa', 'University enrollment', 'Accommodation proof']
        }
      ],
      budget: {
        tuition: { min: 10000, max: 25000, description: 'Annual tuition fees for international students' },
        applicationFees: { min: 300, max: 600, description: 'University application fees' },
        visaFees: { min: 60, max: 100, description: 'Student visa application fee' },
        healthInsurance: { min: 500, max: 800, description: 'Health insurance coverage' },
        accommodation: { min: 6000, max: 12000, description: 'Annual housing costs' },
        livingExpenses: { min: 7000, max: 12000, description: 'Food, transport, and personal expenses' }
      },
      importantNotes: [
        'Work up to 20 hours per week during studies',
        'English-speaking country - no language barrier',
        '2-year stay-back option after graduation'
      ]
    },
    workVisa: {
      difficulty: 'Medium',
      timeline: '3-6 months',
      totalCost: '2,000-5,000 EUR',
      steps: [
        {
          title: 'Job Offer & Employment Permit',
          description: 'Secure job offer from Irish employer who will apply for employment permit.',
          timeline: '2-4 months',
          documents: ['Job contract', 'CV', 'Qualifications']
        },
        {
          title: 'Work Visa Application',
          description: 'Apply for work visa at Irish Embassy after employment permit approval.',
          timeline: '4-6 weeks',
          documents: ['Employment permit', 'Job contract', 'Passport', 'Health insurance']
        },
        {
          title: 'IRP Registration',
          description: 'Register for Irish Residence Permit upon arrival in Ireland.',
          timeline: '2-3 weeks',
          documents: ['Passport', 'Work visa', 'Employment contract', 'Accommodation proof']
        }
      ],
      budget: {
        applicationFees: { min: 500, max: 1500, description: 'Employment permit and legal fees' },
        visaFees: { min: 60, max: 100, description: 'Work visa application fee' },
        healthInsurance: { min: 600, max: 1000, description: 'Health insurance coverage' },
        documents: { min: 200, max: 400, description: 'Document certification and translation' },
        travelCosts: { min: 600, max: 1200, description: 'Flight tickets to Ireland' },
        initialSetup: { min: 1500, max: 3000, description: 'First month accommodation and setup' }
      },
      importantNotes: [
        'Critical Skills Employment Permit for in-demand occupations',
        'Permanent residence after 5 years',
        'Strong tech industry with many opportunities'
      ]
    }
  }
];