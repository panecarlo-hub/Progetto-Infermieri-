// Types for MedLinker Platform

export type Locale = 'it' | 'es';

export interface User {
  id: string;
  email: string;
  role: 'worker' | 'employer' | 'admin';
  createdAt: Date;
  verified: boolean;
}

export interface Worker extends User {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  nationality: string;
  phone: string;
  address: string;
  specializations: string[];
  yearsOfExperience: number;
  languages: string[];
  professionalRegister?: string; // Albo professionale
  availability: 'immediate' | 'within_month' | 'within_3_months' | 'negotiable';
  profileComplete: boolean;
  documents: Document[];
  education: Education[];
  workExperience: WorkExperience[];
}

export interface Employer extends User {
  companyName: string;
  vatNumber: string; // Partita IVA
  address: string;
  pec: string;
  reaNumber: string; // Numero REA
  companyType: 'hospital' | 'rsa' | 'clinic' | 'agency' | 'medical_center' | 'other';
  contactPerson: string;
  phone: string;
  subscriptionActive: boolean;
  subscriptionPlan?: SubscriptionPlan;
}

export interface Document {
  id: string;
  type: 'cv' | 'diploma' | 'certificate' | 'id' | 'visa' | 'other';
  name: string;
  uploadedAt: Date;
  verified: boolean;
  verifiedBy?: string;
  verifiedAt?: Date;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  country: string;
  startYear: number;
  endYear: number;
  recognized: boolean; // Titolo riconosciuto in Italia
}

export interface WorkExperience {
  id: string;
  employer: string;
  position: string;
  country: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  price: number;
  duration: 'monthly' | 'quarterly' | 'annual';
  features: string[];
  maxContacts: number;
  highlighted: boolean;
}

export interface SearchFilters {
  specialization?: string;
  yearsOfExperience?: number;
  nationality?: string;
  languages?: string[];
  availability?: string;
  hasRegister?: boolean;
}

export interface ContactRequest {
  id: string;
  employerId: string;
  workerId: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
  message?: string;
}

export interface Translation {
  [key: string]: string | string[] | Translation;
}
