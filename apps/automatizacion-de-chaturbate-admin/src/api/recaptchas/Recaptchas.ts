export type Recaptchas = {
  createdAt: Date;
  id: string;
  isSuccess: boolean | null;
  response: string | null;
  siteKey: string | null;
  updatedAt: Date;
};
